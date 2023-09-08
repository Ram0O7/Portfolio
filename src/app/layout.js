import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Ramkrishn Rai",
  description:
    "I'm a web developer passionate about making the web beautiful and accessible for everyone.",
};

const socials = [
  {
    name: "linkedIn",
    url: "https://www.linkedin.com/in/ramkrishn-rai-b06727230/",
    icon: <FaLinkedin />,
    style: "hover:text-blue-500",
  },
  {
    name: "github",
    url: "https://github.com/Ram0O7",
    icon: <FaGithub />,
    style: "hover:text-gray-700",
  },
  {
    name: "whatsapp",
    url: "https://wa.me/916387514709",
    icon: <FaWhatsapp />,
    style: "hover:text-green-600",
  },
  {
    name: "instagram",
    url: "https://instagram.com/ram20krishn?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D",
    icon: <FaInstagram />,
    style: "hover:text-pink-600",
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_condensed.className}>
        <ThemeProvider>
          <Navbar socials={socials} />
          {children}
          <Footer socials={socials} />
        </ThemeProvider>
      </body>
    </html>
  );
}
