import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ovo",
});

export const metadata = {
  title: "Narayan Phukan | MERN Stack Developer",
  description: "Full-stack MERN developer building modern, scalable and production-ready web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${ovo.variable} scroll-smooth`}
    >
      <body className="font-outfit antialiased leading-8 overflow-x-hidden transition-colors duration-300 dark:bg-darkTheme dark:text-white">
        {children}
      </body>
    </html>
  );
}