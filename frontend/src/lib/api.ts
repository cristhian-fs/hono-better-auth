import { queryOptions } from "@tanstack/react-query";
import { authClient } from "./auth-client";
import { hc, InferResponseType } from "hono/client";
import type { ApiRoutes, ErrorResponse } from "@/shared/types";

const client = hc<ApiRoutes>("/", {
  fetch: (input: RequestInfo | URL, init?: RequestInit) => fetch(input, {
    ...init,
    credentials: "include",
  })
}).api;


export const getSession = async () => {
  const res = await authClient.getSession();
  if(res.data?.session) {
    return res.data.session;
  }

  return null;
}

export const getUser = async () => {
  const res = await authClient.getSession();
  if(res.data?.user) {
    return res.data.user;
  }

  return null;
}

export const userQueryOptions = () => queryOptions({
  queryKey: ["user"],
  queryFn: getUser,
  staleTime: Infinity
});

export type GetUsersResponse = InferResponseType<typeof client.users.$get>;
export const getUsers = async () => {
  const res = await client.users.$get();

  if(!res.ok){
    const data = (await res.json()) as unknown as ErrorResponse;
    throw new Error(data.error);
  }
  const data = (await res.json());
  return data;
}