"use client";
import dynamic from "next/dynamic";
import React, { useState, useRef, useMemo, useEffect } from "react";
// import JoditEditor from "jodit-react";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});

const TextEditor = ({ placeholder, label, required = false }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  // const [editorHeight, setEditorHeight] = useState(null);

  // const textEditor = document?.getElementById("text-editor");
  // useEffect(() => {
  //   if (textEditor) {
  //     setEditorHeight(textEditor?.offsetHeight);
  //   }
  // }, [textEditor]);

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "Start typings...",
      height: 250,
    }),
    [placeholder]
  );

  return (
    <div className={`relative  w-full h-[284px]`}>
      <div id="text-editor" className="absolute top-0 left-0 w-full">
        {label && (
          <p className="text-sm">
            {required && (
              <span className="text-[12px] me-2 text-red-500">*</span>
            )}
            {label}
          </p>
        )}
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1} // tabIndex of textarea
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          // onChange={(newContent) => {}}
        />
      </div>
    </div>
  );
};

export default TextEditor;
