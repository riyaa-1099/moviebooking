let wallet = JSON.parse(localStorage.getItem("amount"))||0;
document.getElementById("wallet").innerText=wallet;
let timerId;
function debouncing(fun,delay){
if(timerId){
    clearTimeout(timerId)
}
 timerId=setTimeout(function(){
    fun()
},delay)
}
let searchquery=document.getElementById("search");
searchquery.addEventListener("input",function(){
    debouncing(search,2000);
})


const search=async()=>{
let searchquery=document.getElementById("search").value;
try{  
let res=await fetch(`https://www.omdbapi.com/?s=${searchquery}&page=1&apikey=4aee9bd5`)
let response=await res.json();
let data=response.Search
console.log(data)

appendmovie(data)

}
catch(err){
    console.log("error:",err)
}
}

function appendmovie(data){
let movie=document.getElementById("movies");
movie.innerHTML=null;
data.forEach((el)=>{
    
    let div= document.createElement("div");
    div.setAttribute("class","movie_tab")

let image= document.createElement("img");
image.src=el.Poster ;
let p=document.createElement("p");
p.innerHTML=el.Title ;
let button= document.createElement("button")
button.innerHTML="Book Now";
button.setAttribute("class","book_now");
button.addEventListener("click",function(){
    localStorage.setItem("title",JSON.stringify(el.Title));  
    localStorage.setItem("image",JSON.stringify(el));

    window.location.href="/checkout.html"
})
div.append(image,p,button);
movie.append(div);
})
}

