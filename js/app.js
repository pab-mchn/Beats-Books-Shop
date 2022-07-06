shopContent = document.getElementById("shopContent");
finishBuying = document.getElementById("finishBuying");
carritoContent = document.getElementById("carrito-content");
totalCarrito = document.getElementById("totalCarrito");
seeCarrito = document.getElementById("seeCarrito");
showAlert = document.getElementById("showAlert");
paymentContent = document.getElementById("paypal-payment-content");
paypalButtonContainer = document.getElementById("paypal-button-container");

//carrito start with the value of the localStorage content or an empty array
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
                <img src="${product.img}">
                <div class="cardInfo">
                <h3>${product.name} </h3>
                <h5>${product.author}</h5>
                <h4 class="price">${product.price} $</h4>
                </div>
            `;
  shopContent.append(content);

  let comprar = document.createElement("button");
  comprar.className = "comprar";
  comprar.innerText = "Add to Cart";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    carritoContent.innerHTML = "";

    carrito.push({
      id: product.id,
      name: product.name,
      author: product.author,
      img: product.img,
      price: product.price,
    });

    createALalert();
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(carrito);
  });
});

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

//call the function to paint carrito
seeCarrito.addEventListener("click", paintCarritoElements);

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
