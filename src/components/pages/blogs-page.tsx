import React from 'react'
import { BlogCard } from '../micro/blog-card'

export default function Blogs() {
  return (
    <div className='flex'>
      <BlogCard/>
      <BlogCard/>
    </div>
  )
}

