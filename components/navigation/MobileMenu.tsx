'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { navigation } from '@/content/site';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLButtonElement | null>(null);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    if (!panel) return;

    const focusable = panel.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMenu();
        return;
      }

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };

    const onPopState = () => {
      closeMenu();
    };

    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('popstate', onPopState);

    previousFocusRef.current = document.activeElement as HTMLButtonElement | null;
    first?.focus();

    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('popstate', onPopState);
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="md:hidden inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        aria-label="Open navigation"
      >
        Menu
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="container flex items-center justify-between py-4">
            <span className="font-semibold tracking-tight text-lg">{siteConfig.name}</span>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium"
              onClick={closeMenu}
              aria-label="Close navigation"
            >
              Close
            </button>
          </div>

          <div
            ref={panelRef}
            id="mobile-menu-panel"
            className="container flex flex-col gap-6 py-12"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-3xl tracking-tight"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}