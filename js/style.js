var body = document.querySelector("body")
body.style.fontFamily = "Arial"
var h1 = document.querySelector("h1")
h1.style.textAlign = "center";
var h1 = document.querySelector("h3")
h1.style.textAlign = "center";
var menu = document.getElementsByClassName("category");
for(var i= 0; i< menu.length; i++){
    menu[i].style.fontFamily = "category"
    menu[i].style.color ="red"
}
var Menu = document.getElementsByClassName("food-category")
function colorGenerator(){
    var x = Math.floor((Math.random() * 250) + 1)
    var x1 = Math.floor((Math.random() * 250) + 1)
    var x2 = Math.floor((Math.random() * 250) + 1)
    return "rgb(" + x + "," + x1 + "," + x2 + ")"
}
for(var i=0; i<Menu.length; i++){
    Menu[0].style.backgroundColor = colorGenerator()
    Menu[1].style.backgroundColor = colorGenerator()
    Menu[2].style.backgroundColor = colorGenerator()
    Menu[i].style.width = "333px"
    Menu[i].style.margin = "auto"
    Menu[i].style.marginBottom = "10px"
    Menu[i].style.padding = "20px"
    Menu[i].style.flexWrap = "wrap"
};
var Main = document.querySelector("main")
Main.style.display = "flex";
Main.style.flexWrap ="wrap"
var section = document.querySelector("section")
section.style.textAlign="center"
var list2 = document.querySelectorAll("section ul li")
for(var i =0; i< list2.length; i++){
    if(i%2!=0){
        list2[i].style.backgroundColor= "blue"
        list2[i].style.color= "white"
    }
    list2[i].style.width="300px"
    list2[i].style.textAlign="center"
}
var footer = document.querySelector("footer")
footer.style.display="flex"
footer.style.flexDirection ="row"
footer.style.justifyContent="center"
var footer2 = document.getElementsByClassName("food-desc")
for(var i=0; i<footer2.length;i++){
    footer2[i].style.width="100px"
    footer2[i].style.height="100px"
    footer2[i].style.border="3px solid #333301"
    footer2[i].style.borderRadius="50%"
    footer2[i].style.padding="10px"
    
    footer2[i].style.margin="20px"
    footer2[i].style.textAlign="center"
    footer2[i].style.backgroundColor="#FFFF52"
    
}
var list3 = document.querySelector("section ul")
list3.style.marginLeft="500px"