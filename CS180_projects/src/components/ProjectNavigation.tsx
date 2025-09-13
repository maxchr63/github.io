import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

interface ProjectNavigationProps {
  currentProject?: string;
  showHomeButton?: boolean;
}

const ProjectNavigation = ({ currentProject, showHomeButton = true }: ProjectNavigationProps) => {
  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link to="/">
        <Button variant="ghost" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Button>
      </Link>
      
      {showHomeButton && (
        <Link to="/">
          <Button variant="outline" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Home
          </Button>
        </Link>
      )}
      
      {currentProject && (
        <div className="text-sm text-gray-600">
          {currentProject}
        </div>
      )}
    </nav>
  );
};

export default ProjectNavigation;