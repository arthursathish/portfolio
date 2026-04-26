export default function SectionHeader({ title }: { title: string }) {
    return (
        <h2 className="text-xs text-zinc-500 uppercase tracking-widest mb-6 font-semibold">
            {title}
        </h2>
    );
}
