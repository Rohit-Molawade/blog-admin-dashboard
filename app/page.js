import User from "@/components/User";
import SidebarLinks from "@/components/sidebar_links";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between overflow-y-auto">
      <div className="flex flex-sidebar flex-col pt-6 bg-sidebar-bg text-white rounded-r-md">
        <div className="w-full pl-6">
          <p className=" font-bold text-4xl">The Blog</p>
        </div>
        <div className="w-full pt-12 pr-4">
          <User />
        </div>
        <div className="w-full py-16 pl-6">
          <SidebarLinks />
        </div>
      </div>
      <div className=" flex flex-col w-full bg-main-bg p-12 gap-16">
        <div className="bg-white rounded-lg p-8">
          <p className=" text-2xl font-bold">Unpublished Posts</p>
        </div>
        <div className="bg-white rounded-lg p-8">
          <p className=" text-2xl font-bold">Published Posts</p>
        </div>
      </div>
    </main>
  );
}
