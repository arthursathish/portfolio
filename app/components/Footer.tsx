export default function Footer() {
    return (
        <footer className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-medium">
            <p>© 2026 Sathish Kumar. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-zinc-300 transition-colors">Home</a>
                <a href="#" className="hover:text-zinc-300 transition-colors">Work</a>
                <a href="#contact" className="hover:text-zinc-300 transition-colors">Contact</a>
            </div>
        </footer>
    );
}
