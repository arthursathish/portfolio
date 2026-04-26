"use client";

import { useState, useEffect } from 'react';

interface DayData {
    date: Date;
    count: number;
    level: number;
}

interface MonthLabel {
    label: string;
    colIndex: number;
}

const HEATMAP_COLORS = [
    'bg-zinc-900 border-zinc-800',
    'bg-zinc-700 border-zinc-600',
    'bg-zinc-500 border-zinc-400',
    'bg-zinc-300 border-zinc-200',
    'bg-white border-white'
];

export default function ContributionGraph() {
    const [data, setData] = useState<DayData[][]>([]);
    const [months, setMonths] = useState<MonthLabel[]>([]);

    useEffect(() => {
        const today = new Date('2026-04-25');
        const daysArray = Array.from({ length: 365 }).map((_, i) => {
            const d = new Date(today);
            d.setDate(d.getDate() - (364 - i));

            const rand = Math.random();
            let level = 0;
            if (rand > 0.6) {
                if (rand > 0.95) level = 4;
                else if (rand > 0.85) level = 3;
                else if (rand > 0.75) level = 2;
                else level = 1;
            }

            const count = level === 0 ? 0 : Math.floor(Math.random() * (level * 5)) + 1;
            return { date: d, count, level };
        });

        const weeks: DayData[][] = [];
        const monthLabels: MonthLabel[] = [];
        let lastMonth = -1;

        for (let i = 0; i < daysArray.length; i += 7) {
            const weekSlice = daysArray.slice(i, i + 7);
            weeks.push(weekSlice);

            const weekFirstDayMonth = weekSlice[0].date.getMonth();
            if (weekFirstDayMonth !== lastMonth) {
                monthLabels.push({
                    label: weekSlice[0].date.toLocaleString('default', { month: 'short' }),
                    colIndex: weeks.length - 1
                });
                lastMonth = weekFirstDayMonth;
            }
        }

        setData(weeks);
        setMonths(monthLabels);
    }, []);

    const totalContributions = data.flat().reduce((sum, day) => sum + day.count, 0);

    return (
        <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
            <div className="min-w-max relative">

                <div className="relative h-6 text-xs text-zinc-500 font-medium mb-1">
                    {months.map((month, i) => {
                        const leftPosition = month.colIndex * 15;
                        if (month.colIndex > 50) return null;
                        return (
                            <span key={i} className="absolute top-0" style={{ left: `${leftPosition}px` }}>
                                {month.label}
                            </span>
                        );
                    })}
                </div>

                <div className="flex gap-[3px]">
                    {data.map((week, wIdx) => (
                        <div key={wIdx} className="flex flex-col gap-[3px]">
                            {week.map((day, dIdx) => (
                                <div key={dIdx} className="relative group/cell">
                                    <div
                                        className={`w-[12px] h-[12px] border ${HEATMAP_COLORS[day.level]} hover:ring-1 hover:ring-zinc-400 transition-all cursor-crosshair rounded-[2px]`}
                                    />
                                    <div
                                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-zinc-800 text-white text-xs font-medium rounded-lg whitespace-nowrap pointer-events-none transition-all duration-150 ease-out z-50 opacity-0 translate-y-2 group-hover/cell:opacity-100 group-hover/cell:translate-y-0 shadow-xl"
                                        style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.4)" }}
                                    >
                                        {day.count} Contributions on {day.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-zinc-800"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

            </div>

            <div className="flex justify-between items-center mt-6 text-xs font-medium text-zinc-500">
                <span>{totalContributions > 0 ? totalContributions : '...'} Events Logged (Last 365 Days)</span>
                <div className="flex items-center gap-2">
                    <span>Less</span>
                    {HEATMAP_COLORS.map((color, i) => (
                        <div key={i} className={`w-[12px] h-[12px] rounded-[2px] border ${color}`} />
                    ))}
                    <span>More</span>
                </div>
            </div>
        </div>
    );
}
