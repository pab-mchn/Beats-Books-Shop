// When the user clicks anywhere outside of the modal, close it
carritoContent.onclick = function (event) {
  if (event.target == carritoContent) {
    carritoContent.style.display = "none";
  }
};

paymentContent.onclick = function (event) {
  if (event.target == paymentContent) {
    paymentContent.style.display = "none";
  }
};
