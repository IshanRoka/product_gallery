const img=document.querySelector("#img")
const btn=document.getElementsByClassName("btn")

btn[0].onclick=function(){
    img.src="images/image1.png"
    this.classList.add("active");
    btn[1].classList.remove("active");
    btn[2].classList.remove("active");
}
btn[1].onclick=function(){
    img.src="images/image2.png"
    this.classList.add("active");
    btn[0].classList.remove("active");
    btn[2].classList.remove("active");

}
btn[2].onclick=function(){
    img.src="images/image3.png"
    this.classList.add("active");
    btn[1].classList.remove("active");
    btn[0].classList.remove("active");
    
}