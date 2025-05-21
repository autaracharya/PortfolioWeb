import { getPosts, getPostBySlug } from "../../lib/posts";
import ReactMarkdown from "react-markdown";

export async function getStaticPaths() {
  const posts = getPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  return {
    props: {
      post,
    },
  };
}

export default function BlogPost({ post }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <article className="prose lg:prose-xl dark:prose-invert">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
}
