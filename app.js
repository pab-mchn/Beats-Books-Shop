shopContent = document.getElementById("shopContent");
finishBuying = document.getElementById("finishBuying");
carritoContent = document.getElementById("carrito-content");
totalCarrito = document.getElementById("totalCarrito");
seeCarrito = document.getElementById("seeCarrito");

const productos = [
  {
    id: 1,
    name: "libro 1",
    price: 300,
    img:
      "https://imgs.search.brave.com/S_hPRfYZWh8dJjI_xpSv9N1ix1ISpScKE8BpRKBWYa8/rs:fit:304:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/blZGMFlBdzM5Tjl5/TzV0N0MyM0h3SGFM/aiZwaWQ9QXBp",
  },
  {
    id: 2,
    name: "libro 2",
    price: 300,
    img:
      "https://imgs.search.brave.com/S_hPRfYZWh8dJjI_xpSv9N1ix1ISpScKE8BpRKBWYa8/rs:fit:304:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/blZGMFlBdzM5Tjl5/TzV0N0MyM0h3SGFM/aiZwaWQ9QXBp",
  },
  {
    id: 3,
    name: "libro 3",
    price: 300,
    img:
      "https://imgs.search.brave.com/S_hPRfYZWh8dJjI_xpSv9N1ix1ISpScKE8BpRKBWYa8/rs:fit:304:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/blZGMFlBdzM5Tjl5/TzV0N0MyM0h3SGFM/aiZwaWQ9QXBp",
  },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
  let content = document.createElement("div");
  content.innerHTML = `
                <img src="${product.img}">
                <h3>${product.name}</h3>
                
            `;
  shopContent.append(content);

  let comprar = document.createElement("button");
  comprar.className = "comprar";
  comprar.innerText = "comprar";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    carritoContent.innerHTML = "";

    carrito.push({
      id: product.id,
      name: product.name,
      img: product.img,
      price: product.price,
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(carrito);
  });
});

//function to paint carrito
const paintCarritoElements = () => {
  //clean and update carrito content
  carritoContent.innerHTML = "";
  carrito.forEach((product) => {
    let contentCarrito = document.createElement("div");
    contentCarrito.innerHTML = `
            <img src="${product.img}">
            <h3>${product.name}</h3>
            <h4>${product.price} $</h4>
            `;
    carritoContent.append(contentCarrito);

    deleteProduct = document.createElement("button");
    deleteProduct.className = "delete";
    deleteProduct.innerText = "delete product";

    contentCarrito.append(deleteProduct);

    //call de function for delete item
    deleteProduct.addEventListener("click", deleteProductItem);
  });
};

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

  //update carrito elemente after remove items
  paintCarritoElements();
};

//pagar y sumar total
finishBuying.addEventListener("click", () => {
  const total = carrito.reduce((acc, el) => acc + el.price, 0);
  const totalBuying = document.createElement("h1");
  totalBuying.innerHTML = `the final price is:  ${total} $`;
  totalCarrito.append(totalBuying);
});
