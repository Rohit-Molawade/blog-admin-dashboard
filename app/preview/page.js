"use client";

import Image from "next/image";
import { sanitize } from "isomorphic-dompurify";
import { useSearchParams } from "next/navigation";

export default function Preview() {
  const searchParams = useSearchParams();
  return (
    <>
      <div className="flex flex-col items-center px-20 pt-20 h-full w-full overflow-y-auto">
        <div className="max-w-3xl w-1/2">
          <div className="flex justify-center">
            <Image
              src={searchParams.get("banner_image")}
              alt={`Banner Iamge for ${searchParams.get("title")}`}
              height={400}
              width={700}
              className="border-2 p-4"
            ></Image>
          </div>
          <div className="py-8">
            <p className="text-5xl font-ibm_plex">
              {searchParams.get("title") === ""
                ? "No title Provided"
                : searchParams.get("title") === ""}
            </p>
          </div>
          <div className="my-12">
            <div
              dangerouslySetInnerHTML={{
                __html: sanitize(
                  searchParams.get("content") === ""
                    ? "No content Provided"
                    : searchParams.get("content")
                ),
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
