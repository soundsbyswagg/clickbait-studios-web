import { z } from 'zod';

export const PortfolioItemSchema = z.object({
  id: z.string().min(1),
  type: z.enum(['image', 'video']),
  src: z.string().min(1),
  caption: z.string().min(1),
  permission: z.boolean(),
  clientName: z.string().optional(),
  serviceProvided: z.string().optional(),
});

export const BrandSchema = z.object({
  name: z.literal('Clickbait ENT'),
  legalName: z.string().optional(), // VERIFY
  description: z.string().min(10),
});

export const ContactSchema = z.object({
  phone: z.literal('470-621-1417'),
  instagram: z.literal('https://www.instagram.com/clickbait.ent/'),
  address: z.literal('1587 Phoenix Boulevard, Suite 5, Atlanta, Georgia 30349'),
  email: z.string().email().refine(e => e.includes('@clickbaitent.com'), {
    message: 'Must use domain-based email (launch blocker)',
  }),
});

export const ServiceSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(10),
  startingPrice: z.string().min(1),
  duration: z.string().min(1),
  cta: z.string().min(1),
  wixUrl: z.string().url().optional(),
});

export const RoomSchema = z.object({
  name: z.enum(['A Room', 'B Room']),
  capacity: z.string().min(1),
  note: z.string().min(1),
  equipment: z.literal('Same equipment').optional(),
});

export const MoreThanRapSchema = z.object({
  name: z.literal('More Than Rap'),
  schedule: z.string().min(1),
  instructors: z.array(z.string()).min(1),
  deliverables: z.array(z.string()).min(1),
  award: z.string().optional(),
});

export const SiteSchema = z.object({
  brand: BrandSchema,
  contact: ContactSchema,
  services: z.array(ServiceSchema).min(1),
  rooms: z.array(RoomSchema).length(2),
  moreThanRap: MoreThanRapSchema,
  bookingBaseUrl: z.string().url(),
  portfolioItems: z.array(z.object({
    id: z.string().min(1),
    type: z.enum(['image', 'video']),
    src: z.string().min(1),
    caption: z.string().min(1),
    permission: z.boolean(),
    clientName: z.string().optional(),
    serviceProvided: z.string().optional(),
  })).optional(),
});

export type Site = z.infer<typeof SiteSchema>;
