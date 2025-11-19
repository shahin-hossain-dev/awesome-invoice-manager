import { Drawer as AntDrawer } from "antd";
const Drawer = ({
  width = "80%",
  title,
  children,
  open,
  onClose,
  placement = "right",
  ...props
}) => {
  return (
    <>
      <AntDrawer
        width={width}
        title={title}
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
        placement={placement}
        {...props}
      >
        {children}
      </AntDrawer>
    </>
  );
};
export default Drawer;
