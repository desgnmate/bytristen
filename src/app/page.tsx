"use client";

import {
    FadeIn,
    ParallaxImage,
    FloatItem,
} from "@/components/motion/animations";

// ─── Image paths (now served from /public) ───
const imgHero = "/images/DSC08511-2260283a-1500.jpg";
const img2 = "/images/DSC03283-2-716e63c1.jpg";
const img3 = "/images/DSC09101-549f32bc.jpg";
const img4 = "/images/DSC00956-c7b6bc48-1000.jpg";
const img5 = "/images/DSC03134-8f11dc22.jpg";
const img6 = "/images/DSC08519-42a22dc3-1500.jpg";
const img7 = "/images/CARAMASAYA-227-4fd95153-1500.jpg";
const img8 = "/images/CARAMASAYA-229-d1f019f9-1500.jpg";
const img10 = "/images/DSC00956-c7b6bc48-1000.jpg";

const imgLinkThankYou = "/images/DSC00633-103283eb-1500.jpg";
const imgLinkTR = "/images/DSC00831-e7bffb5c.jpg";
const imgLinkAvery = "/images/DSC01365-e5fdfb7e.jpg";
const imgLinkAVery = "/images/DSC02018-532a9d0d.jpg";
const imgLinkSome = "/images/DSC03134-8f11dc22.jpg";
const imgLinkTheReal = "/images/DSC09916-8270259b.jpg";
const siteLogo = "/imports/logo.png";

const paragraphTextLong =
    "No one is born the same. It is through the countless days and nights of getting to know each other over food, dates, love and all that bickering in-between that this brings this unlikely combination together to create the half of what you've been looking for your whole life. What makes life so valuable is that it doesn't last forever, what makes it so precious is how there's always an end. Weddings are a day solely to remind you how blessed you are to be with the one you'll spend the rest of your life with. My calling is to take this all in and breathe it out through my passion, photographs.";

const storyText1 =
    "Every glance, every gentle touch, and every tear shed is a piece of your legacy. I capture the fleeting, quiet moments so they can be remembered exactly as they felt.";

const storyText2 =
    "Your story is completely unique, shaped by the unspoken bond you share. I seek out the honest magic in the brief pauses, preserving your memories in a beautifully candid light.";

const storyText3 =
    "A photograph is more than an image; it is a profound connection to a moment that will never happen again. I meticulously craft each frame to tell the story of your celebration.";

