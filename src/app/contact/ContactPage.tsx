'use client';

import { useState, FormEvent } from 'react';
import { FadeIn, FloatItem } from '@/components/motion/animations';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        eventType: '',
        date: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO: Integrate with an email service or API route
        setSubmitted(true);
    };

    return (
        <>
            <section className="w-full py-24 md:py-40 px-6 md:px-12 lg:px-24 xl:px-32 bg-[#FAF8F5]">
                <div className="max-w-2xl mx-auto">
                    <FadeIn>
                        <FloatItem speed={0.5}>
                            <h1 className="text-5xl lg:text-7xl font-serif text-[#2C241E] tracking-widest uppercase mb-6 text-center">
                                Contact
                            </h1>
                            <p className="text-[10px] md:text-[11px] leading-[2.2] tracking-wide text-[#3c3129]/90 text-center mb-16">
                                Let&apos;s create something beautiful together. Fill out the form below
                                and I&apos;ll be in touch within 24 hours.
                            </p>
                        </FloatItem>
                    </FadeIn>

                    {submitted ? (
                        <FadeIn>
                            <div className="text-center py-20">
                                <h2 className="text-3xl font-serif text-[#2C241E] mb-4 tracking-wider">
                                    Thank You
                                </h2>
                                <p className="text-[11px] leading-[2] tracking-wide text-[#3c3129]/90">
                                    Your message has been received. I&apos;ll be in touch soon.
                                </p>
                            </div>
                        </FadeIn>
                    ) : (
                        <FadeIn delay={0.15}>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="contact-name"
                                            className="text-[9px] uppercase tracking-[0.3em] text-[#2C241E]/60"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="border-b border-[#2C241E]/20 bg-transparent py-3 text-[11px] tracking-wider text-[#2C241E] focus:border-[#2C241E] transition-colors outline-none"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="contact-email"
                                            className="text-[9px] uppercase tracking-[0.3em] text-[#2C241E]/60"
                                        >
                                            Email
                                        </label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="border-b border-[#2C241E]/20 bg-transparent py-3 text-[11px] tracking-wider text-[#2C241E] focus:border-[#2C241E] transition-colors outline-none"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="contact-event-type"
                                            className="text-[9px] uppercase tracking-[0.3em] text-[#2C241E]/60"
                                        >
                                            Event Type
                                        </label>
                                        <select
                                            id="contact-event-type"
                                            value={formData.eventType}
                                            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                                            className="border-b border-[#2C241E]/20 bg-transparent py-3 text-[11px] tracking-wider text-[#2C241E] focus:border-[#2C241E] transition-colors outline-none appearance-none"
                                        >
                                            <option value="">Select type</option>
                                            <option value="wedding">Wedding</option>
                                            <option value="engagement">Engagement</option>
                                            <option value="commercial">Commercial</option>
                                            <option value="portrait">Portrait</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="contact-date"
                                            className="text-[9px] uppercase tracking-[0.3em] text-[#2C241E]/60"
                                        >
                                            Preferred Date
                                        </label>
                                        <input
                                            id="contact-date"
                                            type="date"
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            className="border-b border-[#2C241E]/20 bg-transparent py-3 text-[11px] tracking-wider text-[#2C241E] focus:border-[#2C241E] transition-colors outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="contact-message"
                                        className="text-[9px] uppercase tracking-[0.3em] text-[#2C241E]/60"
                                    >
                                        Your Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="border-b border-[#2C241E]/20 bg-transparent py-3 text-[11px] tracking-wider text-[#2C241E] focus:border-[#2C241E] transition-colors outline-none resize-none"
                                        placeholder="Tell me about your vision..."
                                    />
                                </div>

                                <div className="flex justify-center mt-8">
                                    <button
                                        type="submit"
                                        className="w-40 h-40 rounded-full border border-[#2C241E] flex flex-col items-center justify-center text-[10px] uppercase tracking-[0.2em] hover:bg-[#2C241E] hover:text-[#FAF8F5] transition-colors bg-transparent shadow-xl"
                                        aria-label="Send message"
                                    >
                                        <span>Send</span>
                                        <span>Message</span>
                                    </button>
                                </div>
                            </form>
                        </FadeIn>
                    )}
                </div>
            </section>
        </>
    );
}
