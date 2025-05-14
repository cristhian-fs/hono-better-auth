import { authClient } from "@/lib/auth-client";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { userQueryOptions } from "@/lib/api";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const onClick = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: async () => {
          await queryClient.invalidateQueries(userQueryOptions());
          navigate({ to: "/login" });
        }
      }
    });
  };

  return (
    <Button size="sm" variant="secondary" className="bg-secondary-foreground text-primary-foreground hover:bg-secondary-foreground/70" onClick={onClick}>
      {children}
    </Button>
  );
};
