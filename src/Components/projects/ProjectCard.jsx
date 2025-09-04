import React from "react";
import { Badge } from "../../Components/ui/Badge";
import { Button } from "../../Components/ui/Button";
import { ExternalLink, Github, Eye } from "lucide-react";

export default function ProjectCard({ project, index, onClick }) {
    const categoryColors = {
        frontend: "bg-blue-500/20 text-blue-300 border-blue-500/30",
        backend: "bg-green-500/20 text-green-300 border-green-500/30",
        fullstack: "bg-purple-500/20 text-purple-300 border-purple-500/30",
        mobile: "bg-orange-500/20 text-orange-300 border-orange-500/30",
        other: "bg-gray-500/20 text-gray-300 border-gray-500/30"
    };

    return (
        <div
            className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={onClick}
        >
            {/* Project Image */}
            <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative overflow-hidden">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                            <Eye className="w-8 h-8 text-white/50" />
                        </div>
                    </div>
                )}
                
                {/* Overlay on hover */}
                {/* <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" className="border-white/50 text-white bg-white/10 backdrop-blur-sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                    </Button>
                </div> */}
            </div>

            {/* Project Info */}
            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-bold text-xl group-hover:text-purple-300 transition-colors">
                        {project.title}
                    </h3>
                    <Badge className={`${categoryColors[project.category]} border`}>
                        {project.category}
                    </Badge>
                </div>
                
                <p className="text-white/70 mb-4 line-clamp-2">
                    {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech_stack?.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="border-white/20 text-white/60 bg-white/5 text-xs">
                            {tech}
                        </Badge>
                    ))}
                    {project.tech_stack?.length > 3 && (
                        <Badge variant="outline" className="border-white/20 text-white/50 bg-white/5 text-xs">
                            +{project.tech_stack.length - 3}
                        </Badge>
                    )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 absolute bottom-2 justify-between w-[90%]">
                    {project.github && (
                        <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-white/30 text-white hover:bg-white/10 flex-1"
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.github, '_blank');
                            }}
                        >
                            <Github className="w-4 h-4 mr-1" />
                            Code
                        </Button>
                    )}
                    {project.demo && (
                        <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-white/30 text-white hover:bg-white/10 flex-1"
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.demo, '_blank');
                            }}
                        >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Demo
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}