import "./globals.css";

export const metadata = {
  title: "Narayan Phukan — MERN Stack Developer",
  description: "Full-stack MERN developer crafting scalable, production-ready web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden bg-paper text-ink dark:bg-darkPaper dark:text-darkInk transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}