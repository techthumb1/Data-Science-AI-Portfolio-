export default function Sidebar() {
    return (
      <aside className="w-64 bg-secondary text-white p-4 hidden lg:block">
        <ul className="space-y-2">
          <li><a href="/projects" className="hover:text-accent">Projects</a></li>
          <li><a href="/blog" className="hover:text-accent">Blog</a></li>
          <li><a href="/contact" className="hover:text-accent">Contact</a></li>
        </ul>
      </aside>
    );
  }
  