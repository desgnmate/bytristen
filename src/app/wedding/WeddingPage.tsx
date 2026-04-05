'use client';

import { FadeIn, ParallaxImage, FloatItem } from '@/components/motion/animations';

const weddingImages = [
    { src: '/images/CARAMASAYA-229-d1f019f9-1500.jpg', alt: 'Wedding ceremony' },
    { src: '/images/CARAMASAYA-227-4fd95153-1500.jpg', alt: 'Couple in garden' },
    { src: '/images/MilanAlisha-1223-3776f431-1000.jpeg', alt: 'Intimate moment' },
    { src: '/images/DSC027302-cca06497-1000.jpg', alt: 'Bridal portrait' },
    { src: '/images/DSC00956-c7b6bc48-1000.jpg', alt: 'Wedding details' },
    { src: '/images/DSC08511-2260283a-1500.jpg', alt: 'Celebration' },
];

export default function WeddingPage() {
    return (
        <>
            {/* Hero */}
            <section className="w-full py-24 md:py-40 px-6 md:px-12 lg:px-24 xl:px-32 bg-[#FAF8F5]">
                <FadeIn>
                    <FloatItem speed={0.6}>
                        <h1 className="text-5xl lg:text-7xl font-serif text-[#2C241E] tracking-widest uppercase mb-6 text-center">
                            Wedding
                        </h1>
                        <p className="text-[10px] md:text-[11px] leading-[2.2] tracking-wide text-[#3c3129]/90 max-w-xl mx-auto text-center">
                            Every love story is unique. Through fine art photography, I capture the raw
                            emotions, quiet glances, and joyful celebrations that make your day
                            unforgettable.
                        </p>
                    </FloatItem>
                </FadeIn>
            </section>

            {/* Gallery Grid */}
            <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-24 xl:px-32 bg-[#EAE8E4]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                    {weddingImages.map((img, index) => (
                        <FadeIn key={index} delay={index * 0.08}>
                            <ParallaxImage
                                src={img.src}
                                alt={img.alt}
                                className={`w-full shadow-xl ${index % 3 === 0 ? 'aspect-[4/5]' : 'aspect-[3/4]'
                                    } ${index % 2 === 1 ? 'mt-12 md:mt-24' : ''}`}
                                speed={0.6 + index * 0.15}
                                scale={1.15}
                            />
                        </FadeIn>
                    ))}
                </div>
            </section>
        </>
    );
}
