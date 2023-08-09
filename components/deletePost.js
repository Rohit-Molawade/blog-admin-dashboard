"use client";

import delete_post from "@/utils/delpost";
import { useSession } from "next-auth/react";

export default function DeletePost(postId) {
    //Get session data 
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
        className="bg-red-600 text-white p-2 px-6 rounded-md"
        onClick={() => {
          delete_post(postId.postid, token);
        }}
      >
        DELETE
      </button>
    </div>
  );
}
