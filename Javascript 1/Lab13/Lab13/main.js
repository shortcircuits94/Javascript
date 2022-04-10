var div0 = document.getElementById("c0");
var div1 = document.getElementById("c1");
var div2 = document.getElementById("c2");
var div3 = document.getElementById("c3");
var div4 = document.getElementById("c4");
var div5 = document.getElementById("c5");
var div6 = document.getElementById("c6");
var div7 = document.getElementById("c7");
var div8 = document.getElementById("c8");
var ids = document.getElementsByTagName("td"); 
var pX = document.getElementById("X");
var pO = document.getElementById("O");

function init()
{
	pX.className = "current-player";
	
	for(i=0;i<9;i++)
	{
		ids[i].setAttribute("onclick","squareClicked(this);");
	}
}

function newGame()
{
	div0.innerHTML = "";
	div1.innerHTML = "";
	div2.innerHTML = "";
	div3.innerHTML = "";
	div4.innerHTML = "";
	div5.innerHTML = "";
	div6.innerHTML = "";
	div7.innerHTML = "";
	div8.innerHTML = "";
	
	div0.style.backgroundColor = "white";
	div1.style.backgroundColor = "white";
	div2.style.backgroundColor = "white";
	div3.style.backgroundColor = "white";
	div4.style.backgroundColor = "white";
	div5.style.backgroundColor = "white";
	div6.style.backgroundColor = "white";
	div7.style.backgroundColor = "white";
	div8.style.backgroundColor = "white";
}

function squareClicked(sqr)
{
	if(pX.className == "current-player")
	{
		pX.className = "";
		pO.className = "current-player";	
		if(sqr.className == "X-marker")
		{
			sqr.className="X-Marker"	}
	}
	else if (pO.className == "current-player")
	{
		pX.className = "current-player";
		pO.className = "";
		if(sqr.className== "O-marker")
		{
			sqr.className="O-marker"
		}
	}
}