import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/Landing.tsx"),
    route("projects", "routes/Projects.tsx"),
    //route("totdistribution", "routes/TOTDistribution.tsx"),
] satisfies RouteConfig;
