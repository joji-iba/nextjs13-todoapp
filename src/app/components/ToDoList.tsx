import { Task } from '@/types';
import { useEffect } from 'react'
import { Todo } from './Todo';

interface TodoListProps {
  todos: Task[];
}

const ToDoList = ({todos}: TodoListProps) => {
  // CSRで一回だけ発火させる場合の書き方(初回読込がSSRより遅くなる)
  // useEffect(() => {
  //   const getAllTodos = async () => {
  //     await fetch("localhost:3001/tasks");
  //   };
  // }, [])

  return (
    <ul className="space-y-3">
      {/* 同じ要素が続く場合はmapを使う */}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default ToDoList
