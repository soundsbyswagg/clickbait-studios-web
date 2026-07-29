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

export const SiteSchema = z.object({
  brand: z.object({
    name: z.literal('Clickbait ENT'),
    description: z.string().min(10),
  }),
  contact: z.object({
    phone: z.literal('470-621-1417'),
    instagram: z.literal('https://www.instagram.com/clickbait.ent/'),
    address: z.literal('1587 Phoenix Boulevard, Suite 5, Atlanta, GA 30349'),
  }),
  services: z.array(z.object({
    slug: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(10),
    startingPrice: z.string().min(1),
    duration: z.string().min(1),
    cta: z.string().min(1),
    wixUrl: z.string().url().optional(),
  })).min(1),
  rooms: z.array(z.object({
    name: z.enum(['A Room', 'B Room']),
    capacity: z.string().min(1),
    note: z.string().min(1),
    equipment: z.literal('Same core equipment'),
  })).length(2),
  moreThanRap: z.object({
    name: z.literal('More Than Rap'),
    ages: z.string().min(1),
    schedule: z.string().min(1),
    options: z.array(z.string()).min(1),
    instructors: z.array(z.string()).min(1),
    curriculum: z.array(z.string()).min(1),
    deliverables: z.array(z.string()).min(1),
    award: z.string().min(1),
  }),
  bookingBaseUrl: z.string().url(),
  portfolioItems: z.array(PortfolioItemSchema),
});

export type Site = z.infer<typeof SiteSchema>;
