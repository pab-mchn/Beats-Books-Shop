//create Alert Function after buy a book
showAlert.style.display = "none";

const createALalert = () => {
  showAlert.innerHTML = "";
  let contentAlert = document.createElement("span");

  contentAlert.innerHTML = `
  <span><strong>Yay!</strong> 🎉 your book has been added to your cart.</span>
 
  `;
  showAlert.append(contentAlert);

  showAlert.style.display = "block";

  function cleanAlert() {
    showAlert.style.display = "none";
  }

  setTimeout(cleanAlert, 2000);
};
