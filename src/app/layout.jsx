import Navbar from "@/Components/Navbar";
import "./globals.scss";

export const metadata = {
  title: "PixelCore - A web development enterprise",
  metadataBase: "http://localhost:3000",
  openGraph: {
    title: "PixelCore",
    description:
      "Explore cutting-edge web development solutions with PixelCore, a leading SaaS and web development enterprise.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
