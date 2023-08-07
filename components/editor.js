import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
require("dotenv").config();

const TextEditor = ({ handleChange, editorData }) => {
  const editorRef = useRef(null);

  return (
    <>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={editorData}
        init={{
          height: 500,
          menubar: true,
          plugins:
            "advlist autolink lists link image charmap preview anchor " +
            "searchreplace visualblocks code fullscreen " +
            "insertdatetime media table code help wordcount",
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onEditorChange={handleChange}
      />
    </>
  );
};

export default TextEditor;
