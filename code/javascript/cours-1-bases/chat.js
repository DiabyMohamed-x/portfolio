let messages = [];

function obtenirHeureActuelle() {
  let maintenant = new Date();
  return maintenant.toLocaleTimeString();
}

function creerMessage(auteur, texte, classeCss) {
  let chatBox = document.getElementById("chatBox");

  let blocMessage = document.createElement("div");
  blocMessage.classList.add("message");
  blocMessage.classList.add(classeCss);

  let header = document.createElement("div");
  header.classList.add("message-header");
  header.textContent = auteur + " - " + obtenirHeureActuelle();

  let contenu = document.createElement("div");
  contenu.classList.add("message-text");
  contenu.textContent = texte;

  blocMessage.appendChild(header);
  blocMessage.appendChild(contenu);

  chatBox.appendChild(blocMessage);

  chatBox.scrollTop = chatBox.scrollHeight;
}

function reponseBot(messageUtilisateur) {
  let message = messageUtilisateur.toLowerCase();

  if (message.includes("bonjour") || message.includes("salut")) {
    return "Bonjour ! Ravi de discuter avec toi.";
  }

  if (message.includes("ça va") || message.includes("ca va")) {
    return "Oui, je vais très bien, merci.";
  }

  if (message.includes("ton nom")) {
    return "Je suis un mini bot JavaScript.";
  }

  if (message.includes("javascript")) {
    return "JavaScript permet de rendre une page web interactive.";
  }

  if (message.includes("bye") || message.includes("au revoir")) {
    return "À bientôt !";
  }

  return "Je ne comprends pas encore ce message.";
}

function envoyerMessage() {
  let input = document.getElementById("messageInput");
  let texte = input.value.trim();

  if (texte === "") {
    return;
  }

  messages.push({
    auteur: "Moi",
    texte: texte
  });

  creerMessage("Moi", texte, "user");

  input.value = "";
  input.focus();

  let reponse = reponseBot(texte);

  messages.push({
    auteur: "Bot",
    texte: reponse
  });

  setTimeout(function () {
    creerMessage("Bot", reponse, "bot");
  }, 500);
}

document.getElementById("sendBtn").addEventListener("click", envoyerMessage);

document.getElementById("messageInput").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    envoyerMessage();
  }
});

creerMessage("Bot", "Bonjour, je suis prêt à discuter avec toi.", "bot");