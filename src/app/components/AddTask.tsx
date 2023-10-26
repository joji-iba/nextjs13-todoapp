"use client";

import { addTodo } from '@/api'
import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'; // ランダムなidを生成する

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState('')

  // タスク追加処理
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault() // ページ遷移を防ぐ
    await addTodo({ id: uuidv4(), text: taskTitle }) // タスクを追加
    setTaskTitle('') // 入力欄を空にする
  }

  return (
    <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value)}
        value={taskTitle}
        placeholder="New task..."
      />
      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform transition-transform duration-200 hover:bg-blue-400 hover:scale-95">
        Add task
      </button>
    </form>
  )
}

export default AddTask
