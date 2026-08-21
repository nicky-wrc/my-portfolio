import { skills } from "@/data/skills";

export default function SkillSection() {
  const revealDirections = ["left", "up", "right"] as const;

  return (
    <div className="skills-grid">
      {skills.map((group, index) => (
        <section
          key={group.category}
          className="skill-group"
          data-reveal={revealDirections[index % revealDirections.length]}
          data-reveal-delay={String(index % 3)}
        >
          <div className="skill-heading">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{group.category}</h3>
          </div>
          <ul>
            {group.items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
