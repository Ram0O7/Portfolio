"use client";
import { signOut, useSession } from "next-auth/react";
import { useThemeContext } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";
import Card from "./ui/Card";
import Image from "next/image";
// import { revalidatePath } from "next/cache";

const revalidateBlogs = () => {
  // revalidatePath("/blogs");
  // revalidatePath("/blogs/[slug]");
  console.log("revalidating...");
};

export default function Profile() {
  const { data: session, status } = useSession({ required: true });
  const { theme } = useThemeContext();
  const router = useRouter();

  if (status === "authenticated") {
    return (
      <Card>
        <div className="relative overflow-hidden rounded-full w-28 h-28">
          <Image
            src={session.user?.image}
            alt={session.user?.name}
            width={112}
            height={112}
            className="object-cover !m-0"
          />
        </div>
        <h1 className="text-3xl font-extrabold mb-6">
          {session?.user.name || "Lalit"}
        </h1>

        <button
          className={`btn after:bg-${theme}-secondary-accent relative uppercase tracking-widest pb-1`}
          onClick={() => {
            signOut();
            router.push("/");
          }}
        >
          sign out
        </button>
        {session?.user.email === "ram706860@gmail.com" &&
          session?.user.name.toLowerCase() === "ramkrishn rai" && (
            <>
              <button
                className={`btn after:bg-${theme}-secondary-accent relative uppercase tracking-widest pb-1`}
                onClick={revalidateBlogs}
              >
                revalidate blogs
              </button>
            </>
          )}
        <button
          className={`btn after:bg-${theme}-secondary-accent relative uppercase tracking-widest mt-4 font-bold pb-1`}
          onClick={() => router.back()}
        >
          go back
        </button>
      </Card>
    );
  }
  return (
    <Card>
      <h1 className="text-3xl text-center m-auto font-bold">
        signing you in...
      </h1>
    </Card>
  );
}
