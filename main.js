document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".product button, .box a.btn");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productName = button.closest(".product, .box").querySelector("h2").textContent;
            const productPrice = button.closest(".product, .box").querySelector(".price").textContent;

            // Vous pouvez ajouter ici la logique pour ajouter le produit au panier
            // Par exemple, créer un objet JavaScript pour le produit avec le nom, le prix, etc.
            // Vous pouvez ensuite stocker cet objet dans un tableau ou utiliser une autre structure de données pour représenter le panier.

            alert(`Le produit "${productName}" au prix de ${productPrice} a été ajouté au panier !`);
        });
    });
});
function ajouteraupanier(productId) {
    const productBox = document.querySelector(`.box:nth-child(${productId})`);
    const productName = productBox.querySelector("h4").textContent;
    const productPrice = productBox.querySelector(".price").textContent;

    // Vous pouvez ajouter ici la logique pour ajouter le produit au panier
    // Par exemple, créer un objet JavaScript pour le produit avec le nom, le prix, etc.
    // Vous pouvez ensuite stocker cet objet dans un tableau ou utiliser une autre structure de données pour représenter le panier.

    alert(`Le produit "${productName}" au prix de ${productPrice} a été ajouté au panier !`);
}