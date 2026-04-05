import type { Metadata } from 'next';
import WeddingPage from './WeddingPage';

export const metadata: Metadata = {
    title: 'Wedding',
    description:
        'Browse fine art wedding photography by Tristen — elegant, timeless, and deeply personal.',
};

export default function Page() {
    return <WeddingPage />;
}
