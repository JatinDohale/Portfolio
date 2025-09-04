import React from "react";
import { Button } from "../ui/Button";
import { ArrowRight, Github, Linkedin, Mail, Code, Database, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../Utils/createPageUrl";

const TYPING_TEXTS = ["Frontend Developer", "Backend Engineer", "Fullstack Creator", "Problem Solver"];

export default function HeroSection() {
    const [currentText, setCurrentText] = React.useState("");
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (currentText.length < TYPING_TEXTS[currentIndex].length) {
                    setCurrentText(TYPING_TEXTS[currentIndex].slice(0, currentText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(TYPING_TEXTS[currentIndex].slice(0, currentText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [currentText, currentIndex, isDeleting]);

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Floating icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 text-white/10 animate-bounce">
                    <Code className="w-12 h-12" />
                </div>
                <div className="absolute top-40 right-20 text-white/10 animate-bounce animation-delay-1000">
                    <Database className="w-10 h-10" />
                </div>
                <div className="absolute bottom-40 left-20 text-white/10 animate-bounce animation-delay-2000">
                    <Smartphone className="w-8 h-8" />
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="space-y-8">
                    {/* Main heading */}
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                                Hi, I'm Jatin
                            </span>
                        </h1>
                        <div className="h-16 flex items-center justify-center">
                            <span className="text-2xl sm:text-4xl font-semibold text-white">
                                {currentText}
                                <span className="animate-pulse">|</span>
                            </span>
                        </div>
                    </div>

                    {/* Subtitle */}
                    <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        Passionate fresher developer ready to create innovative web solutions 
                        and bring ideas to life with modern technologies.
                    </p>

                    {/* Social links */}
                    <div className="flex justify-center gap-4 mb-8">
                        <a href="https://github.com/JatinDohale">
                        <Button variant="outline" size="icon" className="border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white">
                            <Github className="w-5 h-5" />
                        </Button>
                        </a>
                        <a href="https://www.linkedin.com/in/jatin-dohale-b7971b2b4">
                        <Button variant="outline" size="icon" className="border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white">
                            <Linkedin className="w-5 h-5" />
                        </Button>
                        </a>

                        <a href="mailto:jatindohale2004@gmail.com">
                        <Button variant="outline" size="icon" className="border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white">
                            <Mail className="w-5 h-5" />
                        </Button>
                        </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to={createPageUrl("Projects")}>
                            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl text-lg font-medium">
                                View My Work
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link to={createPageUrl("Contact")}>
                            <Button variant="outline" className="border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-xl text-lg font-medium">
                                Let's Connect
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}