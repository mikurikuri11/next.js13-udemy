"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

import { createArticle } from '@/blogAPI';

const CreateBlogPage = () => {
  const router = useRouter();
  const [id, setId] = React.useState<string>('');
  const [title, setTitle] = React.useState<string>('');
  const [content, setContent] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    await createArticle(id, title, content);

    setLoading(false);
    router.push('/');
    router.refresh();
  }

  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
      <h2 className='text-2xl font-bold mb-4'>ブログ新規作成</h2>

      <form onSubmit={handleSubmit} className='bg-slate-200 p-6 rounded shadow-lg'>
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold mb-2'>URL</label>
          <input
            onChange={(e) => setId(e.target.value)}
            type='text'
            className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'></input>
        </div>
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold mb-2'>タイトル</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type='text'
            className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'></input>
        </div>
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold mb-2'>本文</label>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'></textarea>
        </div>

        <button
          type='submit'
          className={`py-2 px-4 rounded-md
            ${loading ? "bg-orange-300 cursor-not-allowed" :  "bg-orange-400 hover:bg-orange-500"}
          `}
          disabled={loading}
        >
          投稿
          </button>
      </form>
    </div>
  )
}

export default CreateBlogPage;
