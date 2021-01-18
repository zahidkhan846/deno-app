import { Application } from "https://deno.land/x/oak/mod.ts";
import pRoutes from "./routes/posts.ts";

const app = new Application();

app.use((ctx, next) => {
  ctx.response.body = "Hello World!!!";
  next();
});

app.use(pRoutes.routes());
app.use(pRoutes.allowedMethods());

await app.listen({ port: 8000 });
