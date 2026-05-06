import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Worachat Paranya — overview on the home page: full-stack, backend, AI, and internship goals.',
  robots: { index: false, follow: true },
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
