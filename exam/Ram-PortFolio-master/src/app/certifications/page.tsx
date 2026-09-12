import type { Metadata } from 'next';
import CertificationsContent from './CertificationsContent';

export const metadata: Metadata = {
  title: 'Certifications & Credentials | Rameshwar Bhagwat',
  description: "Explore the verified technical certifications, hackathon achievements, and professional qualifications of Rameshwar Bhagwat in AI, Machine Learning, and Full Stack Development.",
  openGraph: {
    title: 'Certifications & Credentials | Rameshwar Bhagwat',
    description: "Explore the verified technical certifications, hackathon achievements, and professional qualifications of Rameshwar Bhagwat.",
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rameshwar Bhagwat Certifications',
      }
    ],
  }
};

export default function CertificationsPage() {
  return <CertificationsContent />;
}
