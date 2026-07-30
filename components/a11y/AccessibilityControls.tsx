'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/components/i18n/LanguageProvider';

const sizes = [14, 16, 18] as const;
export function AccessibilityControls() {
  const { t } = useLanguage();
  const [contrast, setContrast] = useState(false);
  const [sizeIndex, setSizeIndex] = useState(1);
  useEffect(() => { document.documentElement.dataset.contrast = contrast ? 'high' : 'standard'; }, [contrast]);
  useEffect(() => { document.documentElement.style.setProperty('--base-font-size', `${sizes[sizeIndex]}px`); }, [sizeIndex]);
  return <div className="a11y-controls">
    <button type="button" aria-pressed={contrast} onClick={() => setContrast((value) => !value)}>{t('a11y.contrast')}</button>
    <div role="group" aria-label={t('a11y.font')}>
      <button type="button" aria-label="Decrease text size" onClick={() => setSizeIndex((value) => Math.max(0, value - 1))}>A−</button>
      <button type="button" aria-label="Default text size" onClick={() => setSizeIndex(1)}>A</button>
      <button type="button" aria-label="Increase text size" onClick={() => setSizeIndex((value) => Math.min(2, value + 1))}>A+</button>
    </div>
  </div>;
}
