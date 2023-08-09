"use client";

import publish_post from "@/utils/publishpost";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function PublishPost({ postId, publish }) {
  const router = useRouter();
  
  //Get session Data
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      console.log("unauthenticated");
    },
  });

  if (status === "loading") {
    return "Loading";
  }

  //JWT Token
  const token = session.user.token;

  return (
    <div>
      <button
        type="submit"
        className=" bg-slate-700 text-white p-2 px-6 rounded-md"
        onClick={(e) => {
          e.preventDefault();
          publish_post(postId, token, publish);
          router.refresh();
        }}
      >
        {publish ? "UNPUBLISH" : "PUBLISH"}
      </button>
    </div>
  );
}
