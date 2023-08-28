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
    //appende
    document.querySelector("main").appendChild(copy);
}
/* 
 <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="Sahara Team India Fanwear Round Neck Jersey" />
          <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
          <p class="subtle">Tshirts | Nike</p>
          <p class="price"><span>Prev.</span> DKK 1595,-</p>
          <div class="discounted">
            <p>Now DKK 1560,-</p>
            <p>-34%</p>
          </div>
          <a href="product.html">
{
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0
}
*/