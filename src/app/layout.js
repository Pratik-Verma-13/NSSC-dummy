import "./globals.css";

export const metadata = {
  title: "NSSC | 2025",
  description: "Asia's Largest Astro-Tech Fest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
