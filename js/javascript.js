
// cds platen
	var resetCd = function() { // opnieuw alles selecteren
		var allAlbumsRowOne;
		var allAlbumsRowTwo;
		var allAlbumsRowThree;
		
		var rowOne;
		var rowTwo;
		var rowThree;

		var allContainersRowOne;
		var allContainersRowTwo;
		var allContainersRowThree;

		var selectRowElements = function() { // opnieuw alles selecteren
			allAlbumsRowOne = document.querySelectorAll(".rowOne>section>div")
			allAlbumsRowTwo = document.querySelectorAll(".rowTwo>section>div")
			allAlbumsRowThree = document.querySelectorAll(".rowThree>section>div")
			
			rowOne = document.querySelector(".rowOne")
			rowTwo = document.querySelector(".rowTwo")
			rowThree = document.querySelector(".rowThree")

			allContainersRowOne = document.querySelectorAll(".rowOne > section")
			allContainersRowTwo = document.querySelectorAll(".rowTwo > section")
			allContainersRowThree = document.querySelectorAll(".rowThree > section")
		}
		selectRowElements();

		var focusAlbumRowOne = 5;
		var focusAlbumRowTwo = 5;
		var focusAlbumRowThree = 5;

		var focusAlbumMax = allAlbumsRowOne.length-1;//focusAlbum;

		var focusAlbumMin = 0;//focusAlbum;
		var maxAlbum = allAlbumsRowOne.length-1;//hoeveelheid in array begint bij 0, length bij 1
		var minAlbum = 0;

		var whichRow = 1;
		rowOne.onmouseover = function() {
			whichRow=1;
		}
		rowTwo.onmouseover = function() {
			whichRow=2;
		}
		rowThree.onmouseover = function() {
			whichRow=3;
		}

		// albums[focusAlbum].classList.add("show-top");

		allAlbumsRowOne[focusAlbumRowOne].classList.add("show-top")
		allAlbumsRowTwo[focusAlbumRowTwo].classList.add("show-top")
		allAlbumsRowThree[focusAlbumRowThree].classList.add("show-top")

		var changeFocus = function (newFocus) {
			removeClass()
			if (whichRow==1) {
				focusAlbumRowOne = newFocus;
				showLooper (focusAlbumRowOne,allAlbumsRowOne,allContainersRowOne);
				allAlbumsRowOne[focusAlbumRowOne].classList.add("show-top")
	 		}
			else if (whichRow==2) {
				focusAlbumRowTwo = newFocus;
				showLooper (focusAlbumRowTwo,allAlbumsRowTwo,allContainersRowTwo);
				allAlbumsRowTwo[focusAlbumRowTwo].classList.add("show-top")
			}
			else if (whichRow==3) {
				focusAlbumRowThree = newFocus;
				showLooper (focusAlbumRowThree,allAlbumsRowThree,allContainersRowThree);
				allAlbumsRowThree[focusAlbumRowThree].classList.add("show-top")
			}	
			// focusAlbum=newFocus;
			// console.log (allAlbums.length)
			// console.log (focusAlbumMin);
			// console.log (newFocus);
			//focusAlbum;		
		}
		var indexNumber=10;
		var showLooper = function(focusAlbum,albumsRow,containerRow) {
			while (focusAlbumMax>focusAlbum) {
				albumsRow[focusAlbumMax].classList.add("show-front");
				
				containerRow[focusAlbumMax].classList.add("zindex"+indexNumber);
				focusAlbumMax--
				indexNumber--
			}
			focusAlbumMax = allAlbumsRowOne.length-1;
			indexNumber=10;
			while (focusAlbumMin<focusAlbum) {
				albumsRow[focusAlbumMin].classList.add("show-back");
				
				focusAlbumMin++	
			}
			focusAlbumMin = 0;
		}
		var removeClass = function () {
			indexNumber=1;
			if (whichRow==1) {
				for (i = 0; i < allAlbumsRowOne.length; i += 1) {
					allAlbumsRowOne[i].classList.remove("show-back");
					allAlbumsRowOne[i].classList.remove("show-front");
					allAlbumsRowOne[i].classList.remove("show-top");
					allContainersRowOne[i].classList.remove("zindex"+indexNumber);
					indexNumber++;
				};
				indexNumber=1;
			}
			else if (whichRow==2) {
				for (i = 0; i < allAlbumsRowTwo.length; i += 1) {
					allAlbumsRowTwo[i].classList.remove("show-back");
					allAlbumsRowTwo[i].classList.remove("show-front");
					allAlbumsRowTwo[i].classList.remove("show-top");
					allContainersRowTwo[i].classList.remove("zindex"+indexNumber);
					console.log (i);
					console.log (indexNumber);
					indexNumber++;
				};
				indexNumber=1;
			}
			else if (whichRow==3) {
				for (i = 0; i < allAlbumsRowThree.length; i += 1) {
					allAlbumsRowThree[i].classList.remove("show-back");
					allAlbumsRowThree[i].classList.remove("show-front");
					allAlbumsRowThree[i].classList.remove("show-top");
					allContainersRowThree[i].classList.remove("zindex"+indexNumber);
					indexNumber++;
				};
				indexNumber=1;
			};
			indexNumber=10;
		}
		changeFocus(6);
		whichRow=2;
		changeFocus(6);
		whichRow=3;
		changeFocus(6);

			// topCube.classList.remove("show-back");showback is voorkant cdhoes
			// topCube.classList.remove("show-front");showfront is acterkantkant cdhoes
			// topCube.classList.add("show-top");	showtop is voorkant cdhoes beterzichtbaar

	// rowone mouseover
		// var funcNumber = 0;
		// for (i = 0; i < allAlbumsRowOne.length; i += 1) {
		// 	allAlbumsRowOne[i].onmouseover = function() {
		// 		changeFocus(funcNumber)
				
		// 	}
		// 	funcNumber++;		
		// };
		allAlbumsRowOne[0].onmouseover = function() {
			changeFocus(0)
		}
		allAlbumsRowOne[1].onmouseover = function() {
			changeFocus(1)
		}
		allAlbumsRowOne[2].onmouseover = function() {
			changeFocus(2)
		}
		allAlbumsRowOne[3].onmouseover = function() {
			changeFocus(3)
		}
		allAlbumsRowOne[4].onmouseover = function() {
			changeFocus(4)
		}
		allAlbumsRowOne[5].onmouseover = function() {
			changeFocus(5)
		}
		allAlbumsRowOne[6].onmouseover = function() {
			changeFocus(6)
		}
		allAlbumsRowOne[7].onmouseover = function() {
			changeFocus(7)
		}
		allAlbumsRowOne[8].onmouseover = function() {
			changeFocus(8)
		}
		allAlbumsRowOne[9].onmouseover = function() {
			changeFocus(9)
		}
	// rowtwo mouseovers
		allAlbumsRowTwo[0].onmouseover = function() {
			changeFocus(0)
		}
		allAlbumsRowTwo[1].onmouseover = function() {
			changeFocus(1)
		}
		allAlbumsRowTwo[2].onmouseover = function() {
			changeFocus(2)
		}
		allAlbumsRowTwo[3].onmouseover = function() {
			changeFocus(3)
		}
		allAlbumsRowTwo[4].onmouseover = function() {
			changeFocus(4)
		}
		allAlbumsRowTwo[5].onmouseover = function() {
			changeFocus(5)
		}
		allAlbumsRowTwo[6].onmouseover = function() {
			changeFocus(6)
		}
		allAlbumsRowTwo[7].onmouseover = function() {
			changeFocus(7)
		}
		allAlbumsRowTwo[8].onmouseover = function() {
			changeFocus(8)
		}
		allAlbumsRowTwo[9].onmouseover = function() {
			changeFocus(9)
		}

	// rowThree mouseovers
		allAlbumsRowThree[0].onmouseover = function() {
			changeFocus(0)
		}
		allAlbumsRowThree[1].onmouseover = function() {
			changeFocus(1)
		}
		allAlbumsRowThree[2].onmouseover = function() {
			changeFocus(2)
		}
		allAlbumsRowThree[3].onmouseover = function() {
			changeFocus(3)
		}
		allAlbumsRowThree[4].onmouseover = function() {
			changeFocus(4)
		}
		allAlbumsRowThree[5].onmouseover = function() {
			changeFocus(5)
		}
		allAlbumsRowThree[6].onmouseover = function() {
			changeFocus(6)
		}
		allAlbumsRowThree[7].onmouseover = function() {
			changeFocus(7)
		}
		allAlbumsRowThree[8].onmouseover = function() {
			changeFocus(8)
		}
		allAlbumsRowThree[9].onmouseover = function() {
			changeFocus(9)
		}
	}
