import React from 'react';
import FinalistsPanel from './FinalistsPanel';

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
                        <FinalistsPanel />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
