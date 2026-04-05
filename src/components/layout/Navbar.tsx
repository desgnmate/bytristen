'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/about', label: 'Get to Know Me!' },
    { href: '/wedding', label: 'Wedding' },
    { href: '/', label: 'Home' },
    { href: '/commercial', label: 'Commercial Portfolio' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav
            className="w-full py-8 flex flex-wrap justify-center gap-6 md:gap-16 text-[10px] md:text-sm font-sans text-[#2C241E] tracking-[0.2em] uppercase bg-[#FAF8F5] z-20"
            role="navigation"
            aria-label="Main navigation"
        >
            {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`hover:opacity-60 transition-opacity ${pathname === link.href ? 'opacity-100' : ''
                        }`}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}
