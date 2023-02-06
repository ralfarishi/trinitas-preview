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
  chatMessage: "Halo 👋<br><br>Ada yang bisa saya bantu?",
  showPopup: false,
  position: "right",
  nameClient: "PT. Trinitas Prima Sejahtera",
  headerTitle: "Business Account",
  avatar: "./assets/avatar.png",
  message: "Apakah gudang x masih tersedia?",
});
