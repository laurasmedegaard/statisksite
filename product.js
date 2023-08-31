//https://kea-alt-del.dk/t7/api/products/1525
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const productDetailTemplate = document.querySelector("#productDetailTemplate").content;


fetch("https://kea-alt-del.dk/t7/api/products/" + id)
    .then((response) => response.json())
    .then((data) => showProduct(data));

function showProduct(product){
    const productImg = document.querySelector(".product-img img");
    const productText = document.querySelector(".product-text");
    productImg.src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    const productDetailCopy = productDetailTemplate.cloneNode(true);

    //price
    const priceText = productDetailCopy.querySelector("h3");
    priceText.textContent = `Price: DKK ${product.price}`;

    //rabat
    const discount = product.discount || 0;
    const total = Math.round(product.price - (product.price / 100) * product.discount);

    if (discount > 0){
      const discountSection = productDetailCopy.querySelector(".discounted");
      discountSection.style.display = "block";
      discountSection.querySelector("p:nth-child(2)").textContent = `-${discount}%`;
      productDetailCopy.querySelector(".finalprice").textContent = `Now DKK ${total},-`;
    }
    else {
      productDetailCopy.querySelector(".discounted").style.display = "none";
      productDetailCopy.querySelector(".finalprice").textContent = `Now DKK ${product.price},-`;
    }
     //brand
     const brandText = productDetailCopy.querySelector(".brand");
     brandText.textContent = `Brand: ${product.brandname}`;

     //Category 
     const categoryText = productDetailCopy.querySelector(".category");
     categoryText.textContent = `Category: ${product.articletype}`;

     //Udsolgt produkt
     if (product.soldout) {
      productDetailCopy.querySelector(".soldOut2").classList.add("soldOut");
     }
     productText.appendChild(productDetailCopy);
}

    // console.log(product);
    // document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;
    // document.querySelector(".purchaseBox .brand").textContent = product.brandname;
    // document.querySelector("img").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

    /*
    {
  "id": 1525,
  "gender": "Unisex",
  "category": "Accessories",
  "subcategory": "Bags",
  "articletype": "Backpacks",
  "basecolour": "Navy Blue",
  "season": "Fall",
  "productionyear": 2010,
  "usagetype": "Casual",
  "productdisplayname": "Deck Navy Blue Backpack",
  "parsed": 1,
  "soldout": 0,
  "relid": 1525,
  "price": 1299,
  "discount": 55,
  "variantname": "Deck Backpack",
  "brandname": "Puma",
  "brandbio": "PUMA is the World's Fastest Sports Brand",
  "brandimage": "http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg",
  "agegroup": "Adults-Unisex",
  "colour1": "NA",
  "colour2": "NA",
  "fashiontype": "Fashion",
  "materialcaredesc": null,
  "sizefitdesc": null,
  "description": "<p>asfafaf<br> kasjhdkashd</p>",
  "styledesc": null
}
    */