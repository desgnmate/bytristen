'use client';

import { FadeIn, ParallaxImage, FloatItem } from '@/components/motion/animations';

const commercialImages = [
    { src: '/images/DSC03134-8f11dc22.jpg', alt: 'Commercial project one' },
    { src: '/images/DSC02018-532a9d0d.jpg', alt: 'Commercial project two' },
    { src: '/images/DSC09101-549f32bc.jpg', alt: 'Commercial project three' },
    { src: '/images/DSC02323-ceb453f3.jpg', alt: 'Commercial project four' },
    { src: '/images/VA-270-c0d484a5.jpg', alt: 'Commercial project five' },
    { src: '/images/DSC01039-c9bd0e1e.jpg', alt: 'Commercial project six' },
    { src: '/images/CARAMASAYA-227-4fd95153-1500.jpg', alt: 'Commercial project seven' },
    { src: '/images/CARAMASAYA-229-d1f019f9-1500.jpg', alt: 'Commercial project eight' },
    { src: '/images/DSC03672-18ed618c.jpg', alt: 'Commercial project nine' },
];

export default function CommercialPage() {
    return (
        <>
            {/* Hero */}
            <section className="w-full py-24 md:py-40 px-6 md:px-12 lg:px-24 xl:px-32 bg-[#FAF8F5]">
                <FadeIn>
                    <FloatItem speed={0.6}>
                        <h1 className="text-5xl lg:text-7xl font-serif text-[#2C241E] tracking-widest uppercase mb-6 text-center">
                            Commercial
                        </h1>
                        <p className="text-[10px] md:text-[11px] leading-[2.2] tracking-wide text-[#3c3129]/90 max-w-xl mx-auto text-center">
                            From brands to editorials, every frame is crafted to tell your story with
                            precision, style, and artistry that elevates your vision.
                        </p>
                    </FloatItem>
                </FadeIn>
            </section>

            {/* Gallery */}
            <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-24 xl:px-32 bg-[#EAE8E4]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {commercialImages.map((img, index) => (
                        <FadeIn key={index} delay={index * 0.06}>
                            <ParallaxImage
                                src={img.src}
                                alt={img.alt}
                                className="w-full aspect-[4/5] shadow-xl"
                                speed={0.5 + index * 0.1}
                                scale={1.12}
                            />
                        </FadeIn>
                    ))}
                </div>
            </section>
        </>
    );
}