resetCd();
// genre selector 

	var genreExpand=false;
	// var selectedGenre = document.querySelectorAll(".genremenuchoice>span")
	// var genreSelectable = document.querySelectorAll(".genremenu>span")  
	var genreMenu = document.querySelector(".genremenu")
	var genreMenuArrow = document.querySelector(".genremenuchoice>img")
	document.querySelector('.genremenuchoice').onclick = function() {
		toggleGenreMenu ();
		
	};
	var toggleGenreMenu = function () {
		if (genreExpand==false) {
			genreMenu.classList.remove("genremenucollapse");
			genreMenuArrow.classList.add("rotate")
			genreExpand=true;
		}
		else if (genreExpand==true) {
			genreMenu.classList.add("genremenucollapse")
			genreExpand=false;
			genreMenuArrow.classList.remove("rotate")
		};
	}
	// var addNoShow = function () {
	// 	for (i = 0; i < genreSelectable.length; i += 1) {
	// 		selectedGenre[i].classList.add("noshowgenre");

	// 	};
	// };	
	// genreSelectable[0].onclick = function() {
	// 	// addNoShow();
	// 	selectedGenre[0].classList.remove("noshowgenre")
	// 	toggleGenreMenu ();
	// }
	// genreSelectable[1].onclick = function() {
	// 	addNoShow();
	// 	selectedGenre[1].classList.remove("noshowgenre")
	// 	toggleGenreMenu ();
	// }
	// genreSelectable[2].onclick = function() {
	// 	addNoShow();
	// 	selectedGenre[2].classList.remove("noshowgenre")
	// 	toggleGenreMenu ();
	// }
	// genreSelectable[3].onclick = function() {
	// 	addNoShow();
	// 	selectedGenre[3].classList.remove("noshowgenre")
	// 	toggleGenreMenu ();
	// }
	// genreSelectable[4].onclick = function() {
	// 	addNoShow();
	// 	selectedGenre[4].classList.remove("noshowgenre")
	// 	toggleGenreMenu ();
	// }
	// genreSelectable[5].onclick = function() {
	// 	addNoShow();
	// 	selectedGenre[5].classList.remove("noshowgenre")
	// 	toggleGenreMenu ();
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

