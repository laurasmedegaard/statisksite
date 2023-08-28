fetch("https://kea-alt-del.dk/t7/api/products?limit=10")
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
    if (product.soldout){
        //udsolgt
        copy.querySelector("article").classList.add("soldOut");
    }

    // if(product.discount != null){
    //     copy.querySelector(".price").classList.add("displayLineThrough");
    //     }
    //     else {
    //         copy.querySelector(".productlist-card-price").classList.add("displayNone");
    // }
    
    //appende
    document.querySelector("main").appendChild(copy);
}
