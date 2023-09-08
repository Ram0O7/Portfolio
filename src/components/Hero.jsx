"use client";
import Button from "@/components/ui/Button";
import { useThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
const Hero = () => {
  const { theme } = useThemeContext();
  return (
    <div
      className={`hero flex flex-col-reverse items-center sm:items-start justify-between sm:flex-row gap-8 sm:gap-2 border-b border-${theme}-txt sm:pt-32 sm:pb-28 pb-12 pt-12`}
    >
      <div className="flex flex-col gap-6 sm:gap-12 justify-center sm:items-start items-center sm:text-left text-center">
        <div className="heading">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
            Nice to meet you!
            <br />
            I'm{" "}
            <span
              className={`underline underline-offset-4 decoration-${theme}-accent`}
            >
              Ramkrishn Rai
            </span>
            .
          </h1>
        </div>
        <div className="para text-base font-semibold sm:max-w-sm">
          <p className="tracking-wider">
            Based in Kolkata, India, I'm a web developer passionate about
            building accessible web apps that users love.
          </p>
        </div>
        <Button url="/#contact" text="contact me" />
      </div>
      <div
        className={`profile-img bg-${theme}-bg before:bg-gradient-to-t before:from-${theme}-accent before:to-${theme}-secondary-accent relative h-96 w-4/5 sm:w-56 md:w-64 lg:w-72 drop-shadow-md -z-1`}
      >
        <Image
          src="https://res.cloudinary.com/dn6bzdlno/image/upload/v1692613956/profile_qf2bmd.jpg"
          alt="profile-img"
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          placeholder="blur"
          blurDataURL="/images/backgroundEffect.jpg"
          className="profile-photo object-cover p-1 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
