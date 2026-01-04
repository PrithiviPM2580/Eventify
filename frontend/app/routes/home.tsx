import type { Route } from "./+types/home";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <Button asChild>
      <Link to="sign-up">Go to Sign Up</Link>
    </Button>
  );
}
