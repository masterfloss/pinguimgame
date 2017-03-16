    	var MaxHeight, MaxWidth, YPos, XPos, interval1, interval2, interval3, interval4, moveTo;
    	var T1X1;
    	var T1Y1;
    	var T2X2;
    	var T2Y2;
    	var T3X3;
	var T3Y3;
	var T4X4;
	var T4Y4;
	var T5X5;
	var T5Y5;
	var T6X6;
	var T6Y6;
	var T7X7;
	var T7Y7;
	var B1X1;
	var B1Y1;
	var B2X2;
	var B2Y2;
	var B3X3;
	var B3Y3;
	var B4X4;
	var B4Y4; 
// Para activar e desactivar tesouros, contar tesouros que faltam e vidas
	var Score = 0;
	var tesouro1 = 1;
	var tesouro2 = 1;
	var tesouro3 = 1;
	var tesouro4 = 1;
	var tesouro5 = 1;
	var tesouro6 = 1;
	var tesouro7 = 1; 
	var totaltesouros = 7;
	var vidas = 3;
	
	
/* função para recomeçar */	
function restart() {	
	Score = 0;
	tesouro1 = 1;
	tesouro2 = 1;
	tesouro3 = 1;
	tesouro4 = 1;
	tesouro5 = 1;
	tesouro6 = 1;
	tesouro7 = 1; 
	totaltesouros = 7;
	vidas = 3;
 	
}	

/* Funções para definir as distancias dos bandidos ao qual o pinguim perde */ 	
function dist(B1X1,B1Y1,XPos,YPos) {

	var dist = Math.sqrt(Math.pow((B1X1-XPos),2)+Math.pow((B1Y1-YPos),2));
	return dist;
}
function dist2(B2X2,B2Y2,XPos,YPos) {

	var dist = Math.sqrt(Math.pow((B2X2-XPos),2)+Math.pow((B2Y2-YPos),2));
	return dist;
}
function dist3(B3X3,B3Y3,XPos,YPos) {

	var dist = Math.sqrt(Math.pow((B3X3-XPos),2)+Math.pow((B3Y3-YPos),2));
	return dist;
}
function dist4(B4X4,B4Y4,XPos,YPos) {

	var dist = Math.sqrt(Math.pow((B4X4-XPos),2)+Math.pow((B4Y4-YPos),2));
	return dist;
} 

/* alterado para validar apenas se a posição onde se encontra é igual à posição definida do tesouro*/
function verposicao() {

	if(T1X1 == XPos && T1Y1 == YPos && tesouro1 == 1)  { 
		Score++;
	 	tesouro1 = 0;
		totaltesouros--;
	}
	if(T2X2 == XPos && T2Y2 == YPos && tesouro2 == 1)  { 
		Score++;
		tesouro2 = 0;
		totaltesouros--;
	}
	if(T3X3 == XPos && T3Y3 == YPos && tesouro3 == 1)  { 
		Score++;
		tesouro3 = 0;
		totaltesouros--;
	}
	if(T4X4 == XPos && T4Y4 == YPos && tesouro4 == 1)  { 
		Score++;
		tesouro4 = 0;
		totaltesouros--;
	}
	if(T5X5 == XPos && T5Y5 == YPos && tesouro5 == 1)  { 
		Score++;
		tesouro5 = 0;
		totaltesouros--;
	}
	if(T6X6 == XPos && T6Y6 == YPos && tesouro6 == 1)  { 
		Score++;
		tesouro6 = 0;
		totaltesouros--;
	}
	if(T7X7 == XPos && T7Y7 == YPos && tesouro7 == 1)  { 
		Score++;
		tesouro7 = 0;
		totaltesouros--;
	}	
	
	if(dist(B1X1,B1Y1,XPos,YPos) < 20) {
		Score--;
		stop();
		init();
	}
	if(dist2(B2X2,B2Y2,XPos,YPos) < 20){
		Score--;
		stop();
		init();
	}
	if(dist3(B3X3,B3Y3,XPos,YPos) < 20){
		Score--;
		stop();
		init();
	}	
	if(dist4(B4X4,B4Y4,XPos,YPos) < 20){
		Score--;
		stop();
		init();
	}
		
	if(Score == -1) {
		vidas--;
		Score = 0;
		init();
	}	
}

/* função para a definir as posições iniciais dos objectos */	
function init(){
	
	// Posição inicial do pinguim
	YPos = -550;
	XPos = -550;
	
	// Posição dos Tesouros	
	T1X1 = -308;
	T1Y1 = -365;

	T2X2 = -316;
	T2Y2 = -572;
	
	T3X3 = -314;
	T3Y3 = -569;
	
	T4X4 = -728;
	T4Y4 = -340;
	
	T5X5 = -629;
	T5Y5 = -226;
	
	T6X6 = -503;
	T6Y6 = -42;
	
	T7X7 = -125;
	T7Y7 = -1;
	
	// Posição Inicial dos Bandidos
	B1X1 = -367;
	B1Y1 = -553;
	
	B2X2 = -696;
	B2Y2 = -175;
	
	B3X3 = -179;
	B3Y3 = -204;
	
	B4X4 = -369;
	B4Y4 = -553;
	
	toMove = document.getElementById("scroller");
	toMove.style.backgroundPosition = XPos + "px "+YPos + "px";
	document.getElementById('mensagem').innerHTML = ' Score: ' + Score;
}