//rowSlider 
	var allRows = document.querySelectorAll(".cdrow") 	
	var cdrowone=1;
	var cdrowtwo=2;
	var cdrowthree=3;
	
	var alphabet = document.querySelectorAll(".alphabet span")
	alphabet[0].classList.add("chosenletter");
	var arrowImgOne = document.querySelector(".productmiddle> section:first-of-type>img:nth-of-type(1)")
	var arrowImgTwo = document.querySelector(".productmiddle> section:first-of-type>img:nth-of-type(2)")

	var changeRow = function (forwardorbackward) {
		removeRowclass()
		if (forwardorbackward=="forward") {
			cdrowone++
			cdrowtwo++
			cdrowthree++
		}
		else if (forwardorbackward=="backward") {
			cdrowone--
			cdrowtwo--
			cdrowthree--
		} 
		for (i = 0; i < cdrowone; i += 1) {
			allRows[i].classList.add("rowleft")
		};
		allRows[cdrowone].classList.add("rowOne");
		allRows[cdrowtwo].classList.add("rowTwo");
		allRows[cdrowthree].classList.add("rowThree");
		for (i = allRows.length-1; i > cdrowthree; i -= 1) {
			allRows[i].classList.add("rowright")
		};
		for (i = 0; i < alphabet.length; i += 1) {
			alphabet[i].classList.remove("chosenletter")
		};
		if (cdrowone==1) {
			arrowImgOne.classList.add("invisible")
		} 
		else if (cdrowone>1) {
			arrowImgOne.classList.remove("invisible")
		};
		if (cdrowthree==allRows.length-1) {
			arrowImgTwo.classList.add("invisible")
		}
		else if (cdrowthree<allRows.length-1) {
			arrowImgTwo.classList.remove("invisible")
		};
		switch (cdrowone) {
			case 1:
				alphabet[0].classList.add("chosenletter");
				break;
			case 2:
				alphabet[1].classList.add("chosenletter");
				break;
			case 3:
				alphabet[2].classList.add("chosenletter");
				break;
			case 4:
				alphabet[3].classList.add("chosenletter");
				break;
			case 5:
				alphabet[4].classList.add("chosenletter");
				break;
			case 6:
				alphabet[5].classList.add("chosenletter");
				break;
			case 7:
				alphabet[6].classList.add("chosenletter");
				break;
			case 8:
				alphabet[7].classList.add("chosenletter");
				break;
			case 9:
				alphabet[8].classList.add("chosenletter");
				break;
			case 10:
				alphabet[9].classList.add("chosenletter");
				break;
			case 11:
				alphabet[10].classList.add("chosenletter");
				break;
			case 12:
				alphabet[11].classList.add("chosenletter");
				break;
			case 13:
				alphabet[12].classList.add("chosenletter");
				break;
			case 14:
				alphabet[13].classList.add("chosenletter");
				break;
			case 15:
				alphabet[14].classList.add("chosenletter");
				break;
			case 16:
				alphabet[15].classList.add("chosenletter");
				break;
			case 17:
				alphabet[16].classList.add("chosenletter");
				break;
			case 18:
				alphabet[17].classList.add("chosenletter");
				break;
			case 19:
				alphabet[18].classList.add("chosenletter");
				break;
			case 20:
				alphabet[19].classList.add("chosenletter");
				break;
			case 21:
				alphabet[20].classList.add("chosenletter");
				break;
			case 22:
				alphabet[21].classList.add("chosenletter");
				break;
			case 23:
				alphabet[22].classList.add("chosenletter");
				break;
			case 24:
				alphabet[23].classList.add("chosenletter");
				break;
			case 25:
				alphabet[24].classList.add("chosenletter");
				break;
			case 26:
				alphabet[25].classList.add("chosenletter");
				break;				
		}
		
		resetCd();
	}

	var removeRowclass = function () {
		for (i = 0; i < allRows.length; i += 1) {
			allRows[i].classList.remove("rowleft");
			allRows[i].classList.remove("rowOne");
			allRows[i].classList.remove("rowTwo");
			allRows[i].classList.remove("rowThree");
			allRows[i].classList.remove("rowright");
		}

	}
	var arrowRowLeft = document.querySelector(".productmiddle> section:first-of-type>img:nth-of-type(1)")
	arrowRowLeft.onclick = function() {
		
		changeRow("backward")
	}
	var arrowRowRight = document.querySelector(".productmiddle> section:first-of-type>img:nth-of-type(2)")
	arrowRowRight.onclick = function() {
		
		changeRow("forward")
	}
	var alphaRowSlider = function(alphabetnumber){
		console.log("alp"+alphabetnumber)		
		while (cdrowone>alphabetnumber) {
			changeRow("backward")
		};
		while (cdrowone<alphabetnumber) {
			changeRow("forward")
		};		
	}
	// for (var i = 0; i < alphabet.length; i++) { argument op moment van klik word niet doorgestuurd
 //      alphabet[i].onclick = function() { alphaRowSlider(i);};
	// }
	alphabet[0].onclick = function() { alphaRowSlider(1);};
	alphabet[1].onclick = function() { alphaRowSlider(2);};
	alphabet[2].onclick = function() { alphaRowSlider(3);};
	alphabet[3].onclick = function() { alphaRowSlider(4);};
	alphabet[4].onclick = function() { alphaRowSlider(5);};
	alphabet[5].onclick = function() { alphaRowSlider(6);};
	alphabet[6].onclick = function() { alphaRowSlider(7);};
	alphabet[7].onclick = function() { alphaRowSlider(8);};
	alphabet[8].onclick = function() { alphaRowSlider(9);};
	alphabet[9].onclick = function() { alphaRowSlider(10);};
	alphabet[10].onclick = function() { alphaRowSlider(11);};
	alphabet[11].onclick = function() { alphaRowSlider(12);};
	alphabet[12].onclick = function() { alphaRowSlider(13);};
	alphabet[13].onclick = function() { alphaRowSlider(14);};
	alphabet[14].onclick = function() { alphaRowSlider(15);};
	alphabet[15].onclick = function() { alphaRowSlider(16);};
	alphabet[16].onclick = function() { alphaRowSlider(17);};
	alphabet[17].onclick = function() { alphaRowSlider(18);};
	alphabet[18].onclick = function() { alphaRowSlider(19);};
	alphabet[19].onclick = function() { alphaRowSlider(20);};
	alphabet[20].onclick = function() { alphaRowSlider(21);};
	alphabet[21].onclick = function() { alphaRowSlider(22);};
	alphabet[22].onclick = function() { alphaRowSlider(23);};
	alphabet[23].onclick = function() { alphaRowSlider(24);};
	alphabet[24].onclick = function() { alphaRowSlider(25);};
	alphabet[25].onclick = function() { alphaRowSlider(26);};
	
