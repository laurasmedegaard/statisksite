const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category="+category)
    .then((res) => res.json())
    .then(showProducts);

function showProducts(products){
    //looper og kalder showProduct
    products.forEach(showProduct);
}
function showProduct(product){
    console.log(product)
    //fange template
    const template = document.querySelector("#smallProductTemplate").content;
    //lav en kopi
    const copy = template.cloneNode(true);

    const total = product.price - (product.price / 100) * product.discount;
    console.log(total);

    //ændre indhold
    copy.querySelector("h3").textContent = product.productdisplayname;
    copy.querySelector(".articletype").textContent = product.articletype;
    copy.querySelector(".brandname").textContent = product.brandname;
        //copy.querySelector(".subtle").textContent = product.subcategory;
    copy.querySelector(".price span").textContent = product.price;
        //copy.querySelector(".discounted").textContent = product.discount;
    copy.querySelector(".finalprice").textContent = total;
    copy.querySelector("img").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

    //udsolgt produkt
    if (product.soldout){
        copy.querySelector("article").classList.add("soldOut");
    }
    copy.querySelector(".read-more").setAttribute("href", `product.html?id=${product.id}`);
    //appende
    document.querySelector("main").appendChild(copy);
}
