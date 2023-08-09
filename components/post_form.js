"use client";

import TextEditor from "@/components/editor";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";

export default function Form({ formData, edit }) {
  //Router hook to redirect users
  const router = useRouter();

  //State to maintain form elements
  const [formContent, setFormContent] = useState({
    title: formData ? formData.title : "",
    banner_image: { image: "", preview_src: "" },
    content: formData ? formData.v_content : "",
  });

  const fileInput = useRef(null);

  //Get token from user session
  const { data: session, status } = useSession();

  if (status === "loading") {
    return "Loading";
  }

  const token = session.user.token;

  //Toast notifications
  const FormSuccess = () => {
    toast.success("Successfully Done");
  };

  const FormAuthError = () => {
    toast.error("User not Authorized. Please Authenticate");
  };

  const FormError = (error = null) => {
    if (error) {
      toast.error(error);
      return;
    } else {
      toast.error("Something unknown error occured");
    }
  };

  const handleTitleChange = (e) => {
    e.preventDefault();
    setFormContent((prevFormContent) => ({
      ...prevFormContent,
      title: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    setFormContent((prevFormContent) => ({
      ...prevFormContent,
      banner_image: {
        image: fileInput.current.files[0],
        preview_src: URL.createObjectURL(fileInput.current.files[0]),
      },
    }));
  };

  const handleEditorChange = (editor_content) => {
    setFormContent((prevFormContent) => ({
      ...prevFormContent,
      content: editor_content,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fetchOption = {};

    //Create new formdata to send image files with other fields
    const formData_send = new FormData();

    formData_send.append("title", formContent.title);
    formData_send.append("content", formContent.content);
    formData_send.append("banner_image", formContent.banner_image.image);

    if (edit) {
      fetchOption.method = "PUT";
      fetchOption.url = `http://localhost:3001/api/posts/${formData._id}`;
    } else {
      fetchOption.method = "POST";
      fetchOption.url = `http://localhost:3001/api/posts/`;
    }

    try {
      const res = await fetch(fetchOption.url, {
        method: fetchOption.method,
        body: formData_send,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401) {
        FormAuthError();
        return;
      }

      if (!res.ok) {
        const error = await res.json();
        FormError(error);
        return;
      }

      FormSuccess();
      router.push("/");
    } catch (error) {
      FormError(error);
      return;
    }
  };
  return (
    <form className="text-black">
      <div className=" mt-12 bg-white p-2 mb-4">
        <input
          name="title"
          type="text"
          placeholder="Title"
          className="font-bold text-2xl w-full border-0 focus:border-0 active:border-0 focus:ring-0 active:ring-0"
          value={formContent.title}
          onChange={handleTitleChange}
          required
        />
      </div>
      <TextEditor
        handleChange={handleEditorChange}
        editorData={formData ? formData.v_content : "Your content Goes here"}
      />
      <div className="bg-white mt-4 p-4 flex gap-10 items-baseline">
        <label className="text-2xl font-bold">Choose Banner Image {"  "}</label>
        <input
          type="file"
          onChange={handleFileChange}
          name="banner_image"
          ref={fileInput}
          required
          accept=".jpg, .png, .jpeg"
        />
      </div>

      <div className=" w-full">
        <Link
          href={{
            pathname: `/preview`,
            query: {
              title: formContent.title,
              content: formContent.content,
              banner_image: formContent.banner_image.preview_src,
            },
          }}
          target="__blank"
        >
          <p className=" w-full bg-white p-3 mt-12 text-xl font-extrabold text-center">
            Preview
          </p>
        </Link>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className=" bg-sidebar-bg text-white p-3 mt-12 w-full text-xl font-extrabold hover:bg-white hover:text-black"
      >
        Submit
      </button>
    </form>
  );
}
