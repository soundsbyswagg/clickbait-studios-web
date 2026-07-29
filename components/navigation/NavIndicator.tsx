'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/content/site';

export function NavIndicator() {
  const pathname = usePathname();
  const x = useMotionValue(0);
  const width = useMotionValue(0);
  const opacity = useTransform(width, (v) => (v > 0 ? 1 : 0));

  return (
    <>
      <motion.div className="mx-auto h-0.5 bg-accent rounded-full" style={{ x, width, opacity }} />
      <nav className="flex flex-wrap gap-6 text-sm" aria-label="Indicator navigation">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link ${pathname === item.href ? 'text-foreground' : ''}`}
            onMouseEnter={(e) => {
              const target = e.currentTarget;
              x.set(target.offsetLeft);
              width.set(target.offsetWidth);
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}