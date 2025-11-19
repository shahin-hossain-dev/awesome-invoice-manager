const Icon = ({
  icon: IconComponent,
  className = "",
  size = "1rem",
  ...props
}) => {
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} {...props} />;
};

export default Icon;
