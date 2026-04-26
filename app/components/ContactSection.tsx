"use client";

import React from 'react';
import { Mail, Send, Calendar } from 'lucide-react';
import Twitter from './icons/Twitter';
import SectionHeader from './SectionHeader';

interface ContactMethodProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    link: string;
}

function ContactMethod({ icon, title, subtitle, link }: ContactMethodProps) {
    return (
        <a href={link} className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900/40 border border-zinc-800 hover:border-zinc-600 transition-colors group cursor-pointer">
            <div className="text-zinc-500 group-hover:text-zinc-300 transition-colors">
                {icon}
            </div>
            <div>
                <div className="text-sm text-zinc-200 font-semibold mb-0.5 group-hover:text-white transition-colors">{title}</div>
                <div className="text-xs font-medium text-zinc-500">{subtitle}</div>
            </div>
        </a>
    );
}

export default function ContactSection() {
    return (
        <section id="contact" className="mb-20">
            <SectionHeader title="Let's Work Together" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className="p-6 sm:p-8 rounded-xl bg-zinc-900/30 border border-zinc-800 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-medium text-white mb-2">Get in Touch</h3>
                        <p className="text-sm text-zinc-400 mb-8 font-normal">Choose your preferred method to connect and let&apos;s discuss your project.</p>
                        <div className="space-y-3">
                            <ContactMethod icon={<Calendar size={18} />} title="Schedule a call" subtitle="30-minute strategy session" link="https://cal.com" />
                            <ContactMethod icon={<Mail size={18} />} title="hello@apktemplates.com" subtitle="Quick inquiries & questions" link="mailto:hello@apktemplates.com" />
                            <ContactMethod icon={<Twitter size={18} />} title="Connect on X" subtitle="Follow for updates & insights" link="https://twitter.com/apktemplates" />
                        </div>
                    </div>
                </div>

                <div className="p-6 sm:p-8 rounded-xl bg-zinc-900/30 border border-zinc-800">
                    <div className="mb-6">
                        <h3 className="text-xl font-medium text-white mb-2">Send a Message</h3>
                        <p className="text-sm text-zinc-400 font-normal">Prefer to write? Fill out the form and I&apos;ll get back to you within 24 hours.</p>
                    </div>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-zinc-400 ml-1">Full Name</label>
                            <input type="text" placeholder="John Doe" className="w-full bg-zinc-900/80 border border-zinc-700/80 px-4 py-3 text-sm text-zinc-200 outline-none focus:border-zinc-400 transition-colors rounded-lg" />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-zinc-400 ml-1">Email Address</label>
                            <input type="email" placeholder="john@example.com" className="w-full bg-zinc-900/80 border border-zinc-700/80 px-4 py-3 text-sm text-zinc-200 outline-none focus:border-zinc-400 transition-colors rounded-lg" />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-zinc-400 ml-1">Your Message</label>
                            <textarea rows={4} placeholder="How can I help you?" className="w-full bg-zinc-900/80 border border-zinc-700/80 px-4 py-3 text-sm text-zinc-200 outline-none focus:border-zinc-400 transition-colors resize-none rounded-lg" />
                        </div>
                        <button className="w-full py-3.5 mt-2 bg-zinc-100 hover:bg-white text-zinc-900 text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 group">
                            Send Message <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
