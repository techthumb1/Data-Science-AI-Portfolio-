export default function Header() {
    return (
      <header className="bg-primary text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Jason Robinson</h1>
          <nav className="flex space-x-4">
            <a href="/projects" className="hover:text-secondary">Projects</a>
            <a href="/blog" className="hover:text-secondary">Blog</a>
            <a href="/contact" className="hover:text-secondary">Contact</a>
          </nav>
        </div>
      </header>
    );
  }
  