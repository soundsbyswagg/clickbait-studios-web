import { track } from '@vercel/analytics';

export const analyticsEvents = {
  bookingClick: 'booking_click',
  mobileBookingBarClick: 'mobile_booking_bar_click',
  phoneClick: 'phone_click',
  instagramClick: 'instagram_click',
  languageChange: 'language_change',
  mobileMenuOpen: 'mobile_menu_open',
  quickActionSelect: 'quick_action_select',
  portfolioOpen: 'portfolio_open',
  moreThanRapInquiryClick: 'more_than_rap_inquiry_click',
} as const;

export type AnalyticsEventName = (typeof analyticsEvents)[keyof typeof analyticsEvents];
export type AnalyticsProperties = Record<string, string | number | boolean | null>;

export function trackEvent(name: AnalyticsEventName, properties?: AnalyticsProperties) {
  track(name, properties);
}
