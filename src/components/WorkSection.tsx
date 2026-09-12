"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  LayoutGrid,
  List,
  Search,
  X,
} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const categories = ["All", "Web App", "AI", "Mobile App", "Data Analytics"];

export default function WorkSection({
  archive = false,
}: {
  archive?: boolean;
}) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(archive);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState("featured");
  const filtered = useMemo(() => {
    const result = projects.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        [p.title, p.description, p.role, ...p.tags]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase().trim()),
    );
    return result.sort((a, b) =>
      sort === "az"
        ? a.title.localeCompare(b.title)
        : (a.featuredRank ?? 99) - (b.featuredRank ?? 99),
    );
  }, [category, query, sort]);
  const visible = showAll ? filtered : filtered.slice(0, 6);
  function reset() {
    setCategory("All");
    setQuery("");
    setSort("featured");
  }
  return (
    <section
      id="projects"
      className={`work-section ${archive ? "archive-section" : ""}`}
    >
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-badge">✳ A SELECTION OF MY WORK</span>
        {archive ? (
          <h1>
            Ideas turned into <em>projects.</em>
          </h1>
        ) : (
          <h2>
            Ideas turned into <em>projects.</em>
          </h2>
        )}
        <p>
          Web systems, backend engineering, and applied AI.
          <br />
          Explore the thinking and technology behind each build.
        </p>
      </motion.div>
      <div className="work-stats">
        <div>
          <strong>{projects.length}</strong>
          <span>Projects</span>
        </div>
        <div>
          <strong>{projects.filter((p) => p.featured).length}</strong>
          <span>Featured builds</span>
        </div>
        <div>
          <strong>{projects.filter((p) => p.demoUrl).length}</strong>
          <span>Live demos</span>
        </div>
      </div>
      <div className="work-controls">
        <label className="project-search">
          <Search size={17} />
          <input
            aria-label="Search projects"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, technologies…"
          />
          {query && (
            <button aria-label="Clear search" onClick={() => setQuery("")}>
              <X size={15} />
            </button>
          )}
        </label>
        <select
          aria-label="Sort projects"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="featured">Featured first</option>
          <option value="az">A – Z</option>
        </select>
        <div className="view-switch">
          <button
            aria-label="Grid view"
            aria-pressed={view === "grid"}
            onClick={() => setView("grid")}
          >
            <LayoutGrid size={17} />
          </button>
          <button
            aria-label="List view"
            aria-pressed={view === "list"}
            onClick={() => setView("list")}
          >
            <List size={17} />
          </button>
        </div>
      </div>
      <div
        className="filter-pills"
        role="group"
        aria-label="Project categories"
      >
        {categories.map((c) => (
          <button
            aria-pressed={category === c}
            key={c}
            onClick={() => setCategory(c)}
          >
            {c}
            <span>
              {projects.filter((p) => c === "All" || p.category === c).length}
            </span>
          </button>
        ))}
      </div>
      <p className="result-count" role="status">
        Showing {visible.length} of {filtered.length} projects
      </p>
      <motion.div
        layout
        className={`project-grid ${view === "list" ? "project-list-view" : ""}`}
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
      {!filtered.length && (
        <div className="empty-projects">
          <Search size={32} />
          <h3>No projects found</h3>
          <p>Try a different keyword or category.</p>
          <button className="pill-button" onClick={reset}>
            Clear filters
          </button>
        </div>
      )}
      <div className="work-bottom">
        {!archive && filtered.length > 6 && (
          <button className="pill-button" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show less" : "View more projects"}
            <ArrowDown size={15} />
          </button>
        )}
        {!archive && (
          <Link className="text-link" href="/projects">
            Explore all projects <ArrowUpRight size={15} />
          </Link>
        )}
      </div>
    </section>
  );
}
