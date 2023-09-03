import referToComponent from "@/utils/refer";
import Button from "@/UI/Button/Button";

const Hero = () => {
  return (
    <div className="hero flex flex-col gap-6 sm:gap-12 justify-center sm:items-start items-center sm:text-left text-center sm:pt-32 sm:pb-28 pb-12 pt-12 border-b border-text-primary">
      <div className="heading">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
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
          Based in Kolkata, India, I'm a web developer passionate about building
          accessible web apps that users love.
        </p>
      </div>
      <Button url="/#contact" text="contact me" />
    </div>
  );
};

export default Hero;
