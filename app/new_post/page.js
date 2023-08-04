import TextEditor from "@/components/editor";

export default function Page() {
  return (
    <div className="flex flex-col w-full bg-main-bg p-12 gap-16 overflow-auto pr-48">
      <div className="rounded-lg p-8">
        <p className=" text-4xl font-bold">Create new Post</p>
        <form className="text-black">
          <div className=" mt-12 bg-white p-2 mb-4">
            <input
              type="text"
              placeholder="Title"
              className="font-bold text-2xl w-full border-0 focus:border-0 active:border-0 focus:ring-0 active:ring-0"
            />
          </div>
          <TextEditor />
          <div className="bg-white mt-4 p-4 flex gap-10 items-baseline">
            <label className="text-2xl font-bold">
              Choose Banner Image {"  "}
            </label>
            <input type="file" />
          </div>
          <button type="submit" className=" bg-sidebar-bg text-white p-3 mt-12 w-full text-xl font-extrabold hover:bg-white hover:text-black">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
