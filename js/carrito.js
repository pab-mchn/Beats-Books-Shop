let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//function to paint carrito
const paintCarritoElements = () => {
  if (carrito.length > 0) {
    carritoContent.style.display = "block";
    //clean and update carrito content
    carritoContent.innerHTML = "";

    carrito.forEach((product) => {
      let contentCarrito = document.createElement("div");

      contentCarrito.className = "modalContent";

      contentCarrito.innerHTML = `
              <img src="${product.img}"/>
              <h4>${product.author}</h4>
              <h4>${product.name}</h4>
              <h4>${product.price}$ </h4>
              `;

      carritoContent.append(contentCarrito);
      deleteProduct = document.createElement("i");
      deleteProduct.className = "fa-solid fa-trash-can";

      contentCarrito.append(deleteProduct);

      //call de function for delete item
      deleteProduct.addEventListener("click", deleteProductItem);
    });

    //final price calculation
    const total = carrito.reduce((acc, el) => acc + el.price, 0);
    const totalBuying = document.createElement("div");
    totalBuying.className = "totalBuying";
    totalBuying.innerHTML = `Total:  ${total} $`;
    carritoContent.append(totalBuying);

    //create pay link button
    const payContent = document.createElement("div");
    payContent.className = "payContent";
    payContent.innerHTML = "Pay";
    carritoContent.append(payContent);

    paymentContent.style.display = "none";

    payContent.addEventListener("click", () => {
      carritoContent.style.display = "none";
      paymentContent.style.display = "block";
      //clean the payment buttons
      paypalButtonContainer.innerHTML = "";
      const total = carrito.reduce((acc, el) => acc + el.price, 0);

      paypal
        .Buttons({
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: total, //final price
                  },
                },
              ],
            });
          },
          onApprove: function (data, actions) {
            //in aproved payment
            return actions.order.capture().then(function (details) {
              //instruction after the payment is procesing
              paymentContent.style.display = "none";
              showAlert.innerHTML = "";
              let contentAlert = document.createElement("span");

              contentAlert.innerHTML = `
                  <span><strong>Yay!</strong> thanks ${details.payer.name.given_name} 🎉 your payment has been completed .</span>
                  `;
              showAlert.append(contentAlert);

              showAlert.style.display = "block";

              function cleanAlert() {
                showAlert.style.display = "none";
              }

              setTimeout(cleanAlert, 4000);
              // instructions for the server
              return fetch("/paypal-transaction-complete", {
                method: "post",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  orderID: data.orderID,
                }),
              });
              //end of the server instruction
            });
          },
        })
        .render("#paypal-button-container");
    });
  } else {
    //if carrito is empty, is not possible to see
    carritoContent.style.display = "none";
  }
};

//call the function to paint carrito
seeCarrito.addEventListener("click", paintCarritoElements);

//function for delete product
const deleteProductItem = () => {
  const foundId = carrito.find((element) => element.id);

  localStorage.removeItem(foundId);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });

  console.log(carrito);

  //update LocalStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  //update carrito elements after remove items
  paintCarritoElements();
};
