import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

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
      <body className={raleway.className}>
        <main>
          <Navbar socials={socials} />
          {children}
          <Footer socials={socials} />
        </main>
      </body>
    </html>
  );
}
