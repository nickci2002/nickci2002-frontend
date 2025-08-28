import type { Route } from "./+types/Projects.ts";
import Projects from "../pages/Projects";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Projects" },
    { name: "author", content: "Nicholas C. Inglima (2025)" },
    { name: "description", content: "The list of all my projects I've\
                                     contributed to, both through\
                                     university and personal endeavors." },
  ];
}

export default function Home() {
  return <Projects />;
}