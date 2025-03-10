import BlogList from '@/components/blog/BlogList';

export default function BlogPage() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Blog</h1>
      <BlogList />
    </main>
  );
}
