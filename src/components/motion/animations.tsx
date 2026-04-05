'use client';

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

// ─── Fade In on Scroll ───
interface FadeInProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export const FadeIn = ({ children, delay = 0, className = '' }: FadeInProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// ─── Parallax Image ───
interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    imgClassName?: string;
    speed?: number;
    scale?: number;
}

export const ParallaxImage = ({
    src,
    alt,
    className = '',
    imgClassName = '',
    speed = 1,
    scale = 1.25,
}: ParallaxImageProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);

    return (
        <div
            ref={ref}
            className={`overflow-hidden relative flex items-center justify-center ${className}`}
        >
            <motion.img
                style={{ y, scale }}
                src={src}
                alt={alt}
                className={`w-full h-full object-cover origin-center ${imgClassName}`}
            />
        </div>
    );
};

// ─── Float Item (scroll-linked offset) ───
interface FloatItemProps {
    children: ReactNode;
    speed?: number;
    className?: string;
}

export const FloatItem = ({ children, speed = 1, className = '' }: FloatItemProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], [40 * speed, -40 * speed]);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
};
