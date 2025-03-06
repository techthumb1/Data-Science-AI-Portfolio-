import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-[#2C3E50] text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-semibold">Jason Robinson</h1>
        <div className="hidden md:flex gap-6 text-lg">
          <Link href="/" className="hover:text-[#F8F9FA]">Home</Link>
          <Link href="/projects" className="hover:text-[#F8F9FA]">Projects</Link>
          <Link href="/blog" className="hover:text-[#F8F9FA]">Blog</Link>
          <Link href="/contact" className="hover:text-[#F8F9FA]">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
