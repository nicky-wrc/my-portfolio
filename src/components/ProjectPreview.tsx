import Image from "next/image";
import {
  Code2,
  Database,
  ScanFace,
  ShoppingBag,
  BrainCircuit,
  Utensils,
  Bike,
  BarChart3,
} from "lucide-react";
import type { Project } from "@/data/projects";

const visuals: Record<
  string,
  { image?: string; color: string; icon: typeof Code2 }
> = {
  "face-recognition-attendance": { color: "#38bdf8", icon: ScanFace },
  "food-order-app": { color: "#fb923c", icon: Utensils },
  "smart-moto-service": { color: "#a78bfa", icon: Bike },
  "pos-pharmacy": { color: "#34d399", icon: Database },
  "game-key-marketplace": { color: "#c084fc", icon: ShoppingBag },
  "ecommerce-springboot": { color: "#f472b6", icon: ShoppingBag },
  "ppe-detection-system": { color: "#fbbf24", icon: ScanFace },
  "Powered-Product-Recommendation-Engine-Web-app": {
    color: "#a78bfa",
    icon: BrainCircuit,
  },
  "restaurant-qr-system": { color: "#fb923c", icon: Utensils },
  "Big-Data-Analytics-Mini-Project": { color: "#38bdf8", icon: BarChart3 },
};

export default function ProjectPreview({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const visual = visuals[project.slug] ?? { color: "#60a5fa", icon: Code2 };
  const Icon = visual.icon;
  return (
    <div
      className={`project-visual${
        project.galleryLayout === "portrait" ? " project-visual--portrait" : ""
      }`}
      style={{ "--project-color": visual.color } as React.CSSProperties}
    >
      {project.previewImage ? (
        <Image
          src={project.previewImage}
          alt={`${project.title} project image`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="project-photo"
        />
      ) : (
        <div className="project-abstract" aria-hidden="true">
          <div className="project-orbit" />
          <div className="project-orbit orbit-two" />
          <div className="project-icon">
            <Icon size={44} strokeWidth={1.2} />
          </div>
          <span>{project.category.toUpperCase()}</span>
          <div className="abstract-stack">
            {project.tags.slice(0, 3).map((tag) => (
              <small key={tag}>{tag}</small>
            ))}
          </div>
        </div>
      )}
      <span className="project-visual-label">{project.role}</span>
    </div>
  );
}
