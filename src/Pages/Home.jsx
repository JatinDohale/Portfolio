import {React,useEffect} from "react";
import { Button } from "../Components/ui/Button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../Utils/createPageUrl";
import HeroSection from "../Components/home/HeroSection";
import FeaturedProjects from "../Components/home/FeaturedProjects";
import QuickSkills from "../Components/home/QuickSkills";

export default function HomePage() {

    useEffect(() => {
        document.title = "Home | Jatin Dohale Portfolio";
    }, []);

    return (
        <div className="min-h-screen">
            <HeroSection />
            <QuickSkills />
            <FeaturedProjects />

            {/* CTA Section */}
            <section className="py-20 relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Build Something Amazing?
                        </h2>
                        <p className="text-white/80 text-lg mb-8">
                            Let's connect and discuss how I can contribute to your next project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to={createPageUrl("Contact")}>
                                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl">
                                    <Mail className="w-5 h-5 mr-2" />
                                    Get In Touch
                                </Button>
                            </Link>
                            <a href="src\assets\Jatin_Dohale_Resume.pdf"
                                download="Jatin_Dohale_Resume.pdf">
                                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl">
                                    <Download className="w-5 h-5 mr-2" />
                                    Download Resume
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}