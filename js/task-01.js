const listArray = document.querySelectorAll(".item");

console.log(`Numbers of categories: ${listArray.length}`);

listArray.forEach((elem) => {
    console.log(`Categorie: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`);
});




