"use client";

import Hero from './components/Hero';
import SectionHeader from './components/SectionHeader';
import ContributionGraph from './components/ContributionGraph';
import ProjectCard from './components/ProjectCard';
import ExperienceCard from './components/ExperienceCard';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-zinc-200 selection:text-black relative">
            <style dangerouslySetInnerHTML={{
                __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
            <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
            </div>
            <main className="relative z-10 w-full max-w-4xl mx-auto px-6 py-20 md:py-28">
                <Hero />
                <section className="mb-20">
                    <SectionHeader title="Contribution Log" />
                    <div className="p-1 relative group overflow-hidden">
                        <ContributionGraph />
                    </div>
                </section>
                <section className="mb-20">
                    <SectionHeader title="Tech Stack" />
                    <div className="flex flex-wrap gap-3">
                        {['TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'PHP', 'WordPress', 'Laravel', 'Tailwind CSS', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'Git'].map(tech => (
                            <span key={tech} className="px-3 py-1.5 text-xs text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-500 hover:text-white transition-colors cursor-default rounded-md">
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>
                <section className="mb-20">
                    <SectionHeader title="Featured Projects" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <ProjectCard
                            title="APKTemplates Store"
                            desc="Next.js storefront with Paddle/PayPal payments and automated Dropbox delivery for digital assets."
                            tags={['Next.js', 'Prisma', 'Paddle']}
                            link="https://apktemplates.com"
                        />
                        <ProjectCard
                            title="Play Store Sync SaaS"
                            desc="B2B Node.js service detecting outdated app versions via Google Play scraping and Bull Queue."
                            tags={['Node.js', 'Redis', 'PostgreSQL']}
                            link="#"
                        />
                        <ProjectCard
                            title="GitHub Auto-Deploy"
                            desc="Custom Actions pipeline handling version bumping, secure ZIP generation, and webhook notifications."
                            tags={['GitHub Actions', 'Bash', 'Next.js']}
                            link="#"
                        />
                        <ProjectCard
                            title="AT Panel Framework"
                            desc="Proprietary backend configuration framework powering 12 premium WordPress themes."
                            tags={['WordPress', 'PHP', 'AJAX']}
                            link="#"
                        />
                    </div>
                </section>
                <section className="mb-24">
                    <SectionHeader title="Experience" />
                    <div className="space-y-4">
                        <ExperienceCard
                            title="Founder & Lead Developer"
                            company="S&S Technology · APKTemplates"
                            date="Feb 2018 - Present"
                            bullets={[
                                "Architected and launched 12 premium WordPress themes targeting the high-traffic APK niche.",
                                "Engineered custom backend solutions (AT Panel) to streamline theme configuration for end users.",
                                "Developed a high-performance Next.js storefront to handle global sales and automated digital delivery."
                            ]}
                        />
                        <ExperienceCard
                            title="Freelance Full-Stack Developer"
                            company="Custom Client Projects"
                            date="2018 - Ongoing"
                            bullets={[
                                "Deliver custom WordPress theme development, plugin creation, and performance optimization.",
                                "Build scalable Node.js and Next.js applications, transitioning legacy PHP platforms to modern stacks."
                            ]}
                        />
                    </div>
                </section>
                <ContactSection />
                <Footer />
            </main>
        </div>
    );
}