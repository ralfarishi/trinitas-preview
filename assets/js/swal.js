document.getElementById("btn-contact").addEventListener("click", function () {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Sorry you can not use this feature yet",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
});
