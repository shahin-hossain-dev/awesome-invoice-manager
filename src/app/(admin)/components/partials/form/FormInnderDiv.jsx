const FormInnerDiv = ({ children, title }) => {
  return (
    <div className={` rounded-xl p-2 lg:!p-4`}>
      {title && (
        <h6 className="text-lg text-neutral-700 mb-2 lg:mb-4">{title}</h6>
      )}
      {children}
    </div>
  );
};

export default FormInnerDiv;
