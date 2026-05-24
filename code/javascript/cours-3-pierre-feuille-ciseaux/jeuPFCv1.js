function jouer(choix){
	//si choix == pierre alors changer le texxt du paragraph avec id= monChoix avec pierre
	//si choix == feuille alors changer le texxt du paragraph avec id= monChoix avec feuille
	//si choix == ciseau alors changer le texxt du paragraph avec id= monChoix avec ciseau.
	console.log(choix);
	if (choix === "Pierre"){
		document.getElementById("monChoix").innerHTML= "Mon choix: Pierre";
	}
	else if (choix === "Feuille"){
			document.getElementById("monChoix").innerHTML= "Mon choix: Feuille";
	}
	else {
			document.getElementById("monChoix").innerHTML = "Mon choix: Ciseaux";	
	}
}
//recuperer les boutons, en mettant des oreilles dessus
document.getElementById("choixPierre").addEventListener("click", function() {jouer("Pierre")});
document.getElementById("choixFeuille").addEventListener("click", function() {jouer("Feuille")});
document.getElementById("choixCiseaux").addEventListener("click", function() {jouer("Ciseaux")});


