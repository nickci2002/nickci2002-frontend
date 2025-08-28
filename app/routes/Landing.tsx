import type { Route } from "./+types/Landing.ts";
import Landing from "../pages/Landing";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "nickci2002 Home" },
    { name: "author", content: "Nicholas C. Inglima (2025)" },
    { name: "description", content: "The main home page of my website.\
                                     Enjoy your stay!" },
  ];
}

export default function Home() {
  return <Landing />;
}
