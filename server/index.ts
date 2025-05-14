import createApp from "./lib/create-app";
import { userRouter } from "./routes/users";

const app = createApp();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app.basePath("/api")
  .route('/users', userRouter);

export type ApiRoutes = typeof routes;

export default app;
