import type { Env } from "hono";
import { auth } from "./auth";
import type { Enviroment } from "@/env";

export interface Context extends Env {
  Bindings: Enviroment,
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}
