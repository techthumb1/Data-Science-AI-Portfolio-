import "@/app/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children} {/* Removes duplicate Navbar/Footer */}
      </body>
    </html>
  );
}
