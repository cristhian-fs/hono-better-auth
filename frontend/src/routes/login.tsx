import { createFileRoute, redirect } from "@tanstack/react-router";

import { LoginForm } from "@/components/auth/login-form";
import { userQueryOptions } from "@/lib/api";

export const Route = createFileRoute("/login")({
  component: () => <LoginPage />,
  beforeLoad: async ({ context }) => {
    const user = await context.queryClient.ensureQueryData(userQueryOptions());
    if(user){
      throw redirect({ to: "/" });
    }
  }
});

function LoginPage() {
  return (
    <main className="bg-neutral-950 w-full min-h-screen flex items-center justify-center">
      <LoginForm />
    </main>
  );
}
