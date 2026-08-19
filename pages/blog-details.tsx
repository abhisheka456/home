import Head from 'next/head';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { blogPosts } from '@/lib/blogs';

export default function BlogDetails() {
  const router = useRouter();
  const { slug } = router.query;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Head>
          <title>Blog Details :: Abhishek Kumar</title>
        </Head>
        <Layout border="border-2">
          <div className="items-center px-2 lg:px-6 prose lg:prose-lg mx-auto py-4 dark:prose-dark">
            <h1>Loading…</h1>
            <Link href="/blogs">← Back to blogs</Link>
          </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} :: Abhishek Kumar</title>
      </Head>
      <Layout border="border-2">
        <div className="items-center px-2 lg:px-6 prose lg:prose-lg mx-auto py-4 dark:prose-dark">
          <Link href="/blogs">← Back to blogs</Link>
          <h1>{post.title}</h1>
          <h3>{post.subtitle}</h3>
          <p className="not-prose text-xs text-gray-500 uppercase tracking-widest">
            {post.paper.venue} · {post.paper.year}
          </p>
          {post.content.map((section, i) => (
            <div key={i}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.body.map((para, j) => (
                <p key={j}>{para}</p>
              ))}
            </div>
          ))}
          <p className="not-prose text-sm mt-6">
            <span className="font-semibold">Paper:</span>{' '}
            {post.paper.title}
            <br />
            <span className="font-semibold">Authors:</span> {post.paper.authors}
            {post.paper.doi && (
              <>
                <br />
                <a
                  href={`https://doi.org/${post.paper.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read the paper ↗
                </a>
              </>
            )}
          </p>
        </div>
      </Layout>
    </>
  );
}
