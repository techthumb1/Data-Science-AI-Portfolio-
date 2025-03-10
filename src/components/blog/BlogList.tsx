import BlogCard from './BlogCard';
import blogPosts from "../../../data/blog-posts.json";

export default function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <BlogCard 
          key={post.slug}
          title={post.title}
          description={post.description}
          date={post.date}
          slug={post.slug}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}
