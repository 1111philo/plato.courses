import React from 'react';

const tracks = [
    {
        name: 'AI Leaders Micro-Credential',
        focus: 'AI Literacy',
        badge: 'For All Students',
        badgeClass: 'border-indigo-400/40 bg-indigo-500/10 text-indigo-200',
        body: "Earn a micro-credential that proves you know how to work with AI in a professional setting.",
    },
    {
        name: 'WordPress Internship',
        focus: 'Open Source Contribution',
        badge: 'For Undergraduates',
        badgeClass: 'border-emerald-400/40 bg-emerald-500/10 text-emerald-200',
        body: 'Learn to ship real code and become a WordPress contributor.',
    },
    {
        name: 'Job Placement',
        focus: 'Workforce Development',
        badge: 'For All Students',
        badgeClass: 'border-indigo-400/40 bg-indigo-500/10 text-indigo-200',
        body: (
            <>
                Enter the{' '}
                <a
                    href="https://philosophers.group/ai-leaders-final-course-job-search-feedback-loop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold underline underline-offset-4 hover:text-indigo-300 transition-colors"
                >
                    Job Search Feedback Loop
                </a>{' '}
                to pursue a living-wage job that matches your experience.
            </>
        ),
    },
];

const Outcomes: React.FC = () => {
    return (
        <section id="outcomes" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black opacity-60 z-0 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
                        <span className="text-sm font-medium tracking-wide text-gray-300">Outcomes</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Workforce outcomes</span> for every student.
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Our program outcomes are designed for job-seekers of all experience levels.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {tracks.map((track) => (
                        <div
                            key={track.name}
                            className="p-6 border border-white/30 rounded-lg bg-white/10 flex flex-col"
                        >
                            <h3 className="text-2xl font-bold mb-1">{track.name}</h3>
                            <span className="text-sm font-medium tracking-wide text-gray-400 mb-3">{track.focus}</span>
                            <p className="text-sm text-gray-300 leading-relaxed">{track.body}</p>
                            <span className={`mt-4 inline-block self-start px-3 py-1 rounded-full border text-xs font-medium tracking-wide ${track.badgeClass}`}>{track.badge}</span>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <a
                        href="#apply"
                        className="group inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-base font-bold transition-all hover:scale-105 active:scale-95"
                    >
                        Join a Cohort
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Outcomes;
