import * as React from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { getUsers, userQueryOptions } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
 } from "@/components/ui/table";

import { format } from "date-fns"
import { Loader } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
  beforeLoad: async ({ context, location }) => {
    const user = await context.queryClient.ensureQueryData(userQueryOptions());
    if(!user){
      throw redirect({ to: "/login", search: { redirect: location.href }})
    }
  }
});

function HomeComponent() {

   const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
   });

  if(isLoading){
    return <Loader className="animate-spin size-6 text-muted-foreground"/>
  }

  return (
    <div className="p-2 w-full max-w-4xl mx-auto py-4">
      <h3>Users</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">User name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Creation date</TableHead>
            <TableHead className="text-right">Update date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users && users.data.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user?.name}</TableCell>
              <TableCell>{user?.email}</TableCell>
              <TableCell>{format(new Date(user?.createdAt), "yyyy-MM-dd")}</TableCell>
            <TableCell className="text-right">{format(new Date(user?.createdAt), "yyyy-MM-dd")}</TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
