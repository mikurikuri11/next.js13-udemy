import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='py-5 px-10 border-b flex justify-between items-center'>
      <div>
        <h1 className='text-2xl font-extrabold'>
          <Link href="/">Next.js13 blog</Link>
        </h1>
      </div>
      <div>
        <nav>
          <Link href="/articles/new" className='bg-orange-400 px-3 py-3 rounded-md'>記事を書く</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
