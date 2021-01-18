import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

interface Todo {
  id: string;
  post: string;
}

let posts: Todo[] = [
  {
    id: "1",
    post: "First post!",
  },
  {
    id: "2",
    post: "Second post!",
  },
  {
    id: "3",
    post: "Third post!",
  },
];

router.get("/posts", (ctx) => {
  ctx.response.body = {
    posts: posts,
  };
});

export default router;
