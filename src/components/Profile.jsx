"use client";
import { signOut, useSession } from "next-auth/react";
import { syncBlogsOnDB } from "@/utils/syncBlogsOnDB";
import { useThemeContext } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";
import Card from "./ui/Card";
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
        <h1 className="text-3xl font-extrabold">{session.user.name}</h1>
        <h2 className="text-lg font-bold">{session.user.email}</h2>
        <div className="relative">
          <img
            src={`${session.user.image}`}
            alt="profile-image"
            className="w-14 h-14 rounded-full"
          />
        </div>
        <button
          className={`btn after:bg-${theme}-secondary-accent relative uppercase tracking-widest pb-1`}
          onClick={() => {
            signOut();
            router.back();
          }}
        >
          sign out
        </button>
        {session.user.email === "ram706860@gmail.com" &&
          session.user.name.toLowerCase() === "ramkrishn rai" && (
            <>
              <button
                className={`btn after:bg-${theme}-secondary-accent relative uppercase tracking-widest pb-1`}
                onClick={revalidateBlogs}
              >
                revalidate blogs
              </button>
              <button
                className={`btn after:bg-${theme}-secondary-accent relative uppercase tracking-widest pb-1`}
                onClick={syncBlogsOnDB}
              >
                sync blogs
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
