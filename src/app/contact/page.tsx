import type { Metadata } from 'next';
import ContactPage from './ContactPage';

export const metadata: Metadata = {
    title: 'Contact',
    description:
        "Let's create something beautiful together. Reach out to book a session or discuss your project.",
};

export default function Page() {
    return <ContactPage />;
}
