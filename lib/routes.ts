export const BOOKING_URL = 'https://www.clickbaitent.com/book-online';

export const inquiryRoutes = {
  consultation: '/contact?topic=Consultation',
  mixing: '/contact?topic=Mixing%20and%20Mastering',
  branding: '/contact?topic=Branding%20and%20Marketing',
  video: '/contact?topic=Video',
  custom: '/contact?topic=Custom%20Project',
  moreThanRap: '/contact?topic=More%20Than%20Rap',
} as const;

export const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;
