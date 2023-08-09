import Link from "next/link";
import { publishedPost } from "@/utils/getpost";
import DeletePost from "./deletePost";
import PublishPost from "./publishPost";

export default async function Posts({ publish }) {
  try {
    let posts = await publishedPost(publish);

    if (!posts) {
        //Add toast Message
      console.log("error");
    }

    return (
      <div className="flex flex-col pl-0 p-8">
        {posts.posts.map((post) => {
          return (
            <>
              <div
                className="border-2 border-sidebar-bg rounded-lg my-8 min-w-fit"
                key={post.id}
              >
                <div className="flex bg-sidebar-bg text-white p-3 overflow-ellipsis justify-between">
                  <p className=" text-xl font-bold">{post.title}</p>
                  <PublishPost postId={post.id} publish={publish} />
                </div>
                <div className="p-3 flex flex-wrap gap-28 items-center justify-center">
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
                  <div>
                    <Link href={`/edit_post/${post.id}`}>
                      <button className="bg-sidebar-bg text-white p-2 px-6 rounded-md">
                        EDIT
                      </button>
                    </Link>
                  </div>
                  <DeletePost postid={post.id} />
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  } catch (error) {
    console.log("error");
    return error;
  }
}
