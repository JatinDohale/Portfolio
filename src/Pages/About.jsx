import React, { useState, useEffect } from "react";
import Skill from "../Entities/Skills.json";
import { Button } from "../Components/ui/Button";
import { Download, MapPin, Calendar, GraduationCap } from "lucide-react";
import SkillsVisualization from "../Components/about/SkillVisulazation";
import ExperienceTimeline from "../Components/about/ExperiencedTimeline";

export default function AboutPage() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        loadSkills();
    }, []);

    const loadSkills = async () => {
        try {
            const skillsData = Skill;
            setSkills(skillsData);
        } catch (error) {
            console.error("Error loading skills:", error);
        }
    };
     useEffect(() => {
            document.title = "About | Jatin Dohale Portfolio";
        }, []);

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <section className="py-20 text-center">
                    <div className="relative">
                        <div className="w-32 h-32 mx-auto mb-8 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                            <img
                                src="\myphoto.jpg"
                                alt="Profile"
                                className="w-full h-full rounded-full object-cover border-4 border-white/20 relative z-10"
                            />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
                        </h1>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xl text-white/80 leading-relaxed mb-8">
                                I'm a passionate Full-Stack Developer with a strong foundation in Computer Engineering.
                                As a recent graduate, I bring fresh perspectives, modern development practices, and hands-on project experience to every application I build.
                                I thrive on transforming complex problems into elegant, user-friendly solutions that create real impact.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 text-white/70">
                                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>Mumbai, India</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                                    <GraduationCap className="w-4 h-4" />
                                    <span>Computer Engineering Graduate</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>Available for opportunities</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <SkillsVisualization skills={skills} />
                <ExperienceTimeline />

                {/* Download Resume Section */}
                <section className="py-16">
                    <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Want to Know More?</h3>
                        <p className="text-white/70 mb-6">Download my resume to see my complete background and qualifications.</p>
                        <a href="\Jatin_Dohale_Resume.pdf"
                        download="Jatin_Dohale_Resume.pdf">
                            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl">
                                <Download className="w-5 h-5 mr-2" />
                                Download Resume
                            </Button>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}