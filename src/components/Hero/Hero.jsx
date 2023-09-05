import Button from "@/UI/Button/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero flex flex-col-reverse items-center sm:items-start justify-between sm:flex-row gap-8 sm:gap-2 border-b border-text-primary sm:pt-32 sm:pb-28 pb-12 pt-12">
      <div className="flex flex-col gap-6 sm:gap-12 justify-center sm:items-start items-center sm:text-left text-center">
        <div className="heading">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
            Nice to meet you!
            <br />
            I'm{" "}
            <span className="underline underline-offset-4 decoration-bg-primary">
              Ramkrishn Rai
            </span>
            .
          </h1>
        </div>
        <div className="para text-base font-bold sm:max-w-sm">
          <p className="tracking-wider">
            Based in Kolkata, India, I'm a web developer passionate about
            building accessible web apps that users love.
          </p>
        </div>
        <Button url="/#contact" text="contact me" />
      </div>
      <div className="profile-img relative h-96 w-4/5 sm:w-56 md:w-64 lg:w-72">
        <Image
          src="https://res.cloudinary.com/dn6bzdlno/image/upload/v1692613956/profile_qf2bmd.jpg"
          alt="profile-img"
          fill={true}
          quality={100}
          placeholder="blur"
          blurDataURL="/images/backgroundEffect.jpg"
          className="object-cover p-1 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;