import React from "react";

const FormDiv = ({ children, title, className, props, ref = null }) => {
  return (
    <div
      ref={ref}
      className={`shadow bg-white rounded-xl p-4 lg:!p-6 ${className}`}
      {...props}
    >
      {title && (
        <h6 className="text-lg text-neutral-700 mb-2 lg:mb-4">{title}</h6>
      )}
      {children}
    </div>
  );
};

export default FormDiv;
