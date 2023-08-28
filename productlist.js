fetch("https://kea-alt-del.dk/t7/api/products")
    .then(res=>res.json())
    .then(showProduct)

function showProducts(products){
    //looper og kalder showProduct
    products.forEach(showProduct)
}
function showProduct(product){
    console.log(product)
    //fange template

    //lav en kopi


    //ændre indhold

    //appende
}