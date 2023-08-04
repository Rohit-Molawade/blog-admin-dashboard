import Link from "next/link";
import Image from "next/image";
import { publishedPost } from "@/utils/getpost";

export default async function Posts({ publish }) {
  const posts = await publishedPost(publish);
  return (
    <div className="flex flex-col pl-0 p-8">
      {posts.posts.map((post) => {
        console.log(post);
        return (
          <>
            <div className=" border-2 border-sidebar-bg rounded-lg my-8">
              <div className="flex bg-sidebar-bg text-white p-3 overflow-ellipsis justify-between">
                <span className=" text-xl font-bold">{post.title}</span>
                <span>Pos</span>
              </div>
              <div className="p-3 flex justify-evenly gap-28 items-center">
                <div>
                  <span>
                    <em>Created At: </em>
                  </span>
                  <span className=" font-medium">{post.date}</span>
                </div>
                <div>
                  <span>
                    <em>Last edited At: </em>
                  </span>
                  <span className=" font-medium">{post.published_time}</span>
                </div>
                <div className="">
                  <Link href={`/edit_post/${post.id}`}>
                    <button className="bg-sidebar-bg text-white p-2 px-6 rounded-md">EDIT</button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
