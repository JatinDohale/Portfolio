import React, { useState, useEffect, useCallback } from "react";
import Project from "../Entities/Project.json";
import { Button } from "../Components/ui/Button";
import { Badge } from "../Components/ui/Badge";
import { Input } from "../Components/ui/Input";
import { Tabs, TabsList, TabsTrigger } from "../Components/ui/Tabs";
import { Search, ExternalLink, Github, Filter } from "lucide-react";
import ProjectCard from "../Components/projects/ProjectCard";
import ProjectModal from "../Components/projects/ProjectModals";

export default function ProjectsPage() {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");
    const [isLoading, setIsLoading] = useState(true);

    const filterProjects = useCallback(() => {
        let filtered = projects;

        // Category filter
        if (activeCategory !== "all") {
            filtered = filtered.filter(
                (project) =>
                    project.category.toLowerCase() === activeCategory.toLowerCase()
            );
        }

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(
                (project) =>
                    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    project.tech_stack?.some((tech) =>
                        tech.toLowerCase().includes(searchTerm.toLowerCase())
                    )
            );
        }

        setFilteredProjects(filtered);
    }, [projects, searchTerm, activeCategory]);


    useEffect(() => {
        loadProjects();
    }, []);

    useEffect(() => {
        if (projects.length > 0) {
            filterProjects();
        }
    }, [projects, filterProjects]);

    const loadProjects = async () => {
        try {
            setProjects(Project);
            setIsLoading(false);
        } catch (error) {
            console.error("Error loading projects:", error);
            setIsLoading(false);
        }
    };

   useEffect(() => {
        document.title = "Projects | Jatin Dohale Portfolio";
    }, []);

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 pt-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        A collection of web applications and software projects showcasing my development skills
                    </p>
                </div>

                {/* Filters and Search */}
                <div className="flex flex-col items-center justify-center  gap-4 mb-12">
                    <div className="relative w-[65%]">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                        <Input
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm"
                        />
                    </div>


                    <Tabs value={activeCategory} onValueChange={setActiveCategory} className>
                        <TabsList>
                            <TabsTrigger value="all" activeTab={activeCategory} setActiveTab={setActiveCategory}>All</TabsTrigger>
                            <TabsTrigger value="frontend"  activeTab={activeCategory} setActiveTab={setActiveCategory}>Frontend</TabsTrigger>
                            <TabsTrigger value="backend"  activeTab={activeCategory} setActiveTab={setActiveCategory}>Backend</TabsTrigger>
                            <TabsTrigger value="fullstack"  activeTab={activeCategory} setActiveTab={setActiveCategory}>Fullstack</TabsTrigger>
                            <TabsTrigger value="mobile"  activeTab={activeCategory} setActiveTab={setActiveCategory}>Mobile</TabsTrigger>
                        </TabsList>
                    </Tabs>


                </div>

                {/* Projects Grid */}
                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-pulse">
                                <div className="aspect-video bg-white/5 rounded-lg mb-4"></div>
                                <div className="h-6 bg-white/5 rounded mb-2"></div>
                                <div className="h-4 bg-white/5 rounded w-3/4 mb-4"></div>
                                <div className="flex gap-2">
                                    <div className="h-6 bg-white/5 rounded w-16"></div>
                                    <div className="h-6 bg-white/5 rounded w-16"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
                            <Filter className="w-16 h-16 text-white/30 mx-auto mb-4" />
                            <h3 className="text-white text-xl font-semibold mb-2">No Projects Found</h3>
                            <p className="text-white/60 mb-4">Try adjusting your search or filter criteria.</p>
                            <Button
                                variant="outline"
                                className="border-white/30 text-white hover:bg-white/10"
                                onClick={() => {
                                    setSearchTerm("");
                                    setActiveCategory("all");
                                }}
                            >
                                Clear Filters
                            </Button>
                        </div>
                    </div>
                )}

                {/* Project Modal */}
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </div>
        </div>
    );
}