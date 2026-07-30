'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { BOOKING_URL, externalLinkProps } from '@/lib/routes';
import { Icon } from '@/components/ui/Icon';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export function BookingBar() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const { t } = useLanguage();
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setVisible(current < lastY.current || current < 12);
      lastY.current = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className={`mobile-booking-bar md:hidden ${visible ? '' : 'mobile-booking-bar--hidden'}`}>
    <Link href={BOOKING_URL} {...externalLinkProps}><Icon name="calendar" size={20} />{t('cta.book')}</Link>
  </div>;
}
