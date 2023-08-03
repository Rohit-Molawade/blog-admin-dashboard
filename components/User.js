"use client";

import Image from "next/image";

import { useSession } from "next-auth/react";

export default function User() {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      console.log("unauthenticated");
    },
  });

  if (status === "loading") {
    return "Loading";
  }

  return (
    <div className="flex gap-4 flex-col items-center">
      <Image
        src={session.user.v_profile_picture_url}
        alt="User Profile Picture"
        width={100}
        height={40}
      />
      <h1 className=" text-lg">{session.user.name}</h1>
    </ div>
  );
}
