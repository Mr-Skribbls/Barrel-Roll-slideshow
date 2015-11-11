var list = document.getElementsByClassName('heroPic');
var i = 1;
var s = 3000;
var t = setInterval(function() {changePicture()}, s);
	function changePicture() {
		if(i < 6) {
			show("show" + i);
			i++
		}
		else {
			show("show" + i);
			i = 1;
		}
	}
	function selectionHover(a,b) {
		clearInterval(t);
		show(a);	
	}
	function selectionUnhover(a) {
		if(a<6) {
			i = a + 1;
		}
		else {
			i = 1;
		}
		t = setInterval(function() {changePicture()}, s);
	}

		function barrelCalc() {
			var w = 780; //width
			var h = 280; //height
			var radian60 = 60 * (Math.PI / 180);
			var radian30 = 30 * (Math.PI / 180);
			var a = h * Math.sin(radian60);
			var b = h * Math.sin(radian30);
			var A = h;
			var Az = a;
			var Bz = Az / 2;
			var By = (A / 2) + (b / 2);
			var Cz = -Bz;
			var Cy = By;
			var Dz = -Az;
			var Fz = (Az / 2);
			var Fy = -(A / 2) + -(b / 2);
			var Ez = -Fz;
			var Ey = Fy;

			var heroPic1 = document.getElementById('heroPic1');
			var heroPic2 = document.getElementById('heroPic2');
			var heroPic3 = document.getElementById('heroPic3');
			var heroPic4 = document.getElementById('heroPic4');
			var heroPic5 = document.getElementById('heroPic5');
			var heroPic6 = document.getElementById('heroPic6');

			heroPic1.style.transform = "translateZ(" + Az + "px)rotateY(0deg)";
			heroPic2.style.transform = "translateZ(" + Bz + "px)translateY(" + By + ")rotateX(300deg)";
			heroPic3.style.transform = "translateZ(" + Cz + "px)translateY(" + Cy + ")rotateX(240deg)";
			heroPic4.style.transform = "translateZ(" + Dz + "px)translateY(0px)rotateX(180deg)";
			heroPic5.style.transform = "translateZ(" + Ez + "px)translateY(" + Ey + ")rotateX(120deg)";
			heroPic6.style.transform = "translateZ(" + Fz + "px)translateY(" + Fy + ")rotateX(60deg)";
		}

		function show(a) {
			document.getElementById('wrap').className=a;
		} 

navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\bOPR\/(\d+)/)
        if(tem!= null) return 'Opera '+tem[1];
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();

	function browserTest() {
		var goodBrowsers = ['Chrome 37','Chrome 36'];
		var a;
		if(isInArray(navigator.sayswho,goodBrowsers)) {
			putCss();
		}
		else {
			a=2;
		}
	}

	function putCss() {
		var headID = document.getElementsByTagName('head')[0];
		var cssNode = document.createElement('link');
		cssNode.type = 'text/css';
		cssNode.href = 'ieMovingHero.css';
		headID.appendChild(cssNode);
	}

	function isInArray(value, array) {
		return array.indexOf(value) > -1;
	}

		window.onload = function() {
			barrelCalc();
			browserTest();
		}