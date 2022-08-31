var desc=document.getElementById("description");
var image=document.getElementById("image");
var rBtn=document.getElementById("rightClick");
var lBtn=document.getElementById("leftClick");
var price=document.getElementById("price");
var addCart=document.getElementById("addCart");
var subNo=document.getElementById("sub");
var contentBtns=document.getElementsByClassName("contentBtn");
var i=0;
var totalPrice=0;
var cartCounter=0;
var data=[];
var category1=[];
var category2=[];
var category3=[];
var category4=[];
var up=document.getElementById("up");
var filter = document.getElementById("filter");

function categorySplit(){           //split products by category and store each of them in array
    for( var i = 0;i<20;i++){
        if(data[i].category=="men's clothing"){
            console.log("c1");
            category1.push(data[i]);
        }else if(data[i].category=="jewelery"){
            console.log("c2");
            category2.push(data[i]);
        }else if(data[i].category=="electronics"){
            console.log("c3");
            category3.push(data[i]);
        }else if(data[i].category=="women's clothing"){
            console.log("c4");
            category4.push(data[i]);
        }
    }
}

function contentDisplay(arr){           //display the products of category choosen
    var content=document.getElementsByClassName("content");
    var contentDescription=document.getElementsByClassName("contentDescription");
    var contentImg=document.getElementsByClassName("contentImg");
    var contentBtn=document.getElementsByClassName("contentBtn");
    var contentPrice=document.getElementsByClassName("contentPrice");
    for(var j=0;j<arr.length;j++){
        contentImg[j].setAttribute("src",arr[j].image);
        contentDescription[j].innerHTML=arr[j].description;
        contentPrice[j+1].innerHTML="Price = "+ arr[j].price +" $";
        console.log(arr[j].price);
        var btn=document.createElement("button");
        btn.setAttribute("value",arr[j].id);
        btn.setAttribute("class","contentBtn");
        btn.setAttribute("onclick","addContent(event)");
        btn.innerText="Add to cart";
        content[j].appendChild(btn);
    }
}

function emptyDisplay(){            //remove products from page before displaying the new category
    var content=document.getElementsByClassName("content");
    var contentDescription=document.getElementsByClassName("contentDescription");
    var contentImg=document.getElementsByClassName("contentImg");
    var contentBtn=document.getElementsByClassName("contentBtn");
    var contentPrice=document.getElementsByClassName("contentPrice");
    for(var i=0;i<20;i++){
        $(".contentImg").eq(i).removeAttr("src");
        $(".contentDescription").eq(i).empty();
        $(".contentPrice").eq(i+1).empty();
        $(".contentBtn").remove();

    }
}



var xhr = new XMLHttpRequest();
xhr.open("GET","https://fakestoreapi.com/products");
xhr.send();
xhr.onreadystatechange= function (){
    if(xhr.readyState==4){
        if(xhr.status==200){
            data = JSON.parse(xhr.response);
            image.setAttribute("src",data[i].image);
            desc.innerHTML=data[i].description;
            price.innerHTML="price : "+data[i].price+" $";
            categorySplit();
            contentDisplay(data);
            window.setInterval(next,3000);
        }
    }
    return(xhr.response);
};

function addItem(){   //add item to cart for button in slider
    var containerC=document.getElementById("cartItems");
    var divC=document.createElement("div");
    var priceC=document.createElement("div");
    var imgC=document.createElement("img");
    var remove=document.createElement("i");
    remove.setAttribute("class","fa-solid fa-circle-xmark");
    remove.classList.add("cartItems");
    remove.classList.add("red");
    imgC.src=data[i].image;
    priceC.innerHTML=data[i].price;
    priceC.setAttribute("class","cartItems");
    imgC.setAttribute("class","cartItems");
    divC.appendChild(imgC);
    divC.appendChild(priceC);
    divC.appendChild(remove);
    containerC.appendChild(divC);
}

function next(){            //get next photo for slider
    if(i>18){i=0;}else{i++;}
    image.setAttribute("src",data[i].image);
    desc.innerHTML=data[i].description;
    price.innerHTML="price : "+data[i].price+" $";
}
function prev(){            //get prev photo for slider
    if(i<1){i=19;}else{i--;}
    image.setAttribute("src",data[i].image);
    desc.innerHTML=data[i].description;
    price.innerHTML="price : "+data[i].price+" $";
}
function addCounter(x){          //display the number of products in cart
    if(x<0){
        cartCounter--
        subNo.innerHTML=cartCounter;
    }else{
        cartCounter++
        subNo.innerHTML=cartCounter;
        addItem();
    }
    

}

function addContent(x){         // add and display contacts to cart for categories buttons
    cartCounter++;
    subNo.innerHTML=cartCounter;
    var index= x.path[0].value;
    var containerC=document.getElementById("cartItems");
    var descC=document.createElement("div");
    var priceC=document.createElement("div");
    var imgC=document.createElement("img");
    var remove=document.createElement("i");
    remove.setAttribute("class","fa-solid fa-circle-xmark");
    remove.classList.add("cartItems");
    remove.classList.add("red");
    imgC.src=data[index-1].image;
    priceC.innerHTML=data[index-1].price;
    priceC.setAttribute("class","cartItems");
    imgC.setAttribute("class","cartItems");
    descC.appendChild(imgC);
    descC.appendChild(priceC);
    descC.appendChild(remove);
    containerC.appendChild(descC);
}

function scrollUp(){            //scrol to the beginning of the widow
    window.scrollTo(0,0);
}
function showFilter(){          //send gategory to be displayed after choosing one
    var content=document.getElementsByClassName("content");
    var contentDescription=document.getElementsByClassName("contentDescription");
    var contentImg=document.getElementsByClassName("contentImg");
    var contentBtn=document.getElementsByClassName("contentBtn");
    var contentPrice=document.getElementsByClassName("contentPrice");
    emptyDisplay();
    if(filter.value=="c1"){
        console.log("c1");
        contentDisplay(category1);
    }else if(filter.value=="c2"){
        contentDisplay(category2);
        console.log("c2");
    }else if(filter.value=="c3"){
        contentDisplay(category4);
        console.log("c3");
    }else if(filter.value=="c4"){
        contentDisplay(category3);
        console.log("c4");
    }else if(filter.value=="all"){
        contentDisplay(data);
        console.log("all");
    }
}
function removeItem(){
    console.log("clicked");
}
rBtn.addEventListener("click",next);            //event on right button in slider
lBtn.addEventListener("click",prev);            //event on left button in slider
addCart.addEventListener("click",addCounter);   //event on button add to cart
up.addEventListener("click",scrollUp);          //event to up button to scrool to page start
filter.addEventListener("change",showFilter);   //event to filter products

//remove items from cart
$(document).on('click', '.fa-circle-xmark', function() {
    $(this).parent().remove();
    addCounter(-1);
});





document.getElementById("facebook").addEventListener("click",function(){
    window.location.href="https://www.facebook.com/";
});
document.getElementById("instagram").addEventListener("click",function(){
    window.location.href="https://www.instagram.com/";
});
document.getElementById("googlePlay").addEventListener("click",function(){
    window.location.href="https://www.play.google.com/";
});document.getElementById("appSrore").addEventListener("click",function(){
    window.location.href="https://www.facebook.com/";
})

document.getElementById("navContact").addEventListener("click",function(){
    window.location.assign("./contactUs.html");
})
document.getElementById("navAbout").addEventListener("click",function(){
    window.location.assign("./about.html");
})


