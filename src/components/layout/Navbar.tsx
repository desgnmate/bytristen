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
                    className={`relative group pb-1 transition-opacity ${pathname === link.href ? 'opacity-100' : 'opacity-80 hover:opacity-100'
                        }`}
                >
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#2C241E] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
            ))}
        </nav>
    );
}
