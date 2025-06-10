import "./globals.css";
import MouseFollower from "./components/MouseFollower";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });
// Import the new component

export const metadata = {
  title: "Sunil Gopal C V | Software Engineer",
  description:
    "Portfolio of Sunil Gopal C V, a software engineer specializing in full-stack development, AI, and machine learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <MouseFollower />
        <div className="relative z-10"> {children}</div>
      </body>
    </html>
  );
}
