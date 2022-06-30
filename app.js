shopContent = document.getElementById("shopContent");
finishBuying = document.getElementById("finishBuying");
carritoContent = document.getElementById("carrito-content");
totalCarrito = document.getElementById("totalCarrito");
seeCarrito = document.getElementById("seeCarrito");

const productos = [
  {
    id: 1,
    name: "on the road",
    author: "Jack Kerouac",
    price: 300,
    img:
      "https://imgs.search.brave.com/PG6VRGVRdd1tat50p4zbkf4eZejQVmLSXnyikv6sZfQ/rs:fit:346:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/eGVESlRoNnNFWDZk/VXhhcjJnTkNnSGFL/SiZwaWQ9QXBp",
  },
  {
    id: 2,
    name: "The Subterraneans",
    author: "Jack Kerouac",
    price: 300,
    img:
      "https://imgs.search.brave.com/xjuT1rKjFLtTvqpYLzm9WnQuJhjNsEYA_BjY0dc6DzY/rs:fit:169:225:1/g:ce/aHR0cHM6Ly90c2Uy/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC56N0pWWExu/MlNRS2pnMFZJNU50/S1ZnQUFBQSZwaWQ9/QXBp",
  },
  {
    id: 3,
    name: "The Dharma Bums",
    author: "Jack Kerouac",
    price: 300,
    img:
      "https://imgs.search.brave.com/z18VKGHuzGbR8NKqeHitdlz1jLdJkAIJdFFNpiq3W-w/rs:fit:174:266:1/g:ce/aHR0cDovL2VjeC5p/bWFnZXMtYW1hem9u/LmNvbS9pbWFnZXMv/SS81MUJ4UmI4M2FI/TC5fU1kyNjRfQk8x/LDIwNCwyMDMsMjAw/X1FMNDBfLmpwZw",
  },

  {
    id: 4,
    name: "Junky",
    author: "William Burroghs ",
    price: 300,
    img:
      "https://imgs.search.brave.com/D2bD3wS_KSc2Gmt_vj7ptMfalnolARp_jqdJCdgpNAk/rs:fit:600:770:1/g:ce/aHR0cHM6Ly9pbWcu/ZGlzY29ncy5jb20v/NHlualBRbHd5R0Fr/Y3ZqRWpPVEFJZEs1/blgwPS9maXQtaW4v/NjAweDc3MC9maWx0/ZXJzOnN0cmlwX2lj/YygpOmZvcm1hdChq/cGVnKTptb2RlX3Jn/YigpOnF1YWxpdHko/OTApL2Rpc2NvZ3Mt/aW1hZ2VzL1ItMjYz/ODAzMS0xMjk0NDM2/NDcwLmpwZWcuanBn",
  },

  {
    id: 5,
    name: "Naked Lunch",
    author: "William Burroghs ",
    price: 300,
    img:
      "https://imgs.search.brave.com/53RKwp_6XkdBbQsMhwo5GmIx6afUjf2qIszchgbII-g/rs:fit:471:700:1/g:ce/aHR0cHM6Ly9yc3B1/bGwtc3VwZXJ2ZXJ0/Lm5ldGRuYS1zc2wu/Y29tL2ltYWdlcy9j/b3ZlcnMvbmFrZWRf/bHVuY2gvbmFrZWRf/bHVuY2gudWsuY2Fs/ZGVyLjE5NjQuanBn",
  },

  {
    id: 6,
    name: "The Place of Dead Roads",
    author: "William Burroghs ",
    price: 300,
    img:
      "https://imgs.search.brave.com/AoA7HjebrOBG0smAYcPFKVocF04KY9BzzUtnJQhdr60/rs:fit:326:500:1/g:ce/aHR0cHM6Ly9waWN0/dXJlcy5hYmVib29r/cy5jb20vaXNibi85/NzgwMTQxMTg5Nzk2/LWVzLTMwMC5qcGc",
  },
];

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
