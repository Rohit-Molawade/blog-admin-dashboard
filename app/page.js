import Posts from "@/components/posts";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-main-bg p-12 gap-16 overflow-auto">
      <div className="bg-white rounded-lg p-8">
        <p className=" text-2xl font-bold">Unpublished Posts</p>
        <Posts publish={false} />
      </div>
      <div className="bg-white rounded-lg p-8">
        <p className=" text-2xl font-bold">Published Posts</p>
        <Posts publish={true} />
      </div>
    </div>
  );
}
