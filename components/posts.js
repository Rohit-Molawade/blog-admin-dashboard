import Link from "next/link";
import Image from "next/image";
import { publishedPost } from "@/utils/getpost";
import { toast } from "react-toastify";

export default async function Posts({ publish }) {
  try {
    const posts = await publishedPost(publish);
    if (!posts) {
      console.log("error");
    }

    return (
      <div className="flex flex-col pl-0 p-8">
        {posts.posts.map((post) => {
          return (
            <>
              <div className="border-2 border-sidebar-bg rounded-lg my-8 min-w-fit">
                <div className="flex bg-sidebar-bg text-white p-3 overflow-ellipsis justify-between">
                  <p className=" text-xl font-bold">{post.title}</p>
                  <p>Pos</p>
                </div>
                <div className="p-3 flex flex-wrap gap-28 items-center justify-evenly">
                  <div>
                    <p>
                      <em>Created At: </em>
                    </p>
                    <p className=" font-medium">{post.date}</p>
                  </div>
                  <div>
                    <p>
                      <em>Last edited At: </em>
                    </p>
                    <p className=" font-medium">{post.published_time}</p>
                  </div>
                  <div className="">
                    <Link href={`/edit_post/${post.id}`}>
                      <button className="bg-sidebar-bg text-white p-2 px-6 rounded-md">
                        EDIT
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  } catch (error) {
    console.log('error')
    return;
  }
}
