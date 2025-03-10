import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  slug: string;
  imageUrl?: string;
}

export default function BlogCard({ title, description, date, slug, imageUrl }: BlogCardProps) {
  return (
    <div className="bg-[#2C3E50] p-6 rounded-lg shadow-md text-[#ECEFF4]">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover rounded-lg"
        />
      ) : (
        <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center">
          <span className="text-gray-300">No Image Available</span>
        </div>
      )}
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <p className="text-gray-400 text-sm">{date}</p>
      <p className="text-gray-300 mt-2">{description}</p>
      <Link href={`/blog/${slug}`} className="text-blue-400 hover:underline mt-4 inline-block">
        Read More →
      </Link>
    </div>
  );
}
