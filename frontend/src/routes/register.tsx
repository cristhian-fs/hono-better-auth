import { createFileRoute } from "@tanstack/react-router";

import { RegisterForm } from "@/components/auth/register-form";

export const Route = createFileRoute("/register")({
  component: () => <SignUpPage />,
});

function SignUpPage() {
  return (
    <main className="bg-neutral-950 w-full min-h-screen flex items-center justify-center">
      <RegisterForm />
    </main>
  );
}
