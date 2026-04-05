import type { Metadata } from 'next';
import CommercialPage from './CommercialPage';

export const metadata: Metadata = {
    title: 'Commercial Portfolio',
    description:
        'Explore commercial photography by Tristen — brand imagery, products, and editorial work.',
};

export default function Page() {
    return <CommercialPage />;
}