/*Função para definir os limites por onde o pinguim anda automáticamente*/
function move(){
	if ((YPos >= 0)||(YPos <= -700)||(XPos >= 0)||(XPos >= MaxHeight)) {
	    stop();
	}
	
	toMove = document.getElementById("scroller");
	toMove.style.backgroundPosition = XPos + "px "+YPos + "px"
	verposicao();
	document.getElementById('mensagem').innerHTML = ' Score: '+Score +' vidas: '+vidas +' Total Tes: '+totaltesouros;
	document.getElementById("pos").innerHTML=toMove.style.backgroundPosition;
	valdistancia();
	if (vidas == 0)
	    restart();  
};

function valdistancia() {
	
	if (tesouro1 == 1) {
		DistX1 = Math.round(Math.sqrt(Math.pow((T1X1-XPos),2)));
		DistY1 = Math.round(Math.sqrt(Math.pow((T1Y1-YPos),2)));
		document.getElementById("distancia").innerHTML='Tesouro 1 : '+DistX1 + ' em X e ' +DistY1 +' em Y';
	}
	if (tesouro2 == 1) {
		DistX2 = Math.round(Math.sqrt(Math.pow((T2X2-XPos),2)));
		DistY2 = Math.round(Math.sqrt(Math.pow((T2Y2-YPos),2)));
		document.getElementById("distancia1").innerHTML='Tesouro 2 : '+DistX2 + ' em X e ' +DistY2 +' em Y';
	}
	if (tesouro3 == 1) {
		DistX3 = Math.round(Math.sqrt(Math.pow((T3X3-XPos),2)));
		DistY3 = Math.round(Math.sqrt(Math.pow((T3Y3-YPos),2)));
		document.getElementById("distancia2").innerHTML='Tesouro 3 : '+DistX3 + ' em X e ' +DistY3 +' em Y';
	}
	if (tesouro4 == 1) {
		DistX4 = Math.round(Math.sqrt(Math.pow((T4X4-XPos),2)));
		DistY4 = Math.round(Math.sqrt(Math.pow((T4Y4-YPos),2)));
		document.getElementById("distancia3").innerHTML='Tesouro 4 : '+DistX4 + ' em X e ' +DistY4 +' em Y';
	}
	if (tesouro5 == 1) {
		DistX5 = Math.round(Math.sqrt(Math.pow((T5X5-XPos),2)));
		DistY5 = Math.round(Math.sqrt(Math.pow((T5Y5-YPos),2)));
		document.getElementById("distancia4").innerHTML='Tesouro 5 : '+DistX5 + ' em X e ' +DistY5 +' em Y';
	}
	if (tesouro6 == 1) {
		DistX6 = Math.round(Math.sqrt(Math.pow((T6X6-XPos),2)));
		DistY6 = Math.round(Math.sqrt(Math.pow((T6Y6-YPos),2)));
		document.getElementById("distancia5").innerHTML='Tesouro 6 : '+DistX6 + ' em X e ' +DistY6 +' em Y';
	}
	if (tesouro7 == 1) {	
		DistX7 = Math.round(Math.sqrt(Math.pow((T7X7-XPos),2)));
		DistY7 = Math.round(Math.sqrt(Math.pow((T7Y7-YPos),2)));
		document.getElementById("distancia6").innerHTML='Tesouro 7 : '+DistX7 + ' em X e ' +DistY7 +' em Y';
	}
}

/* Funções de movimento do pinguim (baixo, cima, direita, esquerda)*/
function moveBx() {
	var myclass = new Array('front-right','front-stand','front-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	YPos--;   
	move();
};
function moveCm() {
	var myclass = new Array('back-right','back-stand','back-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	YPos++;
	move();
};
function moveDir() {
	var myclass = new Array('right-right','right-stand','right-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	XPos--;
	move();
	
};
function moveEsq() {
	var myclass = new Array('left-right','left-stand','left-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	XPos++;
	move();
};

function moveB() {
	stop(); 
	interval1 = setInterval(moveBx, 50);
};
function moveC() {
	stop();
	interval3 = setInterval(moveCm, 50);
};
function moveD() {
	stop();	
	interval2 = setInterval(moveDir, 50);
};
function moveE() {
	stop();
	interval4 = setInterval(moveEsq, 50);
};
function stop() {
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(interval3);
	clearInterval(interval4);
};
window.onload =init;

function Key(e) {
    if (e.keyCode===37) moveE();
    if (e.keyCode===38) moveC();
    if (e.keyCode===39) moveD();
    if (e.keyCode===40) moveB();
}