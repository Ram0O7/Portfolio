"use client";
import React, { useRef, useState } from "react";
import Button from "@/components/ui/Button";
import projects from "@/utils/projects";
import referToComponent from "@/utils/refer";
import Image from "next/image";
import { useThemeContext } from "@/context/ThemeContext";

const Project = () => {
  const { theme } = useThemeContext();
  const [load, setLoad] = useState(4);
  const [loadingStatus, setLoadingStatus] = useState("more");
  const projectLoadRef = useRef(null);

  const handleLoading = () => {
    setLoad((prev) => prev + 4);
    if (load >= projects.length - 4) setLoadingStatus("less");
    if (loadingStatus === "less") {
      setLoadingStatus("more");
      setLoad(4);
    }
    loadingStatus === "more"
      ? referToComponent("#latest_project", "start")
      : referToComponent("#project_container", "start");
  };

  return (
    <div id="project_container" className="py-8 lg:py-16">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal sm:font-semibold">
          Projects
        </h1>
        <Button url="/#contact" text="contact me" />
      </div>
      <div className="projects uppercase py-8 lg:py-16 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-x-8 sm:gap-y-16">
        {projects.map((project, index) => {
          const { name, img, tags, repo, website } = project;
          return (
            index < load && (
              <div
                className="project flex flex-col gap-2"
                key={Date.now() * Math.random()}
              >
                <div className="project_img relative group w-full h-64 sm:h-80">
                  <div
                    className={`hidden group-hover:lg:flex flex-col justify-center items-center gap-8 absolute top-0 left-0 w-full h-full bg-${theme}-bg opacity-90 text-lg z-20`}
                  >
                    <Button text={"view project"} url={website} />
                    <Button text={"view code"} url={repo} />
                  </div>
                  <Image
                    className="object-cover"
                    src={img}
                    quality={60}
                    placeholder="blur"
                    blurDataURL="/images/backgroundEffect.jpg"
                    alt={name}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h1 className="text-xl lg:text-2xl font-semibold">{name}</h1>
                <div className="tags flex gap-2">
                  {tags.map((tag) => (
                    <h2
                      className="text-sm text-text-primary font-normal"
                      key={Date.now() * Math.random()}
                    >
                      {tag}
                    </h2>
                  ))}
                </div>
                <div className="lg:hidden flex gap-4 mt-2">
                  <Button text={"view project"} url={website} />
                  <Button text={"view code"} url={repo} />
                </div>
              </div>
            )
          );
        })}
      </div>
      <div
        className="dropdown flex justify-center lg:justify-start"
        id="latest_project"
        ref={projectLoadRef}
      >
        <button
          className={`btn after:bg-${theme}-secondary-accent relative uppercase tracking-widest pb-1`}
          onClick={handleLoading}
        >{`show ${loadingStatus}...`}</button>
      </div>
    </div>
  );
};

export default React.memo(Project);
