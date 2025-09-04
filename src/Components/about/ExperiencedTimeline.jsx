import React from "react";
import { GraduationCap } from "lucide-react";

export default function ExperienceTimeline() {
    const timelineItems = [
        {
            type: "education",
            title: "Bachelor's in Computer Engineering | CGPA : 7.04",
            organization: "Mumbai University",
            period: "2021 - 2025",
            description: "Graduated with honors, focusing on software engineering and web development. Completed multiple projects in various programming languages.",
            icon: GraduationCap
        },
        {
            type: "education",
            title: "Higher Secondary Education in Science | Percentage : 81.70%", 
            organization: "B.K Birla College",
            period: "2020 - 2021",
            description: "Specialized in Science (Physics, Chemistry, Mathematics). Built a strong foundation in logical reasoning and analytical thinking that supports programming and engineering skills.",
            icon: GraduationCap
        },
        {
            type: "education",
            title: "Secondary School Certificate | Percentage : 81.40%",
            organization: "Dynadip",
            period: "2018 - 2019",
            description: "Successfully completed secondary education with distinction, actively participating in science exhibitions and technology competitions that sparked interest in computer engineering.",
            icon: GraduationCap
        }
    ];

    const typeColors = {
        education: "from-blue-400 to-cyan-400",
        experience: "from-green-400 to-emerald-400",
        achievement: "from-purple-400 to-violet-400"
    };

    return (
        <section className="py-16">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-12">My Journey</h2>
                
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400 opacity-30"></div>
                    
                    <div className="space-y-8">
                        {timelineItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative flex items-start gap-6 group"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                {/* Timeline dot */}
                                <div className={`relative z-10 w-16 h-16 bg-gradient-to-r ${typeColors[item.type]} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                
                                {/* Content */}
                                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group-hover:bg-white/15 transition-all duration-300">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                        <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                        <span className="text-purple-300 font-medium text-sm">{item.period}</span>
                                    </div>
                                    <p className="text-purple-200 font-medium mb-3">{item.organization}</p>
                                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}