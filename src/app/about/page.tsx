import type { Metadata } from 'next';
import AboutPage from './AboutPage';

export const metadata: Metadata = {
    title: 'About',
    description:
        'Get to know Tristen — the artist, the story, and the passion behind the lens.',
};

export default function Page() {
    return <AboutPage />;
}
