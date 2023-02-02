
let wallet = JSON.parse(localStorage.getItem("amount"))||0;
document.getElementById("wallet").innerText=wallet;

let nameof=JSON.parse(localStorage.getItem("title"));
let image=JSON.parse(localStorage.getItem("image"));
//console.log(image.Poster)
appendmovie(nameof,image.Poster)

function appendmovie(n,t){
    
    let movie=document.getElementById("movie");
    //movie.innerHTML=null;
    
    let p=document.createElement("p");
    p.innerHTML=n ; 
     
let image= document.createElement("img");
image.src=t ;

movie.append(p,image)

}

function book(){
let show=document.getElementById("booking_status")
let number_of_seats=document.getElementById("number_of_seats").value;

let totalAmount=(number_of_seats*100);

if(totalAmount>wallet){
    show.innerHTML="Insufficient Balance!"
}
else{
    show.innerHTML="Booking Successful!"


    let newmoney=+(totalAmount);
    let money=(wallet-newmoney);
    //console.log(typeof(newmoney))
    document.getElementById("wallet").innerText=money;
    
    localStorage.setItem("amount",JSON.stringify(money))

//     let wallet = JSON.parse(localStorage.getItem("amount"))||0;
// document.getElementById("wallet").innerText=wallet;

let wallet = JSON.parse(localStorage.getItem("amount"))||0;
document.getElementById("wallet").innerText=wallet;

let nameof=JSON.parse(localStorage.getItem("title"));
let image=JSON.parse(localStorage.getItem("image"));
//console.log(image.Poster)
appendmovie(nameof,image.Poster)

function appendmovie(n,t){
    
    let movie=document.getElementById("movie");
    //movie.innerHTML=null;
    
    let p=document.createElement("p");
    p.innerHTML=n ; 
     
let image= document.createElement("img");
image.src=t ;

movie.append(p,image)
}
}
}

function book(){
let show=document.getElementById("booking_status")
let number_of_seats=document.getElementById("number_of_seats").value;

let totalAmount=(number_of_seats*100);

if(totalAmount>wallet){
    show.innerHTML="Insufficient Balance!"
}
else{
    show.innerHTML="Booking Successful!"
    let newmoney=+(totalAmount);
    let money=(wallet-newmoney);
    //console.log(typeof(newmoney))
    document.getElementById("wallet").innerText=money;
    
    localStorage.setItem("amount",JSON.stringify(money))


//     let wallet = JSON.parse(localStorage.getItem("amount"))||0;
// document.getElementById("wallet").innerText=wallet;

}
}