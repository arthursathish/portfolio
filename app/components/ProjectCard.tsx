import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    desc: string;
    tags: string[];
    link: string;
}

export default function ProjectCard({ title, desc, tags, link }: ProjectCardProps) {
    return (
        <a href={link} className="group block bg-[#080808] border border-zinc-800 hover:border-zinc-600 transition-all duration-300 rounded-xl overflow-hidden">
            <div className="h-40 bg-zinc-800/40 relative">
                <div className="absolute inset-0 bg-linear-to-t from-[#080808] to-transparent z-10" />
            </div>
            <div className="p-6 flex flex-col relative z-20 -mt-10">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-zinc-200 group-hover:text-white transition-colors tracking-tight">{title}</h3>
                    <ExternalLink size={18} className="text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                </div>
                <p className="text-zinc-400 text-sm mb-6 flex-1 leading-relaxed font-normal">{desc}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-zinc-500 bg-zinc-900/80 px-2.5 py-1 rounded-md border border-zinc-800">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
}
