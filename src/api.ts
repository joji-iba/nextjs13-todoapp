import { Task } from "./types";

// json-serverの全データを取得するAPI
export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch(`http://localhost:3001/tasks`, {
    cache: "no-store", //SSR(初回読込時が速い)
  });
  const todos = res.json(); // JSON形式で認識させる

  return todos;
};

// json-serverの特定のデータを追加するAPI
export const addTodo = async (todo: Task): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodos = res.json(); // JSON形式で認識させる

  return newTodos;
};
