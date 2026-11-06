
const chrono = document.getElementById("chrono");
const message = document.getElementById("message");
const matiere = document.getElementById("matiere");

let duree = 25 * 60;
let tempsRestant = duree;
let minuterie = null;

// Afficher les minutes et les secondes
function afficherTemps() {
  const minutes = Math.floor(tempsRestant / 60);
  const secondes = tempsRestant % 60;

  chrono.textContent =
    String(minutes).padStart(2, "0") + ":" +
    String(secondes).padStart(2, "0");
}

// Démarrer le chronomètre
function demarrer() {
  if (minuterie !== null) return;

  const nomMatiere = matiere.value.trim() || "ta matière";
  message.textContent = "Concentre-toi sur " + nomMatiere + " !";

  minuterie = setInterval(function () {
    if (tempsRestant > 0) {
      tempsRestant--;
      afficherTemps();
    }

    if (tempsRestant === 0) {
      clearInterval(minuterie);
      minuterie = null;
      message.textContent = "🎉 Bravo, séance terminée !";
    }
  }, 1000);
}

// Mettre le chronomètre en pause
function pause() {
  clearInterval(minuterie);
  minuterie = null;
  message.textContent = "Séance en pause";
}

// Recommencer la séance
function recommencer() {
  pause();
  tempsRestant = duree;
  afficherTemps();
  message.textContent = "Prêt à te concentrer ?";
}

// Activer les boutons
document.getElementById("demarrer")
  .addEventListener("click", demarrer);

document.getElementById("pause")
  .addEventListener("click", pause);

document.getElementById("reset")
  .addEventListener("click", recommencer);

// Choisir la durée de révision
document.querySelectorAll(".duree").forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    document.querySelectorAll(".duree").forEach(function (b) {
      b.classList.remove("actif");
    });

    bouton.classList.add("actif");
    duree = Number(bouton.dataset.minutes) * 60;
    recommencer();
  });
});

// Gestion des tâches
const champTache = document.getElementById("nouvelleTache");
const liste = document.getElementById("listeTaches");
const progression = document.getElementById("progression");

let taches = JSON.parse(localStorage.getItem("focusTaches") || "[]");

// Sauvegarder les tâches
function sauvegarder() {
  localStorage.setItem("focusTaches", JSON.stringify(taches));
}

// Afficher la liste des tâches
function afficherTaches() {
  liste.innerHTML = "";

  taches.forEach(function (tache, index) {
    const ligne = document.createElement("li");
    const caseACocher = document.createElement("input");
    const texte = document.createElement("span");

    caseACocher.type = "checkbox";
    caseACocher.checked = tache.terminee;
    caseACocher.style.width = "auto";
    caseACocher.style.marginRight = "12px";
    texte.textContent = tache.texte;

    if (tache.terminee) {
      ligne.classList.add("terminee");
    }

    caseACocher.addEventListener("change", function () {
      taches[index].terminee = caseACocher.checked;
      sauvegarder();
      afficherTaches();
    });

    ligne.append(caseACocher, texte);
    liste.appendChild(ligne);
  });

  const total = taches.length;
  const finies = taches.filter(t => t.terminee).length;

  progression.textContent =
    finies + " tâche(s) terminée(s) sur " + total;
}

// Ajouter une tâche
function ajouterTache() {
  const texte = champTache.value.trim();

  if (texte === "") return;

  taches.push({
    texte: texte,
    terminee: false
  });

  champTache.value = "";
  sauvegarder();
  afficherTaches();
}

// Activer le bouton Ajouter
document.getElementById("ajouter")
  .addEventListener("click", ajouterTache);

// Ajouter une tâche avec la touche Entrée
champTache.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    ajouterTache();
  }
});

// Initialiser le site
afficherTemps();
afficherTaches();
