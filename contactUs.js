var nm=document.getElementById("name").value;
var mail=document.getElementById("mail").value;
var subBtn=document.getElementById("contact");
var phone=document.getElementById("number");

var mailExp=/(\w{3}@\d{3}.com)/;
var phoneExp=/(01(0|1|2|5)\d{8})/;


function applyError(arr){
    console.log(arr);
    var err = document.getElementsByClassName("error");
    for(var i=0;i<arr.length;i++){
        if(arr[i]==1){
            err[i].classList.add("showError");
        }else{
            if(err[i].classList.contains("showError")){
                err[i].classList.remove("showError");
            }
        }
    }
}




function check(){
    var flag=0;

    nm=document.getElementById("name").value;
    if(nm.length<4){
        flag=1;
        var nFlag=1;
    }else{
        var nFlag=0;
    }

    phone=document.getElementById("phone").value;
    if(!phoneExp.test(phone)){
        var pFlag=1;
        flag=1;
    }else{
        var pFlag=0;
    } 

    mail=document.getElementById("mail").value;
    if(!mailExp.test(mail)){
        var mFlag=1;
        flag=1;
    }else{
        var mFlag=0;
    }   

    
    var errorArr=[nFlag,mFlag,pFlag];
    applyError(errorArr);

    return(flag);
}



subBtn.addEventListener("click",function(e){
    console.log("clicked");
    if(check()){
        e.preventDefault();
    }else{
        document.getElementById("f1").submit();
    }
});

document.getElementById("navHome").addEventListener("click",function(){
    window.location.assign("./home.html");
});
document.getElementById("navAbout").addEventListener("click",function(){
    window.location.assign("./about.html");
});


document.getElementById("facebook").addEventListener("click",function(){
    window.location.href="https://www.facebook.com/";
});
document.getElementById("instagram").addEventListener("click",function(){
    window.location.href="https://www.instagram.com/";
});
document.getElementById("googlePlay").addEventListener("click",function(){
    window.location.href="https://www.play.google.com/";
});
document.getElementById("appSrore").addEventListener("click",function(){
    window.location.href="https://www.facebook.com/";
});
