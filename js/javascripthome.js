var allDates = document.querySelectorAll('.middlehome header time')
var allTips = document.querySelectorAll('.tipvandag')

var tipShow=3;
var maxTip=allTips.length-1;
var minTip=0;

var slide = function() {
	removeAllClass();
	while(tipShow<maxTip) {
		allTips[maxTip].classList.add("forward")
		allDates[maxTip].classList.add("invisible")
		maxTip--;
	}
	while(tipShow>minTip) {
		allTips[minTip].classList.add("backward")
		allDates[minTip].classList.add("invisible")
		minTip++;
	}
	maxTip=allTips.length-1;
	minTip=0;
}
var removeAllClass = function(){
	for (i = 0; i < allTips.length; i += 1) {
		allTips[i].classList.remove("backward");
		allTips[i].classList.remove("forward");
		allDates[i].classList.remove("invisible");
	}
	
				
}
slide();
var backwardButton=document.querySelector('.middlehome header span:first-of-type')
var forwardButton=document.querySelector('.middlehome header span:nth-of-type(2)')
document.querySelector('.middlehome header span:first-of-type').onclick = function() {
	if (tipShow==minTip) {
		
	}
	else {
		if (tipShow==maxTip) {
			forwardButton.classList.remove("invisiblewhite")
		}
		tipShow--
		if (tipShow==minTip) {
			backwardButton.classList.add("invisiblewhite")
			console.log("doet")
		};
		slide();
	}

}
document.querySelector('.middlehome header span:nth-of-type(2)').onclick = function() {
	if (tipShow==maxTip) {
	}
	else {
		if (tipShow==minTip) {
			backwardButton.classList.remove("invisiblewhite")
		}
		tipShow++
		if (tipShow==maxTip) {
			forwardButton.classList.add("invisiblewhite")
		};
		slide();
	}		 
}
//menuheader
	var infoArrow = document.querySelector("nav>ul li:nth-of-type(6) span")
	var menuInfoExpand=false; 
	var menuUitgebreid = document.querySelector('nav>ul li:nth-of-type(6) ul');
	document.querySelector('nav>ul li:nth-of-type(6)').onclick = function() {
		if (menuInfoExpand==false) {
			menuUitgebreid.classList.remove("hidemenu");
			infoArrow.classList.add("rotate")
			menuInfoExpand=true;
		}
		else if (menuInfoExpand==true) {
			menuUitgebreid.classList.add("hidemenu")
			menuInfoExpand=false;
			infoArrow.classList.remove("rotate")
		};
		
	}
	var handsArrow = document.querySelector("nav>ul li:nth-of-type(4) span")
	var menuHandsExpand=false; 
	var menuHandsUitgebreid = document.querySelector('nav>ul li:nth-of-type(4) ul');
	document.querySelector('nav>ul li:nth-of-type(4)').onclick = function() {
		if (menuHandsExpand==false) {
			menuHandsUitgebreid.classList.remove("hidemenu");
			menuHandsExpand=true;
			handsArrow.classList.add("rotate")
		}
		else if (menuHandsExpand==true) {
			menuHandsUitgebreid.classList.add("hidemenu")
			menuHandsExpand=false;
			handsArrow.classList.remove("rotate")
		};
		
	}
	var overigArrow = document.querySelector("nav>ul li:nth-of-type(7) span")
	var menuOverigExpand=false; 
	var menuOverigUitgebreid = document.querySelector('nav>ul li:nth-of-type(7) ul');
	document.querySelector('nav>ul li:nth-of-type(7)').onclick = function() {
		if (menuOverigExpand==false) {
			menuOverigUitgebreid.classList.remove("hidemenu");
			menuOverigExpand=true;
			overigArrow.classList.add("rotate")
		}
		else if (menuOverigExpand==true) {
			menuOverigUitgebreid.classList.add("hidemenu")
			menuOverigExpand=false;
			overigArrow.classList.remove("rotate")
		};
		
	}
