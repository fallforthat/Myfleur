// JavaScript Document
function backtotop() {
	var y = window.pageYOffset; //lay toa do thang cuon hien hanh
	y = y - 30;
	if (y <= 0) {
		window.clearInterval(id);
	}
	window.scrollTo(0, y);
}

function setTime() {
	id = window.setInterval(backtotop, 1);
}

function showMenu() {
	document.getElementById("menu").style.width = "100%";

	document.getElementById("menuList").classList.add("menu-list-f");	
}

function closeMenu() {
	document.getElementById("menu").style.width = "0%";
	document.getElementById("menuList").classList.remove("menu-list-f");
}

function scroll() {
	if (window.pageYOffset >= 1)
		document.getElementById("backToTop").style.display = "block";
	else
		document.getElementById("backToTop").style.display = "none";
}













