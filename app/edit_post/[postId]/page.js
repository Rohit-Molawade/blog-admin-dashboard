import Form from "@/components/post_form";
import { post } from "@/utils/getpost";

export default async function Page({ params }) {
  const formData = await post(params.postId);

  return (
    <div className="flex flex-col w-full bg-main-bg p-12 gap-16 overflow-auto pr-48">
      <div className="rounded-lg p-8">
        <p className=" text-4xl font-bold">Edit Post</p>
        <Form formData={formData.post} edit={true} />
      </div>
    </div>
  );
}
