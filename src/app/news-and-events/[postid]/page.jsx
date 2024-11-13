import PostDetail from "@/components/PostDetail";
import { newsAndEvents } from "@/data/news-and-events";

export async function generateMetadata({ params }) {
  const { postid } = params;
  const post = newsAndEvents.find((p) => p.id.toString() === postid);

  if (!post) {
    return {
      title: "Product not found - My Store",
      description: "This product could not be found.",
    };
  }

  return {
    title: `${post.title} | AI Durian | International Durian Association`,
    description: `${post.title} | AI Durian | International Durian Association`,
    openGraph: {
      title: `${post.title} | AI Durian | International Durian Association`,
      description: `${post.title} | AI Durian | International Durian Association`,
      images: [
        {
          url: post.thumbnail,
          alt: post.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return newsAndEvents.map((post) => ({
    postid: post.id.toString(),
  }));
}

export default function ProductPage({ params }) {
  const { postid } = params;
  const post = newsAndEvents.find((p) => p.id.toString() === postid);

  // if (!product) {
  //   return notFound(); // Return 404 if product is not found
  // }

  return (
    <>
      <PostDetail post={post} />
    </>
  );
}
