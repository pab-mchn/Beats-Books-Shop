const searchProducts = document.querySelector(".search-products");
const suggestionsPanel = document.querySelector(".suggestions");

searchProducts.addEventListener("keyup", () => {
  const input = searchProducts.value.toLowerCase();

  const suggestions = productos.filter((product) => {
    return product.name.toLowerCase().startsWith(input) || product.author.toLowerCase().startsWith(input);
  });

  suggestionsPanel.innerHTML = "";

  if (suggestions.length > 0) {
    suggestions.forEach((suggested) => {
      let suggestionContent = document.createElement("div");
      suggestionContent.className = "card";
      suggestionContent.innerHTML = `
                <img src="${suggested.img}">
                <div class="cardInfo">
                <h3>${suggested.name} </h3>
                <h5>${suggested.author}</h5>
                <h4 class="price">${suggested.price} $</h4>
                </div>
            `;
      suggestionsPanel.append(suggestionContent);

      let comprar = document.createElement("button");
      comprar.className = "comprar";
      comprar.innerText = "Add to Cart";

      suggestionContent.append(comprar);

      comprar.addEventListener("click", () => {
        carritoContent.innerHTML = "";

        carrito.push({
          id: suggested.id,
          name: suggested.name,
          author: suggested.author,
          img: suggested.img,
          price: suggested.price,
        });

        createALalert();
        localStorage.setItem("carrito", JSON.stringify(carrito));
        console.log(carrito);
      });
    });
  } else {
    let suggestionContent = document.createElement("h4");
    suggestionContent.className = "suggestionText";
    suggestionContent.innerHTML = `We did not find a book that matches your search`;
    suggestionsPanel.append(suggestionContent);
  }

  if (input == "") {
    suggestionsPanel.innerHTML = "";
  }
});
