import Image from 'next/image'
import AddTask from './components/AddTask'
import ToDoList from './components/ToDoList'
import { getAllTodos } from '@/api'

export default async function Home() {
  // json-serverの全データを取得するAPIを呼び出す
  const todos = await getAllTodos();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-700 -mt-32">
        Next.js-13 ToDo App
      </h1>
      <div className="w-full max-w-xl items-center justify-center mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          {/* タスクを追加するコンポーネント */}
          <AddTask />
          {/* タスク一覧を表示するコンポーネント */}
          <ToDoList todos={todos} />
        </div>
      </div>
    </main>
  )
}
