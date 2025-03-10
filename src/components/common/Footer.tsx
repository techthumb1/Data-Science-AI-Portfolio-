import Image from 'next/image';

export default function Footer() {
    return (
      <footer className="bg-primary text-white text-center py-1 mt-auto">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Jason Robinson. All rights reserved.</p>
          <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/icons/github.svg" width={24} height={24} alt="GitHub" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/icons/linkedin.svg" width={24} height={24} alt="LinkedIn" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/icons/twitter.svg" width={24} height={24} alt="Twitter" />
          </a>
        </div>
        </div>
      </footer>
    );
  }
  