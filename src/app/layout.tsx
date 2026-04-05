import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/motion/SmoothScroll';
import '@/styles/index.css';

export const metadata: Metadata = {
    title: {
        default: 'By Tristen — Fine Art Wedding Photographer',
        template: '%s | By Tristen',
    },
    description:
        'Fine art wedding and commercial photographer specializing in elegant, refined, and timeless imagery.',
    keywords: ['wedding photographer', 'fine art photography', 'By Tristen', 'portrait', 'commercial photography'],
    openGraph: {
        title: 'By Tristen — Fine Art Wedding Photographer',
        description:
            'Fine art wedding and commercial photographer specializing in elegant, refined, and timeless imagery.',
        type: 'website',
        locale: 'en_US',
        siteName: 'By Tristen',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-[#FAF8F5] text-[#2C241E] font-sans selection:bg-[#2C241E] selection:text-[#FAF8F5]">
                <SmoothScroll />
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
