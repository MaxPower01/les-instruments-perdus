/* Javascript */
// Le script est sous-divisé en 4 sections : INTRODUCTION, LEVEL 1, LEVEL 2, LEVEL 3 et CONCLUSION
// Pour les trouver rapidement, taper SECTION et LEVEL 1 dans la recherche
// Pour éviter un bug de ID non-existant entre la page index et la page du jeu, si la variable introFuction est existante, donne lui le addEventListener
var introFunction = document.getElementById("intro_message_box");
if (introFunction){
	introFunction.addEventListener("click", introMessage);
}
// Variables globales du script
var answer;
var bellLevel = 0;
var decisionText;
var explication = 1;
var textIntro;
var playerName;
var playerAge;
var playerLesson;
var textLevel1 = 0;
var textLevel2 = 0;
var textLevel3 = 0;
var textConclusion = 0;
var victoryLevel1 = 0;
var victoryLevel2 = 0;
var victoryLevel3 = 0;
var level1 = 0;
var level2 = 0;
var level3 = 0;
var timeLevel1 = 60;
var timeLevel2 = 60;
var timeLevel3 = 60;
var warningLevel1 = 0;
var warningLevel2 = 0;
var warningLevel3 = 0;
var transitionLevel1 = 0;
var transitionLevel2 = 0;
var transitionLevel3 = 0;
// Music player dans niveau 1, 2, 3 et conclusion
document.getElementById("music_player").addEventListener("click", playMusic);
var backgroundMusic = document.getElementById("background_music");
function playMusic() {
	if (backgroundMusic.paused) {
		backgroundMusic.play() ;
		document.getElementById("play_icon").style.display = "none";
		document.getElementById("pause_icon").style.display = "block";
	}
	else { 
		backgroundMusic.pause() ;
		document.getElementById("pause_icon").style.display = "none";
		document.getElementById("play_icon").style.display = "block";
	}
}
// SECTION INTRODUCTION
// Les commentaires sont principalement situés dans les sections d'introduction et du niveau 1 puisque les niveau 2 et 3 sont très similaires au niveau 1
// Dialogue d'introduction
function introMessage() {
	if (explication === 1) {
		textIntro = "...HICK ! Ouin... J'suis tellement saoûl en c'moment que... j'sais même plus quelles guitares sont... à moi.. pis quelles sont... à Kirk...";
		document.getElementById("intro_message_text").textContent = textIntro;
		explication++;
	}
	else if (explication === 2) {
		textIntro = "...Ça fait que j'va avoir besoin d'toé mon ami... Pour... Pour... HICK ! Pour m'aider à les retrouver...";
		document.getElementById("intro_message_text").textContent = textIntro;
		explication++;
	}
	else if (explication === 3) {
		textIntro = "Fak qu'est-ce que... Qu'est-ce que t'en dit mon ami... mon MEILLEUR ami !";
		document.getElementById("intro_message_text").textContent = textIntro;
		explication++;
	}
	else if (explication === 4) {
		textIntro = "Depuis le temps qu'on se connaît tu... Tu peux pas me refuser une faveur comme celle là ! HICK ! Attend un peu... t'es qui toé déjà ?";
		document.getElementById("intro_message_text").textContent = textIntro;
		explication++;
	}
	// Confirmation du jouer s'il veut ou non participer au jeu
	else if (explication === 5) {
		if (confirm("À cet instant, tu te dois de faire un choix crucial : Aider le chanteur saoûl de Metallica à démêler les instruments ou lui tourner le dos et continuer ton chemin comme si de rien était. Que choisis-tu ?") === true) {
			decisionText = "Yes ! J'le savais que tu me laisserais pas tomber... Mais avant de continuer faut que... faut que j'vérifie quelque chose... Mettons pour voir si t'es un vrai fan...";
			document.getElementById("intro_message_text").textContent = decisionText;
			explication++;
		}
		// S'il ne veut pas participer, GAME OVER
		else {
			decisionText = "Come on... Qu'est-ce que tu veux que j'fasse sans toé...";
			document.getElementById("intro_message_text").textContent = decisionText;
			document.getElementById("intro_message_box").style.pointerEvents = "none";
			document.getElementById("intro_message_box").style.opacity = "1";
			setTimeout(function() {
				document.getElementById("intro_message_wrapper").style.display = "none";
				document.getElementById("wrapper_intro").addEventListener("click", tryAgainIntroduction);
				document.getElementById("wrapper_intro").style.backgroundImage = "url(images/background-game-over.jpg)";	
				document.getElementById("wrapper_intro").style.cursor = "pointer";	
			}, 3000);
		}
	}
	else if (explication === 6) {
		decisionText = "Pis c'est pas parce que j'suis saoûl que j'te demande ça... HICK ! On juge pas ! Mais... C'est quoi mon nom ..?";
		document.getElementById("intro_message_text").textContent = decisionText;
		explication++;
	}
	// Question permettant l'accès au jeu selon la réponse
	else if (explication === 7){
		var metallicaSingerName = prompt("Quel est le nom de l'homme se trouvant devant toi en implorant ton aide ? Petit indice... C'est le chanteur de Metallica. P.S. Fait attention à ton ortographe ! Et n'écrit surtout pas ton propre nom...");
		// Bonne réponse
		if (metallicaSingerName === "James Hetfield") {
			answer = "Alright ! Let's go avant que... le... visage ..?  Non... le CONCERT ! Commence... Ou que je perde connaissance... Mais il me faudrait de l'encouragement avant... Du genre une bonne toune de Metallica qui mettrait de l'ambiance...";
			explication++;
		}
		// Variantes selon mauvaise réponse ou absence de réponse
		else if (metallicaSingerName === "Mathieu Gagnon" || metallicaSingerName === "Didier Belzile" || metallicaSingerName === "Guillaume Larouche") {
			answer = "Coudon t'es tu saoûl toi aussi ?! Lit la question au complet avant de répondre ..!";
		}
		else if (metallicaSingerName === "Johnny Bravo") {
			answer = "Pourquoi tout le monde pense que j'suis Johnny Bravo ?! J'suis James Hetfield Cal*ss ! Pas Johnny Bravo !!!";
		}
		else if (metallicaSingerName === null || metallicaSingerName === "") {
			answer = "WTF ..? J'suis pas assez... HICK ! Cool pour mériter ton aide ..? Bon j'vais aller m'acheter un autre 6-pack... HICK !";
		}
		else {
			answer = "WTF t'es tu dyslexique dude ?! Excuse moi... c'est l'alcool qui parle...";
		}
		document.getElementById("intro_message_text").textContent = answer;
	}
	else if (explication === 8) {
		document.getElementById("intro_message_box").style.display = "none";
		document.getElementById("link_to_game").style.display = "block";
		alert("Fait sonner la cloche 2 fois pour démarrer la musique et commencer le niveau 1");
		document.getElementById("image_bell").addEventListener('click', goToLevel1);
		document.getElementById("intro_message_box").removeEventListener('click', introMessage);
	}
}
// Fonction permettant de faire sonner la cloche 2 fois pour accéder au niveau 1
function goToLevel1() {
	var bellSound = document.getElementById("audio_bell");
	bellSound.play() ;
	document.getElementById("image_bell").removeEventListener('click', goToLevel1);
	bellLevel++;
	if (bellLevel === 1){
		document.getElementById("intro_message_box").style.display = "block";
		document.getElementById("intro_message_text").textContent = "Yeah ! Continue !";
	}
	else if (bellLevel >= 2){
		document.getElementById("intro_message_text").textContent = "Alright, let's go dude !";
		document.getElementById("image_bell").removeEventListener('click', goToLevel1);
		setTimeout(function() {
			window.location.href = "jeu.html";
		}, 3000);
	}
	setTimeout(function() {
		document.getElementById("image_bell").addEventListener('click', goToLevel1);
	}, 4000);
}
// SECTION LEVEL 1
// Message d'intro du niveau 1
setTimeout (function() {
	document.getElementById("james_message_box_level_1").style.display = "block";
	document.getElementById("james_message_level_1").textContent = "Y'er supposé avoir 3 guitares à moi là dedans... J'pense ..? Fouille pis vient m'ler donner après ! J'te donne 60 secondes ou jusqu'à c'que je tombe...";
	document.getElementById("james_message_box_level_1").addEventListener("click", level1Message);
	textLevel1++;
}, 1500);
// Cliquer sur le dialogue permet de débutter le jeu
function level1Message() {
	if (textLevel1 === 1) {
		document.getElementById("james_message_level_1").textContent = "Let's go !!";
		document.getElementById("james_message_box_level_1").removeEventListener("click", level1Message);
		//Délai de 2 secondes, puis le jeu commence
		setTimeout(function() {
			document.getElementById("james_message_box_level_1").style.display = "none";
			document.getElementById("timer_level_1").style.display = "block";
			// Assignation des premiers Events aux ID des images des guitares qui deviennent cliquables seulement lorsque le délai est passé
			document.getElementById("guitar1").addEventListener("click", guitarTrue1);
			document.getElementById("guitar2").addEventListener("click", guitarFalse2);
			document.getElementById("guitar3").addEventListener("click", guitarFalse3);
			document.getElementById("guitar4").addEventListener("click", guitarTrue4);
			document.getElementById("guitar5").addEventListener("click", guitarTrue5);
			// Chronomètre de 60 secondes pour trouver toutes les guitares, sinon GAME OVER
			setInterval(function() {
				if (timeLevel1 === 0){
					if (victoryLevel1 > 0){
						return;
					}
					document.getElementById("container_level_1").style.display = "none";
					document.getElementById("music_player").style.display = "none";
					document.getElementById("wrapper_level_1").style.backgroundImage = "url('images/background-game-over.jpg')";
					document.getElementById("wrapper_level_1").addEventListener("click", tryAgain);
					document.getElementById("wrapper_level_1").style.cursor = "pointer";
				}
				else {
					timeLevel1--;
					document.getElementById("timer_level_1").textContent = timeLevel1;
				}
			}, 1000);
		}, 2000);
	}
}
// Fonctions permettant d'ajouter ou de retirer des instruments à l'inventaire
function guitarTrue1() {
	document.getElementById("guitar1").style.display = "none";
	document.getElementById("inventory_guitar1").src = "images/guitar1.png";
	document.getElementById("inventory_guitar1").style.display = "block";
	level1++;
	document.getElementById("inventory_guitar1").addEventListener("click", removeGuitarTrue1);
	// Ajouter cet EventListener dans chacune des fonctions de guitare permet d'activer les indices seulement si le joueur a essayé de récupérer un instrument
	document.getElementById("james_level_1").addEventListener("click", warningOrVictoryLevel1);
	document.getElementById("inventory_box_level_1").style.display = "block";
	// Rend James Cliquable seulement lorsque les indices sont disponibles
	document.getElementById("james_level_1").style.cursor = "pointer";
}
function removeGuitarTrue1() {
	document.getElementById("guitar1").style.display = "block";
	document.getElementById("inventory_guitar1").style.display = "none";
	level1--;
	document.getElementById("guitar1").addEventListener("click", guitarTrue1);
}
function guitarFalse2() {
	document.getElementById("guitar2").style.display = "none";
	document.getElementById("inventory_guitar2").src = "images/guitar2.png";
	document.getElementById("inventory_guitar2").style.display = "block";
	level1--;
	document.getElementById("inventory_guitar2").addEventListener("click", removeGuitarFalse2);
	document.getElementById("james_level_1").addEventListener("click", warningOrVictoryLevel1);
	document.getElementById("inventory_box_level_1").style.display = "block";
	document.getElementById("james_level_1").style.cursor = "pointer";
}
function removeGuitarFalse2() {
	document.getElementById("guitar2").style.display = "block";
	document.getElementById("inventory_guitar2").style.display = "none";
	level1++;
	document.getElementById("guitar2").addEventListener("click", guitarFalse2);
}
function guitarFalse3() {
	document.getElementById("guitar3").style.display = "none";
	document.getElementById("inventory_guitar3").src = "images/guitar3.png";
	document.getElementById("inventory_guitar3").style.display = "block";
	level1--;
	document.getElementById("inventory_guitar3").addEventListener("click", removeGuitarFalse3);
	document.getElementById("james_level_1").addEventListener("click", warningOrVictoryLevel1);
	document.getElementById("inventory_box_level_1").style.display = "block";
	document.getElementById("james_level_1").style.cursor = "pointer";
}
function removeGuitarFalse3() {
	document.getElementById("guitar3").style.display = "block";
	document.getElementById("inventory_guitar3").style.display = "none";
	level1++;
	document.getElementById("guitar3").addEventListener("click", guitarFalse3);
}
function guitarTrue4() {
	document.getElementById("guitar4").style.display = "none";
	document.getElementById("inventory_guitar4").src = "images/guitar4.png";
	document.getElementById("inventory_guitar4").style.display = "block";
	level1++;
	document.getElementById("inventory_guitar4").addEventListener("click", removeGuitarTrue4);
	document.getElementById("james_level_1").addEventListener("click", warningOrVictoryLevel1);
	document.getElementById("inventory_box_level_1").style.display = "block";
	document.getElementById("james_level_1").style.cursor = "pointer";
}
function removeGuitarTrue4() {
	document.getElementById("guitar4").style.display = "block";
	document.getElementById("inventory_guitar4").style.display = "none";
	level1--;
	document.getElementById("guitar4").addEventListener("click", guitarTrue4);
}
function guitarTrue5() {
	document.getElementById("guitar5").style.display = "none";
	document.getElementById("inventory_guitar5").src = "images/guitar5.png";
	document.getElementById("inventory_guitar5").style.display = "block";
	level1++;
	document.getElementById("inventory_guitar5").addEventListener("click", removeGuitarTrue5);
	document.getElementById("james_level_1").addEventListener("click", warningOrVictoryLevel1);
	document.getElementById("inventory_box_level_1").style.display = "block";
	document.getElementById("james_level_1").style.cursor = "pointer";
}
function removeGuitarTrue5() {
	document.getElementById("guitar5").style.display = "block";
	document.getElementById("inventory_guitar5").style.display = "none";
	level1--;
	document.getElementById("guitar5").addEventListener("click", guitarTrue5);
}
// Fonction permettant de donner des indices graduellement à chaque essai raté du joueur pour un maximum de 4
function warningOrVictoryLevel1() {
	document.getElementById("james_message_box_level_1").addEventListener("click", hideMessageBoxLevel1);
	// Scénario de victoire
	if (level1 === 3) {
		document.getElementById("james_message_box_level_1").removeEventListener("click", hideMessageBoxLevel1);
		document.getElementById("james_message_box_level_1").style.display = "block";
		document.getElementById("james_message_box_level_1").addEventListener("click", transitionTextLevel1);
		document.getElementById("james_message_level_1").textContent = "Parfait ..! T'as trouvé toutes mes... mes... Guitares ! On peut aller chercher celles de l'autre là... Kirk ..!";
		document.getElementById("timer_level_1").style.display = "none";
		document.getElementById("james_level_1").style.cursor = "default";
		victoryLevel1 ++;
		return;
	}
	// Avertissements
	if (warningLevel1 === 0) {
		document.getElementById("james_message_box_level_1").style.display = "block";
		document.getElementById("james_message_level_1").textContent = "Réfléchis bien ! J'utilise certaines marques... en... Plus souvent que d'autres... HICK !";
		warningLevel1++;
		// Empêche l'utilisateur de spammer tous les avertissements en cliquant à répétition en retirant la fonction d'indices lorsqu'un indice est actif
		document.getElementById("james_level_1").removeEventListener("click", warningOrVictoryLevel1);
	}
	else if (warningLevel1 === 1) {
		document.getElementById("james_message_box_level_1").style.display = "block";
		document.getElementById("james_message_level_1").textContent = "Me semble que... y'a.. au moins... 1 guitare blanche à moi...";
		warningLevel1++;
		document.getElementById("james_level_1").removeEventListener("click", warningOrVictoryLevel1);
	}
	else if (warningLevel1 === 2) {
		document.getElementById("james_message_box_level_1").style.display = "block";
		document.getElementById("james_message_level_1").textContent = "Dude... Sérieux... Écoute y faut que... tu te... Dépêches... HICK ! Y doit avoir 2 guitares blanches à moi...";
		warningLevel1++;
		document.getElementById("james_level_1").removeEventListener("click", warningOrVictoryLevel1);
	}
	else {
		document.getElementById("james_message_box_level_1").style.display = "block";
		document.getElementById("james_message_level_1").textContent = "Tabarn*k tu me niases tu ?! Aweye débrouille-toi... ou j'te vomis dessus dude...";
	}
}
// Fonction permettant de cacher les indices en cliquant sur la boîte de dialogue. La fonction est désactivée si la variable victoryLevel1 = 1
function hideMessageBoxLevel1() {
	document.getElementById("james_message_box_level_1").style.display = "none";
	// Réactive la fonction d'indice lorsqu'on clique sur le dialogue
	document.getElementById("james_level_1").addEventListener("click", warningOrVictoryLevel1);
	}
