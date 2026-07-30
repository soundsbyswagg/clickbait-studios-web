import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get('title')?.slice(0, 90) || 'Clickbait ENT';
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 72, background: '#090909', color: '#f5f5f5', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', fontSize: 28, letterSpacing: 4, textTransform: 'uppercase' }}>Clickbait ENT • Atlanta</div>
      <div style={{ display: 'flex', maxWidth: 1050, fontSize: 82, lineHeight: 1, letterSpacing: -4, fontWeight: 700 }}>{title}</div>
      <div style={{ display: 'flex', fontSize: 26, color: '#b6b6b6' }}>Professional studio space • Engineering support • Creative services</div>
    </div>,
    { width: 1200, height: 630 },
  );
}
