import Form from "@/components/post_form";

export default function Page() {
  return (
    <div className="flex flex-col w-full bg-main-bg p-12 gap-16 overflow-auto pr-48">
      <div className="rounded-lg p-8">
        <p className=" text-4xl font-bold">Create new Post</p>
        <Form edit={false} />
      </div>
    </div>
  );
}
