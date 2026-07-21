import React from 'react';
import { Link } from 'react-router-dom';

const graduates = [
    { name: 'Sharaheel Ali', detail: 'Coding Instructor · Code Ninjas', url: 'https://sharali.blog/' },
    { name: 'Henry Perkins', detail: 'Independent', url: 'https://hperkins.blog' },
    { name: 'Nefthali Arizmendi', detail: 'University of Illinois Chicago', url: 'https://nefthaliarizmendi.blog/' },
    { name: 'Yinkun Qu', detail: 'Software Development Engineer', url: 'https://kanes.blog/' },
];

const shot = (url: string) =>
    `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=900&h=600`;

const About: React.FC = () => {
    return (
        <section id="about" aria-labelledby="about-heading" className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2">
                        <h2 id="about-heading" className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Bridging the Gap to <span className="text-gray-300">Your Workforce Potential.</span>
                        </h2>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                <strong className="font-bold text-white">plato</strong> opens doors to living-wage jobs. Our 3-month cohorts pair self-guided lessons with real job placement opportunities.
                            </p>
                            <p>
                                Courses are reflective by design. Most programs stack skills and hope a career follows. In our experience, people keep jobs longer when they've established <em>who they are</em> than when they're showcasing what they've just learned &mdash; tools change, the person using them is what lasts. So every lesson pairs the technical work with the reflective work, on purpose.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <div
                            role="region"
                            aria-labelledby="finalists-heading"
                            className="rounded-2xl border border-white/30 bg-gradient-to-br from-indigo-900/20 via-white/5 to-black p-6 md:p-8"
                        >
                            <h3 id="finalists-heading" className="text-2xl md:text-3xl font-bold mb-2">Cohort One Finalists</h3>
                            <p className="text-sm text-gray-300 leading-relaxed mb-6">
                                34 finalists shipped real, production-ready portfolios.
                            </p>
                            <div className="relative">
                                <ul className="grid grid-cols-2 gap-3 list-none m-0 p-0">
                                    {graduates.map((grad, i) => {
                                        // The bottom row sits under a fade + CTA, so it's non-interactive
                                        // and hidden from assistive tech — the CTA leads to the full list.
                                        const faded = i >= 2;
                                        const cardClass = "group flex flex-col rounded-xl border border-white/20 bg-white/5 overflow-hidden transition-all";
                                        const inner = (
                                            <>
                                                <img
                                                    src={shot(grad.url)}
                                                    alt=""
                                                    loading="lazy"
                                                    width={900}
                                                    height={600}
                                                    className="w-full aspect-[16/9] object-cover object-top border-b border-white/20"
                                                />
                                                <div className="px-3 py-2.5 min-w-0">
                                                    <span className="block font-bold text-sm leading-tight truncate">{grad.name}</span>
                                                    <span className="block text-xs text-gray-400 truncate group-hover:hidden">{grad.detail}</span>
                                                    {!faded && (
                                                        <span aria-hidden="true" className="hidden text-xs text-indigo-300 group-hover:block">
                                                            View portfolio ↗
                                                        </span>
                                                    )}
                                                </div>
                                            </>
                                        );
                                        return faded ? (
                                            <li key={grad.name} aria-hidden="true">
                                                <div className={cardClass}>{inner}</div>
                                            </li>
                                        ) : (
                                            <li key={grad.name}>
                                                <a
                                                    href={grad.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`${grad.name}, ${grad.detail} — view portfolio (opens in a new tab)`}
                                                    className={`${cardClass} hover:bg-white/10 hover:border-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black`}
                                                >
                                                    {inner}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>

                                {/* Decorative fade that teases more finalists below the visible two. */}
                                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black via-black/85 to-transparent rounded-b-xl"></div>

                                {/* Functional CTA sits over the fade but is NOT hidden from assistive tech. */}
                                <div className="absolute inset-x-0 bottom-0 flex justify-center pb-4">
                                    <Link
                                        to="/graduation"
                                        aria-label="View all 34 finalist portfolios"
                                        className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                                    >
                                        View All Portfolios <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
