import BlogList from '@/components/BlogsList'
import React from 'react'

export const metadata = {
  title: "Blog | Portfolio",
  description: "My Personal Blog",
};

function BlogPage() {
  return (
    <BlogList />
  )
}

export default BlogPage