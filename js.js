/* Variáveis */
var sizeX, // Largura do jogo
	sizeY, // Altura do jogo
	fishCoordX, // Coordenada X do peixe
	fishCoordY, // Coordenada Y do peixe
	squidCoordX, // Coordenada X da lula
	squidCoordY, // Coordenada Y da lula
	bossCoordX, // Coordenada X do boss
	bossCoordY, // Coordenada Y do boss
	pinguimCoordX, // Coordernada X do pinguim
	pinguimCoordY, // Coordernada Y do pinguim
	speed, // Velocidade do pinguim
	tempo, // Duração do jogo
	score, // Pontuação
	audiotheme; // Música do Rocky
	
window.onload = function(){console.log("load");}

/* Início do jogo */
function inicializarGame(){
	document.getElementById("divGameOver").style.display ="none";
	document.getElementById("imgStartGame").style.display ="none";
	inicializarVariaveisGlobais();
	inicializarPinguim();
	inicializarPeixe();
	inicializarLula();
	inicializarBoss();
	inicializarScore();
	
	var cronometro = document.querySelector('#cronometro');
    startTimer(tempo, cronometro);
    audiotheme = new Audio('theme.mp3');
	audiotheme.play();}

/* Final do jogo */
function finalizarGame(){
	document.getElementById('fish').style.display = "none";;
	document.getElementById('lula').style.display = "none";;
	document.getElementById('pinguim').style.display = "none";;
	document.getElementById("divGameOver").style.display ="block";
	var audiogameover = new Audio('pacman.mp3');
		audiogameover.play();
	audiotheme.pause(); }

/* 	Pontuação */
function inicializarScore(){
	document.getElementById("totalScore").innerHTML = 0;
	document.getElementById("bestScore").innerHTML = 0;
	if (typeof(Storage) !== "undefined") { // Verifica se o navegador tem suporte para guardar informações nele
    	if (localStorage.getItem("score")) {
    		document.getElementById("bestScore").innerHTML = localStorage.getItem("score");
    	}
    }
}

/* 	Variáveis Globais */
function inicializarVariaveisGlobais(){
	sizeX = document.getElementById('MapaDoJogo').width - 20; 
	sizeY = document.getElementById('MapaDoJogo').height - 20;
	pinguimCoordX = 400;
	pinguimCoordY = 450;
	speed = 15;
	tempo = 70 * 1;
	score = 0;
}

/*  Peixe */
function inicializarPeixe(){
	fishCoordX = Math.floor(Math.random() * sizeX) + 1;
	fishCoordY = Math.floor(Math.random() * sizeY) + 1;
	fishCoordX = fishCoordX - (fishCoordX % speed);
	fishCoordY = fishCoordY - (fishCoordY % speed);
	
	var fish = document.getElementById('fish');
	fish.style.display = "block";
	fish.style.left = fishCoordX + "px";
	fish.style.top = fishCoordY + "px";}

/*  Lula */
function inicializarLula(){
	squidCoordX = Math.floor(Math.random() * sizeX) + 1;
	squidCoordY = Math.floor(Math.random() * sizeY) + 1;
	squidCoordX = squidCoordX - (squidCoordX % speed);
	squidCoordY = squidCoordY - (squidCoordY % speed);
	
	var squid = document.getElementById('lula');
	squid.style.display = "block";
	squid.style.left = squidCoordX + "px";
	squid.style.top = squidCoordY + "px";}
	
/*  BOSS */
function inicializarBoss(){
	setTimeout(inicializarBoss, 5000);
	bossCoordX = Math.floor(Math.random() * sizeX) + 1;
	bossCoordY = Math.floor(Math.random() * sizeY) + 1;
	bossCoordX = bossCoordX - (bossCoordX % speed);
	bossCoordY = bossCoordY - (bossCoordY % speed);
			
	var boss = document.getElementById('boss');
	boss.style.display = "block";
	boss.style.left = bossCoordX + "px";
	boss.style.top = bossCoordY + "px";}