export default function HomePage() {
    return (
        <>
            {/* 1. HERO */}
            <section className="w-full flex flex-col items-center">
                <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32">
                    <div className="w-full h-[65vh] md:h-[75vh] lg:h-[80vh] relative overflow-hidden flex flex-col items-center justify-center">
                        {/* Background Image with Parallax */}
                        <div className="absolute inset-0 z-0 bg-[#3c3129]">
                            <ParallaxImage
                                src={imgHero}
                                alt="Hero Landscape"
                                className="w-full h-full opacity-90"
                                speed={0.5}
                                scale={1.2}
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>

                        {/* Center Content */}
                        <div className="relative z-10 flex flex-col items-center justify-center text-center text-[#FAF8F5] w-full px-6 md:px-12 mt-12 md:mt-0">
                            <FadeIn className="w-full flex flex-col items-center">
                                <div className="w-64 md:w-[32rem] lg:w-[48rem] mx-auto z-10 relative flex flex-col items-center justify-center">
                                    <h1 className="absolute top-[10%] md:top-[18%] lg:top-[22%] text-[8px] md:text-[14px] tracking-[0.3em] uppercase z-20 font-sans drop-shadow-sm pointer-events-none">
                                        Fine Art Wedding Photographer
                                    </h1>

                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={siteLogo}
                                        alt="by Tristen Logo"
                                        className="w-full h-auto object-contain brightness-0 invert drop-shadow-lg"
                                    />

                                    <p className="absolute bottom-[2%] md:bottom-[20%] text-[9px] md:text-[15px] leading-[2] tracking-full max-w-[280px] md:max-w-xl mx-auto font-serif drop-shadow-sm whitespace-pre-line hidden md:block z-20 pointer-events-none">
                                        Documenting the fleeting, honest moments of your
                                        celebration.{"\n"}
                                        Based in Perth, Western Australia, capturing love stories
                                        {"\n"}
                                        with a candid, editorial approach.
                                    </p>

                                    <p className="absolute bottom-[-10%] md:bottom-[5%] text-[9px] md:text-[11px] leading-[2] tracking-wider max-w-[280px] mx-auto drop-shadow-sm md:hidden z-20 pointer-events-none">
                                        Documenting the fleeting, honest moments of your
                                        celebration. Based in Perth, Western Australia, capturing
                                        love stories with a candid, editorial approach.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Bottom Tabs */}
                        <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 lg:px-24 pb-6 md:pb-10 z-10 flex justify-between items-end text-[9px] md:text-sm lg:text-[15px] tracking-[0.1em] md:tracking-[0.2em] font-serif uppercase text-[#FAF8F5] drop-shadow-md">
                            <div className="text-left w-1/3">
                                <a
                                    href="#engagements"
                                    className="hover:opacity-70 transition-opacity"
                                >
                                    Engagements
                                </a>
                            </div>
                            <div className="text-center w-1/3">
                                <a
                                    href="#events"
                                    className="hover:opacity-70 transition-opacity"
                                >
                                    Events
                                </a>
                            </div>
                            <div className="text-right w-1/3">
                                <a
                                    href="#commercial-work"
                                    className="hover:opacity-70 transition-opacity"
                                >
                                    Commercial
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. TWO IMAGES + PARAGRAPH */}
            <section className="w-full py-16 md:py-32 px-6 md:px-12 lg:px-24 xl:px-32 bg-[#FAF8F5]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-60">
                    <div className="col-span-1">
                        <FadeIn>
                            <ParallaxImage
                                src={imgLinkAvery}
                                alt="Couple portrait"
                                className="w-full aspect-[3/3] shadow-xl"
                                speed={0.8}
                            />
                        </FadeIn>
                    </div>
                    <div className="col-span-1 flex flex-col justify-between items-end pt-12">
                        <FadeIn
                            delay={0.1}
                            className="w-full lg:w-4/5 max-w-4xl self-start mb-12 lg:mb-0"
                        >
                            <FloatItem
                                speed={1.2}
                                className="text-[10px] md:text-[15px] font-serif leading-[2] tracking-full text-[#3c3129]/90"
                            >
                                {paragraphTextLong}
                            </FloatItem>
                        </FadeIn>
                        <FadeIn delay={0.2} className="w-4/5 mt-20 lg:w-3/4 self-center">
                            <ParallaxImage
                                src={imgLinkThankYou}
                                alt="Bride walking"
                                className="w-full aspect-[3/4] shadow-xl"
                                speed={1.5}
                                scale={1.3}
                            />
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 3. ELEGANT / REFINED (GREY BG) */}
            <section className="w-full py-24 md:py-40 px-6 md:px-12 lg:px-24 xl:px-32 bg-[#EAE8E4]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {/* Left Column */}
                    <div className="col-span-1 flex flex-col justify-between">
                        <FadeIn>
                            <FloatItem speed={1.1}>
                                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-[#2C241E] mb-16 tracking-widest uppercase">
                                    Timeless
                                </h2>
                            </FloatItem>
                            <div className="w-4/5 xl:w-2/3 ml-8 relative z-10">
                                <ParallaxImage
                                    src={img2}
                                    alt="Orchid details"
                                    className="w-full aspect-[3/4] mb-12 shadow-xl"
                                    speed={0.9}
                                />
                                <FloatItem speed={1}>
                                    <p className="text-[10px] md:text-[15px] font-serif leading-[2] tracking-full text-[#3c3129]/90">
                                        {storyText1}
                                    </p>
                                </FloatItem>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Center Column */}
                    <div className="col-span-1 pt-12 lg:pt-24 z-0">
                        <FadeIn delay={0.1}>
                            <ParallaxImage
                                src={img5}
                                alt="Bride details"
                                className="w-full aspect-[2/3] md:aspect-auto md:h-[100vh] shadow-xl"
                                speed={1.8}
                                scale={1.4}
                            />
                        </FadeIn>
                    </div>

                    {/* Right Column */}
                    <div className="col-span-1 flex flex-col justify-between pb-8 pt-24 lg:pt-0">
                        <FadeIn
                            delay={0.2}
                            className="flex justify-end pr-8 lg:pr-16 mb-12 relative z-20"
                        >
                            <ParallaxImage
                                src={img6}
                                alt="Couple running"
                                className="w-4/5 xl:w-2/3 aspect-[3/4] shadow-xl"
                                imgClassName="object-right"
                                speed={1.5}
                                scale={1.2}
                            />
                        </FadeIn>
                        <FadeIn
                            delay={0.3}
                            className="ml-8 lg:ml-16 border-l border-transparent relative z-10"
                        >
                            <FloatItem speed={-0.5}>
                                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-[#2C241E] mb-16 tracking-widest uppercase">
                                    Authentic
                                </h2>
                            </FloatItem>
                            <FloatItem speed={1.5} className="ml-4">
                                <button
                                    className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-[#2C241E] flex flex-col items-center justify-center text-[10px] uppercase tracking-[0.2em] hover:bg-[#2C241E] hover:text-[#FAF8F5] transition-colors bg-transparent shadow-xl"
                                    aria-label="View Stories"
                                >
                                    <span>View</span>
                                    <span>Stories</span>
                                </button>
                            </FloatItem>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 4. FOREST & LIGHT TONES */}
            <section className="w-full py-24 md:py-40 px-6 md:px-12 lg:px-24 xl:px-32 bg-[#FAF8F5] overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">
                    <div className="col-span-1">
                        <FadeIn>
                            <ParallaxImage
                                src={img7}
                                alt="Couple in forest"
                                className="w-full aspect-[4/5] object-top shadow-xl"
                                speed={1.2}
                                scale={1.2}
                            />
                        </FadeIn>
                    </div>
                    <div className="col-span-1 flex flex-col justify-center items-end pt-12 lg:pt-32 pb-12 lg:pr-24 relative z-10">
                        <FadeIn
                            delay={0.1}
                            className="w-full lg:w-4/5 mb-16 ml-auto relative"
                        >
                            <ParallaxImage
                                src={img3}
                                alt="Couple kissing in light"
                                className="w-full aspect-[4/3] lg:aspect-square md:-ml-24 shadow-xl shadow-[#3c3129]/5"
                                speed={-0.8}
                                scale={1.3}
                            />
                        </FadeIn>
                        <FadeIn delay={0.2} className="w-full lg:w-4/5">
                            <FloatItem
                                speed={1.5}
                                className="max-w-md text-right md:text-left text-[10px] md:text-[15px] font-serif leading-[2] tracking-full text-[#3c3129]/90"
                            >
                                {storyText2}
                            </FloatItem>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 5. DARK CAROUSEL / STORIES */}
            <section className="relative w-full bg-[#1A1817]/95 py-32 md:py-64 overflow-hidden flex flex-col justify-center border-t border-[#1A1817]">
                {/* Background Triptych */}
                <div className="absolute inset-0 z-0 grid grid-cols-1 gap-0 md:grid-cols-3 w-full h-full opacity-10 mix-blend-screen scale-110 pointer-events-none">
                    {[imgLinkTR, img8, imgLinkAVery].map((src, i) => (
                        <div key={i} className="relative overflow-hidden h-full">
                            <FloatItem speed={1} className="w-full h-full">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={src}
                                    alt={`Triptych panel ${i + 1}`}
                                    className="w-full h-full object-cover grayscale blur-[2px]"
                                />
                            </FloatItem>
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center w-full px-6 md:px-12 xl:px-24">
                    <div className="col-span-1 lg:col-span-3 lg:col-start-2 order-2 lg:order-1 pt-8 lg:pt-0">
                        <FadeIn delay={0.2}>
                            <FloatItem speed={1.2}>
                                <p className="text-[10px] md:text-[15px] font-serif leading-[2] tracking-wider text-[#FAF8F5]/80">
                                    {storyText3}
                                </p>
                            </FloatItem>
                        </FadeIn>
                    </div>

                    <div className="col-span-1 lg:col-span-4 flex justify-center order-1 lg:order-2 z-20 shadow-2xl">
                        <FadeIn className="w-full">
                            <ParallaxImage
                                src={img10}
                                alt="Photography story"
                                className="w-full aspect-[4/5] shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                                speed={0.5}
                                scale={1.2}
                            />
                        </FadeIn>
                    </div>

                    <div className="col-span-1 lg:col-span-3 flex justify-center lg:justify-end order-3">
                        <FadeIn delay={0.4}>
                            <FloatItem speed={-0.6}>
                                <button
                                    className="w-32 h-32 md:w-36 md:h-36 rounded-full border border-[#FAF8F5]/40 flex flex-col items-center justify-center text-[10px] uppercase tracking-[0.2em] hover:bg-[#FAF8F5] hover:text-[#1A1817] transition-colors text-[#FAF8F5] backdrop-blur-sm shadow-xl"
                                    aria-label="View Stories"
                                >
                                    <span>View</span>
                                    <span>Stories</span>
                                </button>
                            </FloatItem>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 6. INSTAGRAM FEED */}
            <section className="w-full bg-[#FAF8F5] pt-16 pb-0">
                <div className="px-6 md:px-12 mb-8 flex justify-between items-end">
                    <p className="text-[10px] md:text-xs font-sans tracking-widest text-[#2C241E] uppercase">
                        IG: @bytristen
                    </p>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 w-full">
                    {[
                        imgLinkThankYou,
                        imgLinkTR,
                        imgLinkAvery,
                        imgLinkAVery,
                        imgLinkSome,
                        imgLinkTheReal,
                    ].map((imgSrc, index) => (
                        <div
                            key={index}
                            className="w-full aspect-square overflow-hidden group border-r border-t border-[#FAF8F5]"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={imgSrc}
                                alt={`Instagram feed panel ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
