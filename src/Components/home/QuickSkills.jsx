import React from "react";
import { Code, Database, Palette, Zap } from "lucide-react";

export default function QuickSkills() {

    const skillCategories = [
        {
            title: "Frontend",
            icon: Palette,
            skills: ["HTML", "CSS", "JavaScript", "ReactJS",],
            color: "from-blue-400 to-cyan-400"
        },
        {
            title: "Backend",
            icon: Database,
            skills: ["Node.js", "Express", "Java", "InProgress"],
            color: "from-green-400 to-emerald-400"
        },
        {
            title: "Database",
            icon: Database,
            skills: ["MongoDB", "MySQl", "InProgress", "InProgress"],
            color: "from-purple-400 to-violet-400"
        },
        {
            title: "Tools",
            icon: Zap,
            skills: ["Git", "VS-CODE", "InProgress", "InProgress"],
            color: "from-orange-400 to-red-400"
        }
    ];

    function generateKey(length = 8) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let key = "";
        for (let i = 0; i < length; i++) {
            key += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return key;
    }

    return (
        <section className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Tech Stack & Skills
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Building modern web applications with cutting-edge technologies
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className="group relative"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <category.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-white font-semibold text-lg mb-3">{category.title}</h3>
                                <div className="space-y-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div
                                            key={generateKey()}
                                            className={`${skill == "InProgress" ? "text-white/30" : "text-white/80"} h-8 text-sm bg-white/5 rounded-lg px-3 py-1 border border-white/10`}
                                            style={{ animationDelay: `${(index * 4 + skillIndex) * 100}ms` }}
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}