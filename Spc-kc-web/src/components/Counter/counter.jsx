import React from 'react';
import './counter.css';
 function CounterSection() {
            const [counts, setCounts] = React.useState({
                members: 0,
                chapters: 0,
                awards: 0
            });
            const [hasAnimated, setHasAnimated] = React.useState(false);
            const sectionRef = React.useRef(null);

            React.useEffect(() => {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting && !hasAnimated) {
                            setHasAnimated(true);
                        }
                    },
                    {
                        root: null,
                        rootMargin: '0px',
                        threshold: 0.3 // Trigger when 30% of section is visible
                    }
                );

                const currentRef = sectionRef.current;
                if (currentRef) {
                    observer.observe(currentRef);
                }

                return () => {
                    if (currentRef) {
                        observer.unobserve(currentRef);
                    }
                };
            }, [hasAnimated]);

            React.useEffect(() => {
                if (!hasAnimated) return;

                const targetCounts = {
                    members: 500,
                    chapters: 34,
                    awards: 30
                };
                const duration = 2000; // Animation duration in ms
                const steps = 60; // Number of animation steps
                const increment = {
                    members: targetCounts.members / steps,
                    chapters: targetCounts.chapters / steps,
                    awards: targetCounts.awards / steps
                };

                let currentStep = 0;
                const interval = setInterval(() => {
                    currentStep++;
                    setCounts(prev => ({
                        members: Math.min(Math.round(prev.members + increment.members), targetCounts.members),
                        chapters: Math.min(Math.round(prev.chapters + increment.chapters), targetCounts.chapters),
                        awards: Math.min(Math.round(prev.awards + increment.awards), targetCounts.awards)
                    }));

                    if (currentStep >= steps) {
                        clearInterval(interval);
                    }
                }, duration / steps);

                return () => clearInterval(interval);
            }, [hasAnimated]);

            return (
                <div ref={sectionRef} className="bg-gray-100 py-16  counter-section">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="p-6 bg-white rounded-lg shadow-lg">
                                <h3 className="text-4xl font-bold text-blue-600">{counts.members.toLocaleString()}+</h3>
                                <p className="mt-2 text-lg text-gray-600">Members</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-lg">
                                <h3 className="text-4xl font-bold text-blue-600">{counts.chapters.toLocaleString()}</h3>
                                <p className="mt-2 text-lg text-gray-600">Chapters</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-lg">
                                <h3 className="text-4xl font-bold text-blue-600">{counts.awards.toLocaleString()}+</h3>
                                <p className="mt-2 text-lg text-gray-600">Events</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
export default CounterSection;