import type { Route } from "./+types/sign-up";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sign Up- Eventify" },
    {
      name: "description",
      content: "Create an account to get started with Eventify!",
    },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from loader");
    }, 10000);
  });
}

export default function SignUp() {
  return <div>Sign Up Page</div>;
}
