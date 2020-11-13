function saikoro() {

	// 1から6までの適当な数字 
	var sai = Math.floor(Math.random() * 4) + 1;
	var elem = document.getElementById("result");
	
	document.getElementById("num").innerHTML = sai; //値の出力
	
	switch(sai)	{
		case 1:
			elem.src = "img/kikuchi.jpg";
			elem.alt = "菊池涼介選手"
			
			break;
        case 2:
			elem.src = "img/blue.jpg";
			elem.alt = "ブルーインパルス"
			break;
        case 3:
			elem.src = "img/bike.jpg";
			elem.alt = "茂木サーキット"
			break;
		case 4:
			elem.src = "img/saikoro.jpg";
			elem.alt = "水曜どうでしょう"
			break;
		}
}

/* 起動時の処理 */
window.onload = function(){
	saikoro();
}