// Fonction permettant la transition entre le niveau 1 et le niveau 2 et la récupération du nom du joueur pour déterminer le scénario final
function transitionTextLevel1() {
	document.getElementById("james_level_1").removeEventListener("click", warningOrVictoryLevel1);
	transitionLevel1++;
	if (transitionLevel1 === 1) {
		document.getElementById("james_message_level_1").textContent = "Mais avant, mon ami... HICK ! J'veux te remercier... J'vais t'offrir une paire de... HICK ! ...billets V.I.P.";
	}
	else if (transitionLevel1 === 2) {
		playerName = prompt("Indique ton nom pour que les billets V.I.P. soient identifiés correctement.");
		document.getElementById("james_message_level_1").textContent = "Parfait, " + playerName + ", continue le bon travail... pis peut-être que... j'te donnerai autre chose... Let's go chercher les guits de Kirk ! (bruit de vomi retenue)";
		document.getElementById("james_message_box_level_1").addEventListener("click", goToLevel2);
		document.getElementById("james_message_box_level_1").addEventListener("click", beginLevel2);
	}
}
// Fonction pour aller au niveau 2 et cacher le niveau 1
function goToLevel2() {
	document.getElementById("wrapper_level_1").style.display = "none";
	document.getElementById("wrapper_level_2").style.display = "block";
}
// SECTION LEVEL 2
function beginLevel2() {
	setTimeout (function() {
		document.getElementById("james_level_2").removeEventListener("click", beginLevel2);
		document.getElementById("james_message_box_level_2").style.display = "block";
		document.getElementById("james_message_level_2").textContent = "Bon... y'a normalement 2 guitares à Kirk ici... ou 3... non non... Défintivement 2 ! Probablement ..?";
		document.getElementById("james_message_box_level_2").addEventListener("click", level2Message);
		textLevel2++;
	}, 1000);
}
function level2Message() {
	if (textLevel2 === 1) {
		document.getElementById("james_message_level_2").textContent = "Anyway... Vient me les porter quand... tu... ton... HICK ! Tu les auras trouvé... ";
		document.getElementById("james_message_box_level_2").removeEventListener("click", level2Message);
		setTimeout(function() {
			document.getElementById("james_message_box_level_2").style.display = "none";
			document.getElementById("timer_level_2").style.display = "block";
			document.getElementById("guitar6").addEventListener("click", guitarFalse6);
			document.getElementById("guitar7").addEventListener("click", guitarTrue7);
			document.getElementById("guitar8").addEventListener("click", guitarFalse8);
			document.getElementById("guitar9").addEventListener("click", guitarTrue9);
			document.getElementById("guitar10").addEventListener("click", guitarFalse10);
			setInterval(function() {
				if (timeLevel2 === 0){
					if (victoryLevel2 > 0){
						return;
					}
					document.getElementById("container_level_2").style.display = "none";
					document.getElementById("music_player").style.display = "none";
					document.getElementById("wrapper_level_2").style.backgroundImage = "url('images/background-game-over.jpg')";
					document.getElementById("wrapper_level_2").addEventListener("click", tryAgain);
					document.getElementById("wrapper_level_2").style.cursor = "pointer";
				}
				else {
					timeLevel2--;
					document.getElementById("timer_level_2").textContent = timeLevel2;
				}
			}, 1000);
		}, 3000);
	}
}
function guitarFalse6() {
	document.getElementById("guitar6").style.display = "none";
	document.getElementById("inventory_guitar6").src = "images/guitar6.png";
	document.getElementById("inventory_guitar6").style.display = "block";
	level2--;
	document.getElementById("inventory_guitar6").addEventListener("click", removeguitarFalse6);
	document.getElementById("james_level_2").addEventListener("click", warningOrVictoryLevel2);
	document.getElementById("inventory_box_level_2").style.display = "block";
	document.getElementById("james_level_2").style.cursor = "pointer";
}
function removeguitarFalse6() {
	document.getElementById("guitar6").style.display = "block";
	document.getElementById("inventory_guitar6").style.display = "none";
	level2++;
	document.getElementById("guitar6").addEventListener("click", guitarFalse6);
}
function guitarTrue7() {
	document.getElementById("guitar7").style.display = "none";
	document.getElementById("inventory_guitar7").src = "images/guitar7.png";
	document.getElementById("inventory_guitar7").style.display = "block";
	level2++;
	document.getElementById("inventory_guitar7").addEventListener("click", removeguitarTrue7);
	document.getElementById("james_level_2").addEventListener("click", warningOrVictoryLevel2);
	document.getElementById("inventory_box_level_2").style.display = "block";
	document.getElementById("james_level_2").style.cursor = "pointer";
}
function removeguitarTrue7() {
	document.getElementById("guitar7").style.display = "block";
	document.getElementById("inventory_guitar7").style.display = "none";
	level2--;
	document.getElementById("guitar7").addEventListener("click", guitarTrue7);
}
function guitarFalse8() {
	document.getElementById("guitar8").style.display = "none";
	document.getElementById("inventory_guitar8").src = "images/guitar8.png";
	document.getElementById("inventory_guitar8").style.display = "block";
	level2--;
	document.getElementById("inventory_guitar8").addEventListener("click", removeguitarFalse8);
	document.getElementById("james_level_2").addEventListener("click", warningOrVictoryLevel2);
	document.getElementById("inventory_box_level_2").style.display = "block";
	document.getElementById("james_level_2").style.cursor = "pointer";
}
function removeguitarFalse8() {
	document.getElementById("guitar8").style.display = "block";
	document.getElementById("inventory_guitar8").style.display = "none";
	level2++;
	document.getElementById("guitar8").addEventListener("click", guitarFalse8);
}
function guitarTrue9() {
	document.getElementById("guitar9").style.display = "none";
	document.getElementById("inventory_guitar9").src = "images/guitar9.png";
	document.getElementById("inventory_guitar9").style.display = "block";
	level2++;
	document.getElementById("inventory_guitar9").addEventListener("click", removeguitarTrue9);
	document.getElementById("james_level_2").addEventListener("click", warningOrVictoryLevel2);
	document.getElementById("inventory_box_level_2").style.display = "block";
	document.getElementById("james_level_2").style.cursor = "pointer";
}
function removeguitarTrue9() {
	document.getElementById("guitar9").style.display = "block";
	document.getElementById("inventory_guitar9").style.display = "none";
	level2--;
	document.getElementById("guitar9").addEventListener("click", guitarTrue9);
}
function guitarFalse10() {
	document.getElementById("guitar10").style.display = "none";
	document.getElementById("inventory_guitar10").src = "images/guitar10.png";
	document.getElementById("inventory_guitar10").style.display = "block";
	level2--;
	document.getElementById("inventory_guitar10").addEventListener("click", removeguitarFalse10);
	document.getElementById("james_level_2").addEventListener("click", warningOrVictoryLevel2);
	document.getElementById("inventory_box_level_2").style.display = "block";
	document.getElementById("james_level_2").style.cursor = "pointer";
}
function removeguitarFalse10() {
	document.getElementById("guitar10").style.display = "block";
	document.getElementById("inventory_guitar10").style.display = "none";
	level2++;
	document.getElementById("guitar10").addEventListener("click", guitarFalse10);
}
function warningOrVictoryLevel2() {
	document.getElementById("james_message_box_level_2").addEventListener("click", hideMessageBoxLevel2);
	if (level2 === 2) {
		document.getElementById("james_message_box_level_2").removeEventListener("click", hideMessageBoxLevel2);
		document.getElementById("james_message_box_level_2").style.display = "block";
		document.getElementById("james_message_box_level_2").addEventListener("click", transitionTextLevel2);
		document.getElementById("james_message_level_2").textContent = "Fuck... " + playerName + ", t'es vraiment... Efficicacieux... Efficace ! D'après moi c'est pomal ça... qui est ça... pour... les guitares de Kirk... HICK !";
		document.getElementById("timer_level_2").style.display = "none";
		document.getElementById("james_level_2").style.cursor = "default";
		victoryLevel2 ++;
		return;
	}
	if (warningLevel2 === 0) {
		document.getElementById("james_message_box_level_2").style.display = "block";
		document.getElementById("james_message_level_2").textContent = "Ok... Si j'me souviens bien... Ce qui est vrm pas sûre... Y'a 2 guitares à Kirk ici... HICK !";
		warningLevel2++;
		document.getElementById("james_level_2").removeEventListener("click", warningOrVictoryLevel2);
	}
	else if (warningLevel2 === 1) {
		document.getElementById("james_message_box_level_2").style.display = "block";
		document.getElementById("james_message_level_2").textContent = "Au moins une de ses guitares est... blanche... non, non ! J'veux dire... Noire... HICK !";
		warningLevel2++;
		document.getElementById("james_level_2").removeEventListener("click", warningOrVictoryLevel2);
	}
	else if (warningLevel2 === 2) {
		document.getElementById("james_message_box_level_2").style.display = "block";
		document.getElementById("james_message_level_2").textContent = "J'viens d'me souvenir... Kirk utilise... n'utilise pas... de guitares Fender...";
		warningLevel2++;
		document.getElementById("james_level_2").removeEventListener("click", warningOrVictoryLevel2);
	}
	else {
		document.getElementById("james_message_box_level_2").style.display = "block";
		document.getElementById("james_message_level_2").textContent = "J'peux pas t'aider plus que ça... J'me concentre à pas vomir...";
	}
}
function hideMessageBoxLevel2() {
	document.getElementById("james_message_box_level_2").style.display = "none";
	document.getElementById("james_level_2").addEventListener("click", warningOrVictoryLevel2);
	}
