'use client';

import { FadeIn, ParallaxImage, FloatItem } from '@/components/motion/animations';

const about = '/images/about.jpg';
const imgStory1 = '/images/DSC01365-e5fdfb7e.jpg';
const imgStory2 = '/images/DSC03283-2-716e63c1.jpg';

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="w-full py-24 md:py-40 px-6 md:px-12 lg:px-24 xl:px-32 bg-[#FAF8F5]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                    <div className="col-span-1">
                        <FadeIn>
                            <ParallaxImage
                                src={about}
                                alt="Tristen portrait"
                                className="w-full aspect-[4/5] shadow-2xl"
                                speed={0.6}
                                scale={1.15}
                            />
                        </FadeIn>
                    </div>
                    <div className="col-span-1 flex flex-col gap-8">
                        <FadeIn delay={0.1}>
                            <FloatItem speed={0.8}>
                                <h1 className="text-5xl lg:text-5xl font-serif text-[#2C241E] tracking-widest mb-6">
                                    Hi, I'm Tristen .
                                </h1>
                                <p className="text-[10px] md:text-[11px] leading-[2.2] tracking-wide text-[#3c3129]/90 max-w-lg">
                                    From the small city (countryside) of Perth in Western Australia, I enjoy the simple things in life because they bring the greatest joys and the greatest moments.
                                </p>
                            </FloatItem>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <FloatItem speed={1.2}>
                                <p className="text-[10px] md:text-[11px] leading-[2.2] tracking-wide text-[#3c3129]/90 max-w-lg">
                                    I picked up photography starting in University events where I learnt many skills from great friends and discovered that photography was so much more than just taking photos. The communication, bond, and relationships formed made my time memorable.
                                </p>
                            </FloatItem>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <FloatItem speed={1.2}>
                                <p className="text-[10px] md:text-[11px] leading-[2.2] tracking-wide text-[#3c3129]/90 max-w-lg">
                                    Just a young bloke and his camera looking for small inconspicuous moments to capture that give life something to appreciate. An interesting fact about me is that I aspire to dress like a 90’s dad - love those dad sneakers and oversized tucked t-shirts.
                                </p>
                            </FloatItem>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <FloatItem speed={1.2}>
                                <p className="text-[10px] md:text-[11px] leading-[2.2] tracking-wide text-[#3c3129]/90 max-w-lg">
                                    I think we've been too caught up in taking photos to remind ourselves of an exact moment in time. We've forgotten to share moments quietly and intimately with the people around us. So as a storyteller, I want to be the one to capture them for you, so that you can enjoy those small intimate moments.
                                </p>
                            </FloatItem>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <FloatItem speed={1.2}>
                                <p className="text-[10px] md:text-[11px] leading-[2.2] tracking-wide text-[#3c3129]/90 max-w-lg">
                                    After years of searching for my purpose, I finally found solace in one thing - love. It's like discovering a home away from home. It’s not what you do that creates a great moment, it’s who you’re with.
                                    What does it mean for you, for me, or for that special person who completes you? My aim is to capture those unspoken emotions, the stories hidden in their eyes.
                                </p>
                            </FloatItem>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <FloatItem speed={1.2}>
                                <p className="text-[10px] md:text-[11px] leading-[2.2] tracking-wide text-[#3c3129]/90 max-w-lg">
                                    As I delved deeper into my journey. I searched for a purpose in this world. I started to form a unique relationship with each photo. I meticulously edit every image, for within each, lies a thousand stories waiting to be unfolded.
                                </p>
                            </FloatItem>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <FloatItem speed={1.2}>
                                <p className="text-[10px] md:text-[11px] leading-[2.2] tracking-wide text-[#3c3129]/90 max-w-lg">
                                    You might be wondering why you're here reading this, and it's simple - I'm here to narrate your story just as it is, beautifully candid. If you're ready to share your journey, let's sit down over some Maccas ice cream.
                                </p>
                            </FloatItem>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </>
    );
}
