'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            className="w-full bg-[#FAF8F5] py-24 md:py-32 px-6 md:px-12 lg:px-24 flex flex-col items-center gap-16 border-t border-[#3c3129]/10 relative text-[#2C241E]"
            role="contentinfo"
        >
            {/* Top: Logo & Links */}
            <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0">
                <div className="w-48 lg:w-64 flex justify-center lg:justify-start">
                    <Image
                        src="/imports/logo.png"
                        alt="By Tristen"
                        width={256}
                        height={80}
                        className="w-full object-contain mix-blend-darken"
                        priority={false}
                    />
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[9px] md:text-[10px] uppercase tracking-[0.3em]">
                    <Link href="/" className="hover:opacity-50 transition-opacity">Home</Link>
                    <Link href="/about" className="hover:opacity-50 transition-opacity">Get to Know Me!</Link>
                    <Link href="/wedding" className="hover:opacity-50 transition-opacity">Wedding</Link>
                    <Link href="/commercial" className="hover:opacity-50 transition-opacity">Commercial Portfolio</Link>
                    <Link href="/contact" className="hover:opacity-50 transition-opacity">Contact</Link>
                </div>

                <div className="flex justify-center lg:justify-end text-[9px] md:text-[10px] uppercase tracking-[0.3em] w-48 lg:w-64">
                    <a
                        href="https://instagram.com/bytristen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-50 transition-opacity"
                        aria-label="Visit By Tristen on Instagram"
                    >
                        Instagram
                    </a>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="w-full flex justify-between items-center text-[10px] font-sans tracking-wide text-[#2C241E]/40 absolute bottom-6 px-6 md:px-12 lg:px-24 left-0">
                <span>&copy; By Tristen {new Date().getFullYear()} All rights Reserved</span>
                <button
                    onClick={scrollToTop}
                    className="hover:text-[#2C241E] transition-colors"
                    aria-label="Scroll to top"
                >
                    Back To Top &uarr;
                </button>
            </div>
        </footer>
    );
}
