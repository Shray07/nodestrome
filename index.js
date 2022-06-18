var img = ["https://n.nordstrommedia.com/id/a2095c23-e54d-44c6-885b-b56c16aa6f75.jpeg?h=200&w=1606","https://n.nordstrommedia.com/id/1793a6ae-12a6-46d9-9c2e-23aa9ff1a0e5.jpeg?h=200&w=1608"]



function changeImg(){
    let i=0;
    setInterval(function(){
        document.getElementById("img").src=img[i];

        if(i<img.length-1){
            i++;
        }
        else{
            i=0;
    
        }
    },3000);

}
changeImg();


var img1 = [
    {
        img:"https://n.nordstrommedia.com/id/684ef2e6-362c-49da-9a87-6b2421c00afc.jpeg?h=720&w=1608",
        
        h1 :"Love by Design & More",

        p:"A go-to dress for all those summer RSVPs? Voilà",

        pu:"Love by Design One-Shoulder Dress",
        pu2:"All Cocktail & Party Dresses"

    } ,  
       {
        img :"https://n.nordstrommedia.com/id/8881ce44-5e3b-40e3-8ff7-122fab6adff7.jpeg?h=720&w=1608",
        h1 : "Classic Styles from Classic Brands",
        p:"Here's how to dress for warmer weather.",
        pu:"Ray-Ban  MadeWell"
        

       } ,
       {
        img : "https://n.nordstrommedia.com/id/8c581ec3-f7eb-49ac-9ba3-436c2f419ae4.jpeg?h=720&w=1608",
        h1:"Ends June 18 at 11:59PM PT",
        p:"Selected styles for women, men and kids. Online only. Not combinable with any other offers.",
        pu:"Nike Sell",

       },
        ];

        const image = document.getElementById("image");
        const h1 = document.getElementById("h1");
        const p = document.getElementById("para");
        const pu = document.getElementById("pu");
        const pu2 = document.getElementById("pu2");


function changeImg1(){
    let i=0;
    var line =1;
    setInterval(()=> {
        image.src=img1[i].img;
        h1.textContent=img1[i].h1;
        p.textContent=img1[i].p;
        pu.textContent=img1[i].pu;
        pu2.textContent=img1[i].pu2;

        if(i<img1.length-1){
            i++;
        }
        else{
            i=0;
    
        }
    },5000);

}
changeImg1();



var whiteDressObj =[
    {
        img : "https://n.nordstrommedia.com/id/8215da80-d860-4343-a3d0-307babe46273.jpeg?h=369&w=240",
        title :"Love By Design",
        price : "$54.99 (43% off)",
        cutPrice : "$90.00",
        // a:"5",
        
    },

    {
        img : "https://n.nordstrommedia.com/id/sr3/675c4b4e-8cc0-4778-9630-a1ed689cafc3.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        title :"Love By Design",
        price : "$54.99 (43% off)",
        cutPrice : "$90.00",
    },

    {
        img : "https://n.nordstrommedia.com/id/sr3/c929dedc-8816-471d-b828-28dcc8c8cd72.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        title :"NSR",
        price : "$54.99 (42% off)",
        cutPrice : "$95.00",
        
    },

    {
        img : "https://n.nordstrommedia.com/id/sr3/8d0e906c-ced2-4c89-94ea-137a635e3a7c.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        title :"Area Stars",
        price : "$69.97 (60% off)",
        cutPrice : "$175.00",
     
    },

    {
        img : "https://n.nordstrommedia.com/id/sr3/9028d4e8-97f8-496f-ad86-a67b733e38d5.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        title :"Love By Design",
        price : "$44.97 (51% off)",
        cutPrice : "$92.00",
        
    },

    {
        img : "https://n.nordstrommedia.com/id/sr3/c500fcb0-a160-42a0-8b35-6f7ada10db0d.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        title :"Love By Design",
        price : "$49.97 (47% off)",
        cutPrice : "$96.00",
       
    },
];

localStorage.setItem("whiteProducts",JSON.stringify(whiteDressObj));

var whiteProductsObj = JSON.parse(localStorage.getItem("whiteProducts"))

// console.log(whiteProducwhiteDressObjtsObj);

displayData(whiteDressObj)

function displayData(data){
    document.getElementById("eleventhDiv").innerText="";

    data.forEach(function(el){
        console.log(el)

        let div = document.createElement("div")

        let picture = document.createElement("picture")

        let detailsProducts = document.createElement("div")

        let img = document.createElement("img")
        img.src = el.img;
        img.style.width="200px";


        let title = document.createElement("p")
        title.innerText=el.title;
        title.style.fontSize="13px";
        title.style.marginLeft="20px";
        title.style.color="#393939";

        let price = document.createElement("p")
        price.innerText=el.price;
        price.style.fontSize="13px";
        price.style.marginLeft="20px";
        price.style.fontWeight="700";

        let cutPrice = document.createElement("strike")
        cutPrice.innerText=el.cutPrice;
        cutPrice.style.fontSize="13px";
        cutPrice.style.marginLeft="20px";
        cutPrice.style.color="#393939";

        let star = document.createElement("img")
        star.src=el.star;

        let usersBuy = document.createElement("p")
        usersBuy.innerText=el.usersBuy;

        // let a = document.createElement("a")
        // a.innerText=el.a;

        picture.append(img)
        detailsProducts.append(title,price,cutPrice)

        div.append(picture,detailsProducts)


        var body = document.getElementById("eleventhDiv")
        body.append(div)
    })
}


