import React from 'react';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import Pills from './Pills';
import type { BlogPost } from '@/lib/blogs';

interface IndividualBlogProps {
  blog: BlogPost;
}

export default function IndividualBlog({ blog }: IndividualBlogProps) {
  return (
    <>
      <div className="flex gap-2 items-center mt-6">
        <IoChatboxEllipsesOutline className="flex-none text-2xl" />
        <a
          href={`/blog-details?slug=${blog.slug}`}
          className="mt-2 mb-1 text-xl font-semibold hover:text-blue-900 hover:underline "
        >
          {blog.title}
        </a>
      </div>

      <div className="lg:ml-9">
        <div className="flex flex-wrap gap-2 -ml-1 mt-1 mb-3">
          {blog.tags.map((tag) => (
            <Pills
              key={tag}
              text={`# ${tag}`}
              cname="bg-gray-200 text-xs text-black py-1"
            />
          ))}
        </div>

        <p className="mb-2 text-xs text-blue-600 uppercase tracking-widest">
          {blog.date}
        </p>
        <p className="line-clamp-6 lg:line-clamp-3 mb-3 lg:mb-0">{blog.excerpt}</p>
      </div>
    </>
  );
}
