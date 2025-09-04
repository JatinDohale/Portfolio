import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../Components/ui/Dialog";
import { Badge } from "../../Components/ui/Badge";
import { Button } from "../../Components/ui/Button";
import { ExternalLink, Github, X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
    const categoryColors = {
        frontend: "bg-blue-500/20 text-blue-300 border-blue-500/30",
        backend: "bg-green-500/20 text-green-300 border-green-500/30",
        fullstack: "bg-purple-500/20 text-purple-300 border-purple-500/30",
        mobile: "bg-orange-500/20 text-orange-300 border-orange-500/30",
        other: "bg-gray-500/20 text-gray-300 border-gray-500/30"
    };

    return (
        <Dialog open={true} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl bg-slate-900/95 backdrop-blur-md border-white/20 text-white">
                <DialogHeader className="text-left">
                    <DialogTitle className="text-2xl font-bold  text-black">
                        {project.title}
                    </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                    {/* Category and Description */}
                    <div className="space-y-4">
                        <Badge className={`${categoryColors[project.category]} border w-fit`}>
                            {project.category}
                        </Badge>
                        <p className="text-black/80 text-lg leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h3 className="text-black font-semibold mb-3">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech_stack?.map((tech) => (
                                <Badge key={tech} variant="warning" className="border-white/30 text-black bg-white/10">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                        {project.github && (
                            <button
                                className="inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2  bg-white/10 backdrop-blur-sm border border-black text-black/80 flex-1 hover:bg-black/80 hover:text-white/80"
                                onClick={() => window.open(project.github, '_blank')}
                            >
                                <Github className="w-5 h-5 mr-2" />
                                View Source Code
                            </button>
                        )}
                        {project.demo && (
                            <Button
                                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white flex-1"
                                onClick={() => window.open(project.demo, '_blank')}
                            >
                                <ExternalLink className="w-5 h-5 mr-2" />
                                Live Demo
                            </Button>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}