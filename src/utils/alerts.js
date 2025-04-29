import Swal from "sweetalert2"

export const errorAlert = (message) => {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: message,
    confirmButtonText: "Aceptar",
  })
}

export const successAlert = (message) => {
  Swal.fire({
    icon: "success",
    title: "Éxito",
    text: message,
    confirmButtonText: "Aceptar",
  })
}
