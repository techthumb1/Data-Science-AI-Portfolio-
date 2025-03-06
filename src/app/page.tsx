import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#ECEFF4] text-[#333333]">
      {/* Header */}
      <header className="w-full bg-[#2C3E50] text-white py-5 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-semibold">Your Name</h1>
          <nav className="hidden md:flex gap-6 text-lg">
            <Link href="/projects" className="hover:text-[#F8F9FA]">Projects</Link>
            <Link href="/blog" className="hover:text-[#F8F9FA]">Blog</Link>
            <Link href="/contact" className="hover:text-[#F8F9FA]">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold text-[#2C3E50] leading-tight">
          Showcasing Data Science, AI, & Analytics Excellence
        </h2>
        <p className="text-lg text-[#333333] mt-4 max-w-2xl mx-auto">
          Elevating insights through cutting-edge machine learning and analytics.
          Explore innovative projects that push boundaries.
        </p>
        <div className="mt-6">
          <Link href="/projects">
            <button className="bg-[#1C2833] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#2C3E50] transition">
              View Projects
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-semibold text-[#2C3E50] text-center">Featured Projects</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <Image src="/assets/images/medical-ai.jpg" width={400} height={250} className="rounded-lg" alt="Project Image"/>
              <h4 className="text-xl font-semibold mt-4">Medical AI Diagnostic Tool</h4>
              <p className="text-sm text-gray-700 mt-2">
                An AI model identifying medical anomalies with precision.
              </p>
              <Link href="/projects/medical-ai-diagnostic" className="text-[#1C2833] font-medium mt-4 block">
                Learn More →
              </Link>
            </div>
            {/* Add more project cards dynamically */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#2C3E50] text-white py-6 mt-12">
        <div className="container mx-auto text-center text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
