import { redirect } from 'next/navigation';

/** Legacy URL: send visitors to the on-page #about section. */
export default function AboutRedirectPage() {
  redirect('/#about');
}
