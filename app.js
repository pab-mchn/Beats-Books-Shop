tienda = document.getElementById("tienda");
pagar = document.getElementById("pagar");
carritoContent = document.getElementById("carrito-content");
totalCarrito = document.getElementById("totalCarrito");
verCarrito = document.getElementById("verCarrito");

const productos = [
  {
    name: "libro 1",
    precio: 300,
    img:
      "https://imgs.search.brave.com/S_hPRfYZWh8dJjI_xpSv9N1ix1ISpScKE8BpRKBWYa8/rs:fit:304:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/blZGMFlBdzM5Tjl5/TzV0N0MyM0h3SGFM/aiZwaWQ9QXBp",
  },
  {
    name: "libro 2",
    precio: 300,
    img:
      "https://imgs.search.brave.com/S_hPRfYZWh8dJjI_xpSv9N1ix1ISpScKE8BpRKBWYa8/rs:fit:304:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/blZGMFlBdzM5Tjl5/TzV0N0MyM0h3SGFM/aiZwaWQ9QXBp",
  },
  {
    name: "libro 3",
    precio: 300,
    img:
      "https://imgs.search.brave.com/S_hPRfYZWh8dJjI_xpSv9N1ix1ISpScKE8BpRKBWYa8/rs:fit:304:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/blZGMFlBdzM5Tjl5/TzV0N0MyM0h3SGFM/aiZwaWQ9QXBp",
  },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((producto) => {
  let content = document.createElement("div");
  content.innerHTML = `
                <img src="${producto.img}">
                <h3>${producto.name}</h3>
                
            `;
  tienda.append(content);

  let comprar = document.createElement("button");
  comprar.className = "comprar";
  comprar.innerText = "comprar";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    carritoContent.innerHTML = "";

    carrito.push({
      name: producto.name,
      img: producto.img,
      precio: producto.precio,
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(carrito);
  });
});

//see carrito in the storage
verCarrito.addEventListener("click", () => {
  carrito.forEach((producto) => {
    let contentCarrito = document.createElement("div");

    contentCarrito.innerHTML = `
            <img src="${producto.img}">
            <h3>${producto.name}</h3>
            <h4>${producto.precio} $</h4>
          `;
    carritoContent.append(contentCarrito);
  });
});

//pagar y sumar total
pagar.addEventListener("click", () => {
  const total = carrito.reduce((acc, el) => acc + el.precio, 0);
  const totalCompra = document.createElement("h1");
  totalCompra.innerHTML = `el total a pagar por su compra es de:  ${total} $`;
  totalCarrito.append(totalCompra);
});