function transitionTextLevel2() {
	document.getElementById("james_level_2").removeEventListener("click", warningOrVictoryLevel2);
	transitionLevel2++;
	if (transitionLevel2 === 1) {
		document.getElementById("james_message_level_2").textContent = "J'vais ajouter un... un... deux... un petit quelques chose... pour te récompenser... Genre de la bière...";
	}
	else if (transitionLevel2 === 2) {
		playerAge = prompt("Quel est ton âge ?");
		if (playerAge >= 18){
		document.getElementById("james_message_level_2").textContent = "Parfait mec ! J'te paye une caisse... de... Corona ! Après le show... Anyway... J'ai une autre mission pour toi !";
		}
		else {
		document.getElementById("james_message_level_2").textContent = "Oh... J'trouvais aussi que t'avais une baby-face... HICK ! Normale à " + playerAge + " ans... J'vais t'acheter du jus à la place... Anyway... J'ai une autre mission pour toi !";
		}
		document.getElementById("james_message_box_level_2").addEventListener("click", goToLevel3);
		document.getElementById("james_message_box_level_2").addEventListener("click", beginLevel3);
	}
}
function goToLevel3() {
	document.getElementById("wrapper_level_2").style.display = "none";
	document.getElementById("wrapper_level_3").style.display = "block";
}
// SECTION LEVEL 3
function beginLevel3() {
	setTimeout (function() {
		document.getElementById("james_level_3").removeEventListener("click", beginLevel3);
		document.getElementById("james_message_box_level_3").style.display = "block";
		document.getElementById("james_message_level_3").textContent = "Bon... Comme tu t'en doutes sûrement... J'vais te demander de retrouver des inst... inst... instruments ! Tu vois, mon ami... Rob est dans la même situation que... moi... c'est-à-dire saoûl mort...";
		document.getElementById("james_message_box_level_3").addEventListener("click", level3Message);
		textLevel3++;
	}, 1000);
}
function level3Message() {
	if (textLevel3 === 1) {
		document.getElementById("james_message_level_3").textContent = "Trouve le, la, les... ton... ta... HICK ! Bref trouve ses instruments...";
		document.getElementById("james_message_box_level_3").removeEventListener("click", level3Message);
		setTimeout(function() {
			document.getElementById("james_message_box_level_3").style.display = "none";
			document.getElementById("timer_level_3").style.display = "block";
			document.getElementById("bass1").addEventListener("click", bassFalse1);
			document.getElementById("bass2").addEventListener("click", bassFalse2);
			document.getElementById("bass3").addEventListener("click", bassFalse3);
			document.getElementById("bass4").addEventListener("click", bassTrue1);
			document.getElementById("bass5").addEventListener("click", bassTrue2);
			setInterval(function() {
				if (timeLevel3 === 0){
					if (victoryLevel3 > 0){
						return;
					}
					document.getElementById("container_level_3").style.display = "none";
					document.getElementById("music_player").style.display = "none";
					document.getElementById("wrapper_level_3").style.backgroundImage = "url('images/background-game-over.jpg')";
					document.getElementById("wrapper_level_3").addEventListener("click", tryAgain);
					document.getElementById("wrapper_level_3").style.cursor = "pointer";
				}
				else {
					timeLevel3--;
					document.getElementById("timer_level_3").textContent = timeLevel3;
				}
			}, 1000);
		}, 3000);
	}
}
function bassFalse1() {
	document.getElementById("bass1").style.display = "none";
	document.getElementById("inventory_bass1").src = "images/bass1.png";
	document.getElementById("inventory_bass1").style.display = "block";
	level3--;
	document.getElementById("inventory_bass1").addEventListener("click", removebassFalse1);
	document.getElementById("james_level_3").addEventListener("click", warningOrVictoryLevel3);
	document.getElementById("inventory_box_level_3").style.display = "block";
	document.getElementById("james_level_3").style.cursor = "pointer";
}
function removebassFalse1() {
	document.getElementById("bass1").style.display = "block";
	document.getElementById("inventory_bass1").style.display = "none";
	level3++;
	document.getElementById("bass1").addEventListener("click", bassFalse1);
}
function bassFalse2() {
	document.getElementById("bass2").style.display = "none";
	document.getElementById("inventory_bass2").src = "images/bass2.png";
	document.getElementById("inventory_bass2").style.display = "block";
	level3--;
	document.getElementById("inventory_bass2").addEventListener("click", removebassFalse2);
	document.getElementById("james_level_3").addEventListener("click", warningOrVictoryLevel3);
	document.getElementById("inventory_box_level_3").style.display = "block";
	document.getElementById("james_level_3").style.cursor = "pointer";
}
function removebassFalse2() {
	document.getElementById("bass2").style.display = "block";
	document.getElementById("inventory_bass2").style.display = "none";
	level3++;
	document.getElementById("bass2").addEventListener("click", bassFalse2);
}
function bassFalse3() {
	document.getElementById("bass3").style.display = "none";
	document.getElementById("inventory_bass3").src = "images/bass3.png";
	document.getElementById("inventory_bass3").style.display = "block";
	level3--;
	document.getElementById("inventory_bass3").addEventListener("click", removebassFalse3);
	document.getElementById("james_level_3").addEventListener("click", warningOrVictoryLevel3);
	document.getElementById("inventory_box_level_3").style.display = "block";
	document.getElementById("james_level_3").style.cursor = "pointer";
}
function removebassFalse3() {
	document.getElementById("bass3").style.display = "block";
	document.getElementById("inventory_bass3").style.display = "none";
	level3++;
	document.getElementById("bass3").addEventListener("click", bassFalse3);
}
function bassTrue1() {
	document.getElementById("bass4").style.display = "none";
	document.getElementById("inventory_bass4").src = "images/bass4.png";
	document.getElementById("inventory_bass4").style.display = "block";
	level3++;
	document.getElementById("inventory_bass4").addEventListener("click", removebassTrue1);
	document.getElementById("james_level_3").addEventListener("click", warningOrVictoryLevel3);
	document.getElementById("inventory_box_level_3").style.display = "block";
	document.getElementById("james_level_3").style.cursor = "pointer";
}
function removebassTrue1() {
	document.getElementById("bass4").style.display = "block";
	document.getElementById("inventory_bass4").style.display = "none";
	level3--;
	document.getElementById("bass4").addEventListener("click", bassTrue1);
}
function bassTrue2() {
	document.getElementById("bass5").style.display = "none";
	document.getElementById("inventory_bass5").src = "images/bass5.png";
	document.getElementById("inventory_bass5").style.display = "block";
	level3++;
	document.getElementById("inventory_bass5").addEventListener("click", removebassTrue2);
	document.getElementById("james_level_3").addEventListener("click", warningOrVictoryLevel3);
	document.getElementById("inventory_box_level_3").style.display = "block";
	document.getElementById("james_level_3").style.cursor = "pointer";
}
function removebassTrue2() {
	document.getElementById("bass5").style.display = "block";
	document.getElementById("inventory_bass5").style.display = "none";
	level3--;
	document.getElementById("bass5").addEventListener("click", bassTrue2);
}
function warningOrVictoryLevel3() {
	document.getElementById("james_message_box_level_3").addEventListener("click", hideMessageBoxLevel3);
	if (level3 === 2) {
		document.getElementById("james_message_box_level_3").removeEventListener("click", hideMessageBoxLevel3);
		document.getElementById("james_message_box_level_3").style.display = "block";
		document.getElementById("james_message_box_level_3").addEventListener("click", transitionTextLevel3);
		document.getElementById("james_message_level_3").textContent = "Yes !! J'ai jamais douté de toi... mon nouveau meilleur ami ! HICK !";
		document.getElementById("timer_level_3").style.display = "none";
		document.getElementById("james_level_3").style.cursor = "default";
		victoryLevel3 ++;
		return;
	}
	if (warningLevel3 === 0) {
		document.getElementById("james_message_box_level_3").style.display = "block";
		document.getElementById("james_message_level_3").textContent = "Hmmm... Me semble que y'en a juste 2 à lui...";
		warningLevel3++;
		document.getElementById("james_level_3").removeEventListener("click", warningOrVictoryLevel3);
	}
	else if (warningLevel3 === 1) {
		document.getElementById("james_message_box_level_3").style.display = "block";
		document.getElementById("james_message_level_3").textContent = "J'pense ben qu'une de ses bass à 4 cordes...";
		warningLevel3++;
		document.getElementById("james_level_3").removeEventListener("click", warningOrVictoryLevel3);
	}
	else if (warningLevel3 === 2) {
		document.getElementById("james_message_box_level_3").style.display = "block";
		document.getElementById("james_message_level_3").textContent = "(Marmonnements incompréhensibles)";
		warningLevel3++;
		document.getElementById("james_level_3").removeEventListener("click", warningOrVictoryLevel3);
	}
	else {
		document.getElementById("james_message_box_level_3").style.display = "block";
		document.getElementById("james_message_level_3").textContent = "Continue à chercher... J'ai confiance en moi ! HICK ! en toi j'veux dire...";
	}
}
function hideMessageBoxLevel3() {
	document.getElementById("james_message_box_level_3").style.display = "none";
	document.getElementById("james_level_3").addEventListener("click", warningOrVictoryLevel3);
	}
