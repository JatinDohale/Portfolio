import React from "react";
import { Progress } from "../../Components/ui/Progress";

export default function SkillsVisualization({ skills }) {
    const skillsByCategory = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {});

    const categoryColors = {
        frontend: "from-blue-400 to-cyan-400",
        backend: "from-green-400 to-emerald-400",
        database: "from-purple-400 to-violet-400",
        tools: "from-orange-400 to-red-400",
        other: "from-gray-400 to-slate-400"
    };

    function generateKey(length = 8) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let key = "";
        for (let i = 0; i < length; i++) {
            key += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return key;
    }

    if (Object.keys(skillsByCategory).length === 0) {
        return (
            <section className="py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <h3 className="text-white text-xl font-semibold mb-2">Skills Coming Soon</h3>
                        <p className="text-white/60">Skills data will be displayed here once added.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-12">Skills & Expertise</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                        <div key={category} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <h3 className="text-white font-semibold text-xl mb-6 capitalize flex items-center gap-3">
                                <div className={`w-3 h-3 bg-gradient-to-r ${categoryColors[category]} rounded-full`}></div>
                                {category.replace('_', ' ')}
                            </h3>
                            <div className="space-y-4">
                                {categorySkills.map((skill, index) => (
                                    <div
                                        key={generateKey()}
                                        className="space-y-2"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="text-white font-medium">{skill.name}</span>
                                            <span className="text-white/70 text-sm">{skill.proficiency}%</span>
                                        </div>
                                        <div className="relative">
                                            <Progress
                                                value={skill.proficiency}
                                                className="h-2 bg-white/10"
                                                color={categoryColors[category]}
                                            />

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}