/* Pinguim */
/*      Copyright (C) 2015  Carlos J. Costa        */
function inicializarPinguim(){
	var pinguim = document.getElementById('pinguim');
	pinguim.style.display = "block";
	pinguim.style.top = pinguimCoordY + "px";
	pinguim.style.left = pinguimCoordX + "px";
	document.onkeydown = function(e){

		// Andar para cima
		if(e.keyCode == 38){
			pinguimCoordY -= speed;
			pinguim.style.top = pinguimCoordY + 'px';
			var myclass = new Array('back-right','back-stand','back-left');
			var n = Math.round(Math.random()*2);
			pinguim.setAttribute('class',myclass[n]);}
		// Andar para baixo
		if(e.keyCode == 40){
			pinguimCoordY += speed;
			pinguim.style.top = pinguimCoordY + 'px';
			var myclass = new Array('front-right','front-stand','front-left');
			var n = Math.round(Math.random()*2);
			pinguim.setAttribute('class',myclass[n]);}
		// Andar para a esquerda
		if(e.keyCode == 37){
			pinguimCoordX -= speed;
			pinguim.style.left = pinguimCoordX + 'px';
			var myclass = new Array('left-right','left-stand','left-left');
			var n = Math.round(Math.random()*2);
			pinguim.setAttribute('class',myclass[n]);}
		// Andar para a direita
		if(e.keyCode == 39){
			pinguimCoordX += speed;
			pinguim.style.left = pinguimCoordX + 'px';
			var myclass = new Array('right-right','right-stand','right-left');
			var n = Math.round(Math.random()*2);
			pinguim.setAttribute('class',myclass[n]);}

		if (pinguimCoordX > sizeX) {
		pinguimCoordX -= speed;}
		if (pinguimCoordX < 0) {
			pinguimCoordX += speed;}
		if (pinguimCoordY > sizeY) {
			pinguimCoordY -= speed;}
		if (pinguimCoordY < 0) {
			pinguimCoordY += speed;}
/* Pinguim - Copyright (C) 2015  Carlos J. Costa      */
		
		// Depois de andar, verifica se o pinguim está na mesma posição do peixe
		if ((pinguimCoordX >= fishCoordX - 15 && pinguimCoordX <= fishCoordX + 15) && 
			(pinguimCoordY >= fishCoordY - 15 && pinguimCoordY <= fishCoordY + 15)){
			// Depois de apanhar o peixe
			var audiopickup = new Audio('point.mp3');
			audiopickup.play();
			score++;
			inicializarPeixe();
			document.getElementById('totalScore').innerHTML = score;}
			
		// Depois de andar, verifica se o pinguim está na mesma posição da lula
		if ((pinguimCoordX >= squidCoordX - 20 && pinguimCoordX <= squidCoordX + 20) && 
			(pinguimCoordY >= squidCoordY - 20 && pinguimCoordY <= squidCoordY + 20)){
			// Depois de apanhar a lula
			var audiopickup = new Audio('point.mp3');
			audiopickup.play();
			score++;
			inicializarLula();
			document.getElementById('totalScore').innerHTML = score;}
			
		// Depois de andar, verifica se o pinguim está na mesma posição do boss
		if ((pinguimCoordX >= bossCoordX - 100 && pinguimCoordX <= bossCoordX + 90) && 
			(pinguimCoordY >= bossCoordY - 100 && pinguimCoordY <= bossCoordY + 90)){
			// Depois de apanhar o boss
			var audiolostpoint = new Audio('lostpoint.mp3');
			audiolostpoint.play();
			score--; //Perde pontos ao lutar com o boss
			inicializarBoss();
			document.getElementById('totalScore').innerHTML = score;
		}
	}
}

/* Cronometro */
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var intervalo = setInterval(function () {
        minutes = parseInt(timer / 60, 0);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            clearInterval(intervalo);
            finalizarGame();
            if (typeof(Storage) !== "undefined") { // Verifica se o browser permite guardar info
            	if (!localStorage.getItem("score") || (localStorage.getItem("score") && (localStorage.getItem("score") < score))) {
            		localStorage.setItem("score", score);
            	}
            }
        }
    }, 1000);
}