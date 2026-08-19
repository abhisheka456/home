import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import IndividualBlog from '@/components/IndividualBlog';
import { blogPosts } from '@/lib/blogs';

export default function blogs() {
  return (
    <>
      <Head>
        <title>Blogs :: Abhishek Kumar</title>
      </Head>
      <Layout border="border-2">
        <h1 className="text-2xl font-bold mb-2">Blogs</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Research stories behind some of my selected publications.
        </p>
        <div className="flex flex-col mt-3 lg:mt-2 px-2 lg:px-6 border-b-2 border-dashed md:border-none">
          {blogPosts.map((blog) => (
            <IndividualBlog key={blog.slug} blog={blog} />
          ))}
        </div>
      </Layout>
    </>
  );
}
