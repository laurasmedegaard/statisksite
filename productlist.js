fetch("https://kea-alt-del.dk/t7/api/products?limit=15")
    .then((res) => res.json())
    .then(showProducts);

function showProducts(products){
    //looper og kalder showProduct
    products.forEach(showProduct);
}
function showProduct(product){
    //console.log(product)
    //fange template
    const template = document.querySelector("#smallProductTemplate").content;
    //lav en kopi
    const copy = template.cloneNode(true);
    //ændre indhold
    copy.querySelector("h3").textContent = product.productdisplayname;
    copy.querySelector(".subtle").textContent = product.subcategory;
    copy.querySelector(".price").textContent = product.price;
    copy.querySelector(".discounted").textContent = product.discount;
    copy.querySelector("img").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`

    if (product.soldout){
        //udsolgt
        copy.querySelector("article").classList.add("soldOut");
    }
    //appende
    document.querySelector("main").appendChild(copy);
}
