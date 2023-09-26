"use client";
import Card from "@/components/ui/Card";
import { useThemeContext } from "@/context/ThemeContext";
import { useEffect } from "react";
import { FaSadCry } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
  const { theme } = useThemeContext();
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Card>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="font-bold text-center text-3xl lg:text-4xl">
          Something went wrong!
        </h2>
        <FaSadCry className="text-4xl" />
      </div>
      <button
        className={`btn after:bg-${theme}-secondary-accent relative uppercase tracking-widest mt-4 font-bold pb-1`}
        onClick={() => reset()}
      >
        try again
      </button>
      <button
        className={`btn after:bg-${theme}-secondary-accent relative uppercase tracking-widest mt-4 font-bold pb-1`}
        onClick={() => router.back()}
      >
        go back
      </button>
    </Card>
  );
}
