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

$("#myDiv").venomButton({
  phone: "+6282111616226",
  chatMessage: "Hi there 👋<br><br>How can I help you?",
  showPopup: true,
  position: "right",
});
