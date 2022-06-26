var ran1;
var ranimg;
ran1 = Math.floor(Math.random()*6)+1
ranimg1 = "./images/dice"+ran1+".png"
document.querySelector("img").setAttribute("src",ranimg1)

ran2 = Math.floor(Math.random()*6)+1
ranimg2 = "./images/dice"+ran2+".png"
document.querySelectorAll("img")[1].setAttribute("src",ranimg2)

if (ran1>ran2){
    document.querySelector("h1").textContent = "Player1 Wins";
}else if(ran1<ran2){
    document.querySelector("h1").textContent = "Player2 Wins";
}else{
    document.querySelector("h1").textContent = "Refresh Me";
}