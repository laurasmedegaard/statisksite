fetch("https://kea-alt-del.dk/t7/api/products?limit=100")
    .then(res=>res.json())
    .then(showProduct)

function showProducts(products){
    //looper og kalder showProduct
    products.forEach(showProduct)
}
function showProduct(product){
    //console.log(product)
    //fange template
    const template = document.querySelector("smallProductTemplate").textContent;
    //lav en kopi
    const copy = template.cloneNode(true);
    //ændre indhold

    //appende
    document.querySelector("main").appendChild(copy);
}
/* 
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