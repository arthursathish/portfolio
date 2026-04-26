"use client";

import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Link as LinkIcon, Clock, Terminal, FileText, Send } from 'lucide-react';
import Github from './icons/Github';
import Twitter from './icons/Twitter';

function InfoBox({ icon, text, link }: { icon: React.ReactNode; text: string; link?: string }) {
    const content = (
        <>
            <span className="flex items-center justify-center w-8 h-8 border border-zinc-700 rounded-lg bg-zinc-800/50 text-zinc-400 shrink-0">
                {icon}
            </span>
            <span className="text-sm text-zinc-300 font-medium">{text}</span>
        </>
    );

    if (link) {
        return (
            <a href={link} className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
                {content}
            </a>
        );
    }
    return <div className="flex items-center gap-3">{content}</div>;
}

function ActionButton({ icon, text, href, primary }: { icon: React.ReactNode; text: string; href: string; primary?: boolean }) {
    if (primary) {
        return (
            <a href={href} className="flex items-center gap-2 px-5 py-2.5 bg-zinc-100 text-zinc-900 hover:bg-white border border-transparent transition-colors text-sm font-semibold rounded-lg">
                {icon} {text}
            </a>
        );
    }
    return (
        <a href={href} className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-700 hover:border-zinc-500 transition-colors text-sm font-semibold rounded-lg">
            {icon} {text}
        </a>
    );
}

function SocialButton({ icon, href }: { icon: React.ReactNode; href: string }) {
    return (
        <a href={href} className="flex items-center justify-center w-11 h-11 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 transition-colors">
            {icon}
        </a>
    );
}

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const roles = [
        "WordPress Developer",
        "Next.js Engineer",
        "Theme Architect",
        "Full-Stack Dev"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((current) => (current + 1) % roles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-8 mb-6 pb-8">
                <div className="w-24 h-24 bg-zinc-900 border border-zinc-700 shrink-0 flex items-center justify-center font-mono text-3xl text-zinc-400 font-bold tracking-tighter relative">
                    <div className="absolute -top-2 -left-2 w-3 h-3 border-t border-l border-zinc-300"></div>
                    <div className="absolute -bottom-2 -right-2 w-3 h-3 border-b border-r border-zinc-300"></div>
                    SK
                </div>

                <div className="flex flex-col flex-1 gap-2">
                    <div className="flex items-center gap-3 mb-1">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800">
                            <div className="w-2 h-2 rounded-full bg-zinc-300 animate-pulse" />
                            <span className="text-xs font-mono text-zinc-400">Available for projects</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase">
                        Sathish Kumar
                    </h1>

                    <div className="h-8 overflow-hidden relative mt-1">
                        <div
                            className="transition-transform duration-500 ease-out flex flex-col text-zinc-400 text-xl font-medium tracking-tight"
                            style={{ transform: `translateY(-${roleIndex * 32}px)` }}
                        >
                            {roles.map((role, idx) => (
                                <div key={idx} className="h-8 flex items-center text-zinc-300">{role}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                    <InfoBox icon={<Terminal size={16} />} text="Full-Stack Developer" />
                    <InfoBox icon={<MapPin size={16} />} text="Chennai, India" />
                    <InfoBox icon={<Mail size={16} />} text="hello@apktemplates.com" link="mailto:hello@apktemplates.com" />
                </div>
                <div className="space-y-3 hidden md:block">
                    <InfoBox icon={<Clock size={16} />} text="7+ Years Experience" />
                    <InfoBox icon={<LinkIcon size={16} />} text="apktemplates.com" link="https://apktemplates.com" />
                    <InfoBox icon={<Github size={16} />} text="@apktemplates" link="https://github.com/apktemplates" />
                </div>
            </div>

            <div className="mb-12 max-w-3xl">
                <p className="text-zinc-400 leading-relaxed text-base md:text-lg font-normal">
                    I build high-traffic web apps and storefronts using{' '}
                    <strong className="text-zinc-200 font-medium">Next.js</strong>,{' '}
                    <strong className="text-zinc-200 font-medium">React</strong>, and{' '}
                    <strong className="text-zinc-200 font-medium">WordPress</strong>.
                    Founder of APKTemplates — engineering 12 premium themes across 3 license tiers for the APK/mod niche. I don&apos;t just write code; I architect scalable digital delivery pipelines.
                </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-20">
                <ActionButton icon={<FileText size={16} />} text="View Resume" href="#" primary />
                <ActionButton icon={<Send size={16} />} text="Contact Me" href="#contact" />
                <div className="h-px w-8 bg-zinc-800 mx-2 hidden sm:block" />
                <SocialButton icon={<Twitter size={18} />} href="https://twitter.com/apktemplates" />
                <SocialButton icon={<Github size={18} />} href="https://github.com/apktemplates" />
            </div>
        </>
    );
}