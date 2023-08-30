"use client";

import React from 'react'
import { useRouter } from 'next/navigation'

import { deleteArticle } from '@/blogAPI';

type DeleteButtonProps = {
  id: string;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteArticle(id);
    router.push('/');
    router.refresh();
  }

  return (
    <button className='bg-red-500 hover:bg-red-600 rounded-md py-2 px-5' onClick={handleDelete}>
      削除する
    </button>
  )
}

export default DeleteButton
