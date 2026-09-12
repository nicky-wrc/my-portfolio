import type { Metadata } from "next";
import WorkSection from "@/components/WorkSection";
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Web, backend, mobile, and applied AI projects by Worachat Paranya.",
};
export default function ProjectsPage() {
  return (
    <main id="main-content">
      <WorkSection archive />
    </main>
  );
}
