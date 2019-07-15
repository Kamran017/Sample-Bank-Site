// #header
//  Bizimlə Əlaqə
var contact = document.querySelector("#header .col6 ul li a " );
var modal= document.getElementById("myModal");
var modalContent=document.querySelector("#header .modalContent");
var span= document.getElementsByClassName("close")[0];
var body= document.body

contact.addEventListener("click",open);

function open(){
		modal.style.display="initial";
		modalContent.style.display="initial"

}

span.addEventListener("click", function() {
   		 modal.style.display = "none";
})	

// Bizə yazın
var write=document.querySelector("li#write");
var writeUs= document.querySelector("#myWrite");
var spanBack=document.querySelector("#myWrite span.back");
var exit=document.querySelector("#myWrite .close")

write.addEventListener("click", function(){
		modalContent.style.display="none";
		writeUs.style.display="initial"		
})

spanBack.addEventListener("click", function(){
		writeUs.style.display="none";
		modalContent.style.display="initial"
})
exit.addEventListener("click", function(){
		modal.style.display = "none";
		modalContent.style.display="none"
		writeUs.style.display="none";
})


// #content .search span text area for searching
var search= document.querySelector("#content .search");
var span = document.querySelector("#content .search span");
var input = document.querySelector("#content .search input")

document.querySelector("#content .search input").addEventListener("click", function(){
	span.style.fontSize=".9em";
	span.style.top = '-35px';
	span.style.left= "-137px"

})
window.onclick = function(event) {
    if (event.target !=input) {
        input.style.display = "hide	";
		span.style ="initial";
    }
}

// #content .search barMenu: "Fərdi", "Korporativ"
var menuDirect=document.querySelector("#content .search .menu");
var barMenu=document.getElementById("barMenu");
var menuContent=document.querySelector("#barMenu .menuContent")
var closeBarMenu=document.querySelector("#barMenu .menuContent .title span.closeBarMenu");

menuDirect.removeEventListener("click", function(){
	span.style.fontSize=".9em";
	span.style.top = '-35px';
	span.style.left= "-137px"
});

menuDirect.addEventListener("click", function(){
		barMenu.style.display="initial";
		menuContent.style.display="initial";
		menuDirect.style.display="none";
})

closeBarMenu.addEventListener("click", function(){
	barMenu.style.display="none";
	menuDirect.style.display="initial";
})
// #barMenu Korporativ
var korporativ=document.querySelector("#content .search .menuContent .title label#Ferdi span.Korporativ");
var ferdi=document.querySelector("#content .search .menuContent .title label#Ferdi span.Ferdi");
var korporativSlide=document.querySelector("#barMenu .menuContent .korporativSlide");
var ferdiSlide=document.querySelector("#barMenu .menuContent .ferdiSlide")

function change1(){
		korporativSlide.style.display="initial";
		ferdiSlide.style.display="none"
}
function change2(){
		korporativSlide.style.display="none";
		ferdiSlide.style.display="initial"
}

korporativ.addEventListener("click", change1);
ferdi.addEventListener("click", change2);

// #content .slider
var slider=document.getElementsByClassName('slider');
var dot=["first","second","third"]
var firstBool = false, secondBool = false, thirdBool = false;
setInterval(function () {
	if (firstBool) {
		photo2();
	} else if (secondBool) {
		photo3();
	} else {
		photo1();
	}
}, 2000);
function photo1(){
	firstBool = true;
	secondBool = false;
	thirdBool = false;
    document.querySelector("#content .slider").setAttribute("style", "background-image: url(images/1.jpg); background-size: 100%; background-repeat: no-repeat; filter: opacity(.5);");
}
function photo2(){
	secondBool = true;
	firstBool = false;
	thirdBool = false;
	document.querySelector("#content .slider").setAttribute("style", "background-image: url(images/2.jpg); background-size: 100%; background-repeat: no-repeat; filter: opacity(.5);");
}
function photo3(){
	secondBool = false;
	firstBool = false;
	thirdBool = true;
	document.querySelector("#content .slider").setAttribute("style", "background-image: url(images/3.jpg); background-size: 100%; background-position: center;background-repeat: no-repeat; filter: opacity(.5);");
}
first.addEventListener("click", photo1);
second.addEventListener("click", photo2);
third.addEventListener("click", photo3);


// function func(e) {
// 	console.clear();
// 	console.log(e.clientX + ' : ' + e.clientY);
// }
// document.body.addEventListener('mousemove', func);
