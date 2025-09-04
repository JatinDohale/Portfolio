import React, { useState, useEffect } from "react";
import Project from "../../Entities/Project.json"
import { Button } from "../../Components/ui/Button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Badge } from "../../Components/ui/Badge";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../Utils/createPageUrl";

export default function FeaturedProjects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = async () => {
        try {
            const allProjects =  Project;
            setProjects(allProjects.slice(0, 3));
        } catch (err) {
            console.error("Error loading projects:");
        }
    };

    return (
        <section className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        A showcase of my recent work and creative solutions
                    </p>
                </div>

                {projects.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                {project.image_url && (
                                    <div className="aspect-video overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                                        <img
                                            src={project.image_url}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                )}
                                
                                <div className="p-6">
                                    <h3 className="text-white font-bold text-xl mb-3 group-hover:text-purple-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/70 mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech_stack?.slice(0, 3).map((tech) => (
                                            <Badge key={tech} variant="outline" className="border-white/30 text-white/80 bg-white/5">
                                                {tech}
                                            </Badge>
                                        ))}
                                        {project.tech_stack?.length > 3 && (
                                            <Badge variant="outline" className="border-white/30 text-white/60 bg-white/5">
                                                +{project.tech_stack.length - 3} more
                                            </Badge>
                                        )}
                                    </div>
                                    
                                    <div className="flex gap-3">
                                        {project.github_url && (
                                            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                                                <Github className="w-4 h-4 mr-1" />
                                                Code
                                            </Button>
                                        )}
                                        {project.live_url && (
                                            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                                                <ExternalLink className="w-4 h-4 mr-1" />
                                                Live Demo
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <h3 className="text-white text-xl font-semibold mb-2">No Featured Projects Yet</h3>
                            <p className="text-white/60 mb-4">Projects will appear here once they're marked as featured.</p>
                            <Link to={createPageUrl("Projects")}>
                                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                                    View All Projects
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}

                <div className="text-center">
                    <Link to={createPageUrl("Projects")}>
                        <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl">
                            View All Projects
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}