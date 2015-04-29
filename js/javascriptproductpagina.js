// rotate cdhoes
	var product=document.querySelector('.product');
	var bookImages=document.querySelectorAll(".product article img");
	var backProduct=document.querySelector(".product >figure>img");

	var x = document.getElementById("rangeRotateY").value;


	var slider = document.querySelector(".productoptions #rangeRotateY");
	var cdCube = document.querySelector('.product >div');//:first-of-type
	cdCube.classList.add("transition")
	var productsection = document.querySelector(".productsection");
	slider.onmouseup = function() { slideRotateY()};
	var slideRotateY = function(){
		var x = document.getElementById("rangeRotateY").value;
		cdCube.style.transform="rotateY("+x*3.6+"deg)";
    	// cdCube.style.transform="rgba("+x+",20,20,0.5)";
	}
	var openCdArrowOne=document.querySelector("main > .productsection>img:nth-of-type(1)");
	var openCdArrow= document.querySelector('.productsection>div');
	var openCdArrowImage= document.querySelector('.productsection>div img');
	var openCdArrowText = document.querySelector('.productsection>div p');
	
	var cover=document.querySelector('.product div');
	var openBookButton=document.querySelector(".productsection span:nth-of-type(1)")

	

	var vorigeBookButton=document.querySelector(".productsection span:nth-of-type(2)")
	var volgendeBookButton=document.querySelector(".productsection span:nth-of-type(3)")

	var bookShow=0;
	var maxBook=bookImages.length-1;
	var minBook=0;

	var slide = function() {
		addBookInvisible();
		bookImages[bookShow].classList.remove("invisible")


	}
	vorigeBookButton.onclick = function() {
	if (bookShow==minBook) {
		
		}
		else {
			if (bookShow==maxBook) {
				volgendeBookButton.classList.remove("invisible")
			}
			bookShow--
			if (bookShow==minBook) {
				vorigeBookButton.classList.add("invisible")
				console.log("doet")
			};
			slide();
		}

	}
	volgendeBookButton.onclick = function() {
		if (bookShow==maxBook) {
		}
		else {
			if (bookShow==minBook) {
				vorigeBookButton.classList.remove("invisible")
			}
			bookShow++
			if (bookShow==maxBook) {
				volgendeBookButton.classList.add("invisible")
			};
			slide();
		}		 
	}
	openBookButton.classList.add("invisible");
	volgendeBookButton.classList.add("invisible");
	vorigeBookButton.classList.add("invisible");

	var addBookInvisible = function () {
		for (i = 0; i < bookImages.length; i ++) {
			bookImages[i].classList.add("invisible")
		}		
	};
	addBookInvisible();
	var closeBook=false;
	openBookButton.onclick = function () {
		if (closeBook==false) {
			bookImages[0].classList.remove("invisible");
			openBookButton.innerHTML = "sluit boekje";
			volgendeBookButton.classList.remove("invisible");
			bookShow=0;
			closeBook=true;
		}
		else if (closeBook==true) {
			openBookButton.innerHTML = "open boekje";
			addBookInvisible();
			volgendeBookButton.classList.add("invisible");
			vorigeBookButton.classList.add("invisible");
			closeBook=false;					
		}
	};
	openCdBool=false ;
	
	openCdArrow.onclick = function() {
		if (openCdBool==false) {
			openCd();
			openCdBool=true;
			slider.classList.add("invisible");
		}
		else {
			closeCd()
			openCdBool=false;
			slider.classList.remove("invisible");
		}
		
	}

	product.classList.remove('invisible')
	var openCd = function() {
		var x = document.getElementById("rangeRotateY").value;
		openCdArrowImage.classList.add("rotatehor")
		cdCube.style.transform="rotateY("+0+"deg)";
		openCdArrowText.innerHTML = "sluit cd";
		if (x==0) {
			cdCube.classList.add("origin");
			product.classList.add("producttwovis")
			
			// openCdArrow.classList.add('invisible');
			backProduct.classList.remove("invisible")
			openBookButton.classList.remove("invisible");
			cover.classList.add("cdopen");
			productsection.classList.add("cdmovetoside")
		}
		else {
			var xTimeout = setTimeout(
				function(){
					cdCube.classList.add("origin");
					product.classList.add("producttwovis")
					
					// openCdArrow.classList.add('invisible');
					backProduct.classList.remove("invisible")
					openBookButton.classList.remove("invisible");
					cover.classList.add("cdopen");
					productsection.classList.add("cdmovetoside")				
					console.log("timeup")
					clearTimeout(xTimeout)
				}, 1000);
		}			

		
	}


	var closeCd =function(){
		productsection.classList.remove("cdmovetoside")
		cover.classList.remove("cdopen");
		openCdArrowText.innerHTML = "open cd";
		openCdArrowImage.classList.remove("rotatehor")
		openBookButton.classList.add("invisible");
		openCdArrow.classList.remove('invisible');
			openBookButton.innerHTML = "open boekje";
			addBookInvisible();
			volgendeBookButton.classList.add("invisible");
			vorigeBookButton.classList.add("invisible");
			closeBook=false;
		var originTimeout = setTimeout(
			function(){
				cdCube.classList.remove("origin");
				backProduct.classList.add("invisible")
				var x = document.getElementById("rangeRotateY").value;
		
				cdCube.style.transform="rotateY("+x*3.6+"deg)";

				console.log("timeup")
				clearTimeout(originTimeout)
			}, 1000);
		// openCdArrowOne.classList.add("invisible")
		// productTwo.classList.remove("producttwovis")
		// productOne.classList.remove('invisible');
		
		
		
		
	}
	backProduct.classList.add("invisible")

	// var rotateBack=false; 
	
	// document.querySelector('.productoptions img').onclick = function() {
	// 	if (rotateBack==false) {
	// 		cdCube.classList.add("product-show-back");
	// 		rotateBack=true;
	// 	}
	// 	else if (rotateBack==true) {
	// 		cdCube.classList.remove("product-show-back")
	// 		rotateBack=false;
	// 	};
		
	// }
// headermenu
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
		
	};