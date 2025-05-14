import { Link } from "@tanstack/react-router";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { userQueryOptions } from "@/lib/api";
import { useState } from "react";
import { LogoutButton } from "./auth/logout-button";

export function SiteHeader(){

  const [isOpen, setIsOpen] = useState(false);
  const { data: user } = useQuery(userQueryOptions());

  return (
    <header className="sticky top-0 z-50 w-full border border-border backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">  
          <Link to="/" className="text-2xl font-medium">Better Auth</Link>
        </div>
        <div className="hidden items-center space-x-4 md:flex">
          {user ? (<>
            <span>{user.name}</span>
            <LogoutButton>Log out</LogoutButton>
          </>) : (
            <Button
              asChild 
              size="sm" 
              variant="secondary" 
              className="bg-secondary-foreground text-primary-foreground hover:bg-secondary-foreground/70"
            >
              <Link to="/login">Log in</Link>
            </Button>
          )}
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="secondary" size="icon" className="md:hidden">
              <MenuIcon className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                BetterNews
              </SheetTitle>
              <SheetDescription className="sr-only">
                Navigation
              </SheetDescription>
            </SheetHeader>
            <div className="p-4">
              <nav className="flex flex-col space-y-4">
                <Link to="/" search={{ sortBy: "recent", order: "desc" }} onClick={() => setIsOpen(false)} className="hover:underline">New</Link>
                <Link to="/" search={{ sortBy: "points", order: "desc" }} onClick={() => setIsOpen(false)} className="hover:underline">Top</Link>
                {user ? (<>
                  <span>User: {user.name}</span>
                    <LogoutButton>Log out</LogoutButton>
                </>) : (
                  <Button
                    asChild 
                    size="sm" 
                    variant="secondary" 
                    className="bg-secondary-foreground text-primary-foreground hover:bg-secondary-foreground/70"
                  >
                    <Link to="/login" onClick={() => setIsOpen(false)}>Log in</Link>
                  </Button>
                )}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}