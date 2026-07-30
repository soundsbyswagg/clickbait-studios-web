'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotionPreference } from '@/components/a11y/ReducedMotionProvider';

export function AudioReactiveVisualizer({ audioElement }: { audioElement?: HTMLAudioElement | null }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(false);
  const reducedMotion = useReducedMotionPreference();

  useEffect(() => {
    if (!active || reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    let frame = 0;
    let audioContext: AudioContext | null = null;
    let analyser: AnalyserNode | null = null;
    let data: Uint8Array<ArrayBuffer> | null = null;
    if (audioElement) {
      audioContext = new AudioContext();
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 64;
      audioContext.createMediaElementSource(audioElement).connect(analyser);
      analyser.connect(audioContext.destination);
      data = new Uint8Array(analyser.frequencyBinCount);
    }
    const draw = (time: number) => {
      const ratio = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== width * ratio) { canvas.width = width * ratio; canvas.height = height * ratio; context.scale(ratio, ratio); }
      context.clearRect(0, 0, width, height);
      context.fillStyle = getComputedStyle(canvas).color;
      if (analyser && data) analyser.getByteFrequencyData(data);
      const bars = 24;
      const gap = 4;
      const barWidth = Math.max(2, (width - gap * (bars - 1)) / bars);
      for (let index = 0; index < bars; index += 1) {
        const value = data ? data[index % data.length] / 255 : (Math.sin(time / 180 + index * 0.7) + 1) / 2;
        const barHeight = 4 + value * (height - 8);
        context.fillRect(index * (barWidth + gap), (height - barHeight) / 2, barWidth, barHeight);
      }
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(frame); void audioContext?.close(); };
  }, [active, audioElement, reducedMotion]);

  return <canvas ref={canvasRef} className="audio-visualizer" aria-hidden="true" onPointerEnter={() => setActive(true)} onPointerLeave={() => setActive(false)} />;
}
