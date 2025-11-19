export const joditConfig = {
  popup: {
    zIndex: 9000,
  },
  readonly: false,
  placeholder: "Start typing...",
  toolbarAdaptive: false, // keep toolbar always visible
  toolbarSticky: false,
  buttons: [
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "|",
    "ul",
    "ol",
    "|",
    "fontsize", // ✅ enable font size
    "paragraph",
    "brush",
    "font",
    "|",
    "link",
    "image",
    "table",
    "video",
    "|",
    "align",
    "undo",
    "redo",
  ],
  controls: {
    fontsize: {
      list: ["8", "10", "12", "14", "16", "18", "24", "32", "48", "72"], // ✅ font sizes
    },
    font: {
      list: {
        "": "Default",
        "Arial,Helvetica,sans-serif": "Arial",
        "Georgia,serif": "Georgia",
        "Impact,Charcoal,sans-serif": "Impact",
        "Tahoma,Geneva,sans-serif": "Tahoma",
        "Times New Roman,Times,serif": "Times New Roman",
        "Verdana,Geneva,sans-serif": "Verdana",
      },
    },
  },
  height: 500,
};
