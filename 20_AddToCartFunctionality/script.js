
let productArray = [
    {productImage : "https://i5.walmartimages.com/asr/b39d26c1-b357-43b1-9bcb-7da4816a03c4_1.97950a301b235261f3436f53f8b1205f.jpeg",productName : "Office Chair", productDescription : "Adjustable and comfy", productprice : "15000"},
    {productImage : "https://images.furnituredealer.net/img/products/furniture_of_america/color/elana--705881900_cm3212ac-2pk-b1.jpg",productName : "Traditional sofa", productDescription : "Authentic and comfortable", productprice : "25000"},
    {productImage : "https://mypropboutique.com/wp-content/uploads/2017/09/BasicChair-162B3824.jpg",productName : "Wooden Chair", productDescription : "Affordable and durable", productprice : "5000"},
    {productImage : "https://th.bing.com/th/id/OIP.usv1tCFnisbAc_2W5xLrBgHaJg?rs=1&pid=ImgDetMain",productName : "Modern Chair", productDescription : "Modern and minimalistic", productprice : "10000"},
]

let productArray2 = [
    {productImage : "https://th.bing.com/th/id/OIP.JLtCE3g9lDILAo_aSdkaUgHaGB?rs=1&pid=ImgDetMain",productName : "Dinner Table set", productDescription : "Modern design", productprice : "165000"},
    {productImage : "https://www.antiquemahogany.com.au/assets/full/13303.jpg",productName : "wooden Drawers", productDescription : "Authentic design", productprice : "65000"},
    {productImage : "https://images.homelement.com/md_HE-3552-04.jpg",productName : "Wooden Table", productDescription : "Affordable and durable", productprice : "10000"},
    {productImage : "https://th.bing.com/th/id/OIP.W0l_yNz5cxXopgx_7K1T3wHaHa?w=800&h=800&rs=1&pid=ImgDetMain",productName : "Mirror Dressor", productDescription : "Designer Wooden finish", productprice : "55000"},
]


function addproductsection1(){
    let clutter = "";

    productArray.forEach(function(productelement, idx){
    clutter += `<div  class="product">

                        <div class="productimage">
                            <img src="${productelement.productImage}" alt="">
                        </div>

                        <div class="imagedescription">

                            <div class="descriptiontext">
                                <h3>${productelement.productName}</h3>
                                <p>${productelement.productDescription}</p>
                                <h4>&#8377; ${productelement.productprice}</h4>
                            </div>

                            <div data-index = "${idx}" class="addtocarticon">+</div>
                        </div>
                    </div>`;
    })
    document.querySelector(".productsection1").innerHTML = clutter;
}

function addproductsection2(){
    let clutter2="";
    productArray2.forEach(function(productelement2){
        clutter2 += `<div class="product2">

                        <div class="productimages2">
                            <img src="${productelement2.productImage}" alt="">
                        </div>

                        <div class="imagedescriptions2">

                            <div class="descriptiontexts2">
                                <h3>${productelement2.productName}</h3>
                                <p>${productelement2.productDescription}</p>
                                <h4>&#8377;  ${productelement2.productprice}</h4>
                            </div>

                        </div>
                    </div>`;
    })
    document.querySelector(".productsection2").innerHTML = clutter2;
}


addproductsection1();
addproductsection2();


let cart = [] ;         //defining an empty cart array to store added products details 

function addtoCart(){
    document.querySelector(".productsection1").addEventListener("click", (details) => {
        
        cart.push(productArray[details.target.dataset.index])
        
    })
}
addtoCart();


function displaycartitem(){
    let click = 0;
    
    document.querySelector(".carticon").addEventListener("click", ()=>{
        if(click ==0){
            document.querySelector(".cartexpand").style.display = "block";
            click = 1;
        }
        else{
            document.querySelector(".cartexpand").style.display = "none";
            click = 0;
        }

        let clutter = " ";

        if( cart.length === 0) {
            document.querySelector(".cartexpand").innerHTML = `<p style = "Text-align : center; padding :5px; border : solid 2px grey">Cart is empty</p>`;
        }
        else {
            cart.forEach(function(cartelement){
                clutter += `<div class="cartitem">
                            <div class="cartitemimage"><img src="${cartelement.productImage}" alt=""></div>
                            <div class="cartitemdesc">
                                <div class="cartitemname">${cartelement.productName}</div>
                                <div class="cartitemprice">&#8377; ${cartelement.productprice}</div>
                            </div>
                        </div>`
            })
            document.querySelector(".cartexpand").innerHTML = clutter;
        }
    
    })

        
}

displaycartitem();  