function transitionTextLevel3() {
	document.getElementById("james_level_3").removeEventListener("click", warningOrVictoryLevel3);
	transitionLevel3++;
	if (transitionLevel3 === 1) {
		document.getElementById("james_message_level_3").textContent = "Comme dernière récompense... J'vais t'offrir une leçon privée... avec... Rob ou Kirk !";
	}
	else if (transitionLevel3 === 2) {
		playerLesson = prompt("Préfères-tu une leçon privée avec Rob ou avec Kirk ?");
		if ((playerLesson == "Rob") || (playerLesson == "rob")) {
		document.getElementById("james_message_level_3").textContent = "J'vais t'arranger ça avec Rob ! J'sui sûre qui... que... quoi ? Qu'il va être content ! HICK ! Rejoins-moi après le show... J'te donnerai tes récompenses !";
		}
		else if ((playerLesson == "Kirk") || (playerLesson == "kirk")) {
		document.getElementById("james_message_level_3").textContent = "Évidemment ! Tout le monde veut une leçon... oui, une leçon... le... HICK ! Avec Kirk ! Rejoins-moi après le show... J'te donnerai tes récompenses !";
		}
		document.getElementById("james_message_box_level_3").addEventListener("click", goToConclusion);
		document.getElementById("james_message_box_level_3").addEventListener("click", beginConclusion);
	}
}
// Fonction permettant de recommencer si GAME OVER
function tryAgainIntroduction(){
	window.location.href = "index.html";
}
function tryAgain(){
	window.location.href = "jeu.html";
}
// Fonction permettant d'afficher le niveau de conclusion et d'afficher la bière ou le jus selon l'âge du joueur
function goToConclusion() {
	document.getElementById("wrapper_level_3").style.display = "none";
	document.getElementById("wrapper_conclusion").style.display = "block";
}
function beginConclusion() {
	setTimeout (function() {
		document.getElementById("james_conclusion").removeEventListener("click", beginConclusion);
		document.getElementById("james_message_box_conclusion").style.display = "block";
		document.getElementById("james_message_conclusion").textContent = "Alright... j'espère que t'as apprécié le show ! J'ai finalement déssaoulé... Hahahaa !";
		document.getElementById("james_message_box_conclusion").addEventListener("click", conclusionMessage);
		textConclusion++;
	}, 1000);
}
// Fonction dictant les 4 scénarios possibles selon l'âge du joueur, son nom et son choix entre Rob et Kirk
function conclusionMessage() {
	if (textConclusion === 1) {
		if ((playerAge >= 18) && ((playerLesson == "Rob") || (playerLesson == "rob"))) {
			document.getElementById("james_message_conclusion").textContent = "Comme promis, voici ta paire de billets V.I.P. au nom de " + playerName + " et ta caisse de Corona. Aussi, j'ai arrangé ta leçon privée avec Robert Trujillo, notre bassiste.";
			document.getElementById("corona").style.display = "block";
			document.getElementById("vip_ticket").style.display = "block";
			document.getElementById("james_message_box_conclusion").removeEventListener("click", conclusionMessage);
			document.getElementById("james_message_box_conclusion").addEventListener("click", lastMessage);
		}
		else if ((playerAge >= 18) && ((playerLesson == "Kirk") || (playerLesson == "kirk"))) {
			document.getElementById("james_message_conclusion").textContent = "Comme promis, voici ta paire de billets V.I.P. au nom de " + playerName + " et ta caisse de Corona. Aussi, j'ai arrangé ta leçon privée avec Kirk Hammett, notre guitariste principal.";
			document.getElementById("corona").style.display = "block";
			document.getElementById("vip_ticket").style.display = "block";
			document.getElementById("james_message_box_conclusion").removeEventListener("click", conclusionMessage);
			document.getElementById("james_message_box_conclusion").addEventListener("click", lastMessage);
		}
		else if ((playerLesson == "Rob") || (playerLesson == "rob")) {
			document.getElementById("james_message_conclusion").textContent = "Comme promis, voici ta paire de billets V.I.P. au nom de " + playerName + " et ta caisse de jus. À " + playerAge + " ans, on peut pas boire de bière, mon grand. J'ai quand même arrangée ta leçon privée avec Robert Trujillo, notre bassiste.";
			document.getElementById("juice").style.display = "block";
			document.getElementById("vip_ticket").style.display = "block";
			document.getElementById("james_message_box_conclusion").removeEventListener("click", conclusionMessage);
			document.getElementById("james_message_box_conclusion").addEventListener("click", lastMessage);
		}
		else if ((playerLesson == "Kirk") || (playerLesson == "kirk")) {
			document.getElementById("james_message_conclusion").textContent = "Comme promis, voici ta paire de billets V.I.P. au nom de " + playerName + " et ta caisse de jus. À " + playerAge + " ans, on peut pas boire de bière, mon grand. Aussi, j'ai arrangé ta leçon privée avec Kirk Hammett, notre guitariste principal.";
			document.getElementById("juice").style.display = "block";
			document.getElementById("vip_ticket").style.display = "block";
			document.getElementById("james_message_box_conclusion").removeEventListener("click", conclusionMessage);
			document.getElementById("james_message_box_conclusion").addEventListener("click", lastMessage);
		}
	}
}
function lastMessage() {
	document.getElementById("james_message_conclusion").textContent = "Merci pour tout, " + playerName + " ! Profite de tes récompenses et j'espère te voir à notre prochain concert !";
	document.getElementById("james_message_box_conclusion").removeEventListener("click", lastMessage);
}