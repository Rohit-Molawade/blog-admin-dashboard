"use client";

import React, { useRef } from "react";
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
const TextEditor = () => {
  const editorRef = useRef(null);

  const [textField, settextField] = useState("Your content goes here");

  const handleEditorChange = (content, editor) => {
    settextField({ ...textField, content });
  };

  console.log(textField);

  return (
    <>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
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
        value={textField.textField}
        onEditorChange={handleEditorChange}
      />
    </>
  );
};

export default TextEditor;
