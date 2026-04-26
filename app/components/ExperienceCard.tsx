interface ExperienceCardProps {
    title: string;
    company: string;
    date: string;
    bullets: string[];
}

export default function ExperienceCard({ title, company, date, bullets }: ExperienceCardProps) {
    return (
        <div className="p-6 md:p-8 bg-[#080808] border border-zinc-800 hover:border-zinc-700 transition-colors rounded-xl">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5 gap-2">
                <div>
                    <h3 className="text-base md:text-lg font-semibold text-zinc-200">{title}</h3>
                    <p className="text-sm font-medium text-zinc-500 mt-1">{company}</p>
                </div>
                <span className="text-xs font-medium text-zinc-500 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-md shrink-0 w-max">{date}</span>
            </div>
            <ul className="space-y-3">
                {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 font-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{b}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
