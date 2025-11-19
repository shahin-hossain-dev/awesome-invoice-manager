import Swal from "sweetalert2";

export const showConfirmAlert = ({
  title = "Are you sure?",
  text = "",
  confirmText = "Yes, delete it!",
  onConfirm,
}) => {
  Swal.fire({
    title: title,
    text: text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmText,
  }).then((result) => {
    if (result.isConfirmed) {
      if (onConfirm) {
        const isConfirm = onConfirm();
        if (isConfirm) {
          Swal.fire({
            title: "Deleted!",
            // text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    }
  });
};
