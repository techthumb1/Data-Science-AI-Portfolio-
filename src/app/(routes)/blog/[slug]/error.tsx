'use client';

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <main className="container mx-auto text-center py-12">
      <h1 className="text-3xl font-bold text-red-600">Error Loading Blog</h1>
      <p className="text-gray-700 mt-4">{error.message || "Something went wrong."}</p>
    </main>
  );
}
