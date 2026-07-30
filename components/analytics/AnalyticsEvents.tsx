'use client';

import { useEffect } from 'react';
import { analyticsEvents, trackEvent, type AnalyticsEventName } from '@/lib/analytics';
import { BOOKING_URL } from '@/lib/routes';
import { siteConfig } from '@/content/site';

const explicitEvents = new Set<AnalyticsEventName>(Object.values(analyticsEvents));

export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>('a, button') : null;
      if (!target) return;

      const explicit = target.dataset.analyticsEvent as AnalyticsEventName | undefined;
      if (explicit && explicitEvents.has(explicit)) {
        trackEvent(explicit, eventProperties(target));
        return;
      }

      if (!(target instanceof HTMLAnchorElement)) return;
      const href = target.href;
      if (href === BOOKING_URL || href.startsWith(`${BOOKING_URL}?`)) {
        trackEvent(analyticsEvents.bookingClick, eventProperties(target));
      } else if (href.startsWith('tel:')) {
        trackEvent(analyticsEvents.phoneClick, eventProperties(target));
      } else if (href.startsWith(siteConfig.links.instagram)) {
        trackEvent(analyticsEvents.instagramClick, eventProperties(target));
      }
    };

    document.addEventListener('click', onClick, true);
    document.documentElement.dataset.analyticsReady = 'true';
    return () => {
      document.removeEventListener('click', onClick, true);
      delete document.documentElement.dataset.analyticsReady;
    };
  }, []);

  return null;
}

function eventProperties(target: HTMLElement) {
  const properties: Record<string, string> = {
    path: window.location.pathname,
    language: document.documentElement.lang,
  };
  if (target.dataset.analyticsValue) properties.value = target.dataset.analyticsValue;
  if (target.dataset.analyticsLocation) properties.location = target.dataset.analyticsLocation;
  return properties;
}
