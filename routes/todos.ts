import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

interface Todo {
  id: string;
  text: string;
}

let todos: Todo[] = [];

router.get("/todos", (ctx) => {
  ctx.response.body = { todos: todos };
});

router.post("/todos", async (ctx) => {
  const { value } = ctx.request.body({ type: "json" });
  const { text } = await value;

  const newTodo: Todo = {
    id: Math.random().toString(),
    text: text,
  };

  todos.push(newTodo);

  ctx.response.body = { message: "Created todo!", todo: newTodo };
});

router.post("/todos/:todoId", async (ctx) => {
  const tid = ctx.params.todoId;
  const { value } = ctx.request.body({ type: "json" });
  const { text } = await value;
  const todoIndex = todos.findIndex((todo) => {
    return todo.id === tid;
  });
  todos[todoIndex] = { id: todos[todoIndex].id, text: text };
  ctx.response.body = { message: "Updated todo" };
});

router.delete("/todos/:todoId", (ctx) => {
  const tid = ctx.params.todoId;
  todos = todos.filter((todo) => todo.id !== tid);
  ctx.response.body = { message: "Deleted todo" };
});

export default router;
