import { Task } from '@/types'

interface TodoProps {
  todo: Task;
}

export const Todo = ({ todo }: TodoProps) => {
  return (
    <li key={todo.id} className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
      <span className="text-gray-700">{todo.text}</span>
      <button className="text-red-500 hover:text-red-700">✖</button>
    </li>
  )
}
