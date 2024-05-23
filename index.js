function myFunction() {
    document.getElementById("demo").addEventListener("click", myFunction);
    document.getElementById("demo").innerHTML = "modda gudvandi &#128514";
    document.getElementById("demo").style.fontSize = "70px"; 
    document.getElementById("demo").style.color = "black";
    document.getElementById("demo").style.backgroundColor = "yellow";
}