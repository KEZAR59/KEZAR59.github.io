
"use strict";

/* CAMPUS QUEST
   Moteur des révisions universitaires
   5 matières, 3 difficultés, 60 questions
*/

// ========================================
// 1. BANQUE DE QUESTIONS
// ========================================

const banque = {
  informatique: {
    facile: [
      [
        "Que signifie HTML ?",
        ["HyperText Markup Language", "High Tech Machine Language", "Home Tool Language", "Hyper Transfer Link"],
        0,
        "HTML organise le contenu d'une page web."
      ],
      [
        "À quoi sert CSS ?",
        ["Créer une base SQL", "Mettre en forme une page web", "Compiler Java", "Installer Git"],
        1,
        "CSS définit l'apparence et la disposition des éléments."
      ],
      [
        "Quel langage rend un site interactif ?",
        ["SQL", "HTML", "JavaScript", "Markdown"],
        2,
        "JavaScript réagit aux clics et met à jour la page."
      ],
      [
        "Quelle commande enregistre un commit Git ?",
        ["git open", "git start", "git save", "git commit"],
        3,
        "git commit enregistre une version des modifications préparées."
      ]
    ],
    moyen: [
      [
        "Complexité d'une recherche binaire ?",
        ["O(n²)", "O(log n)", "O(n)", "O(1) dans tous les cas"],
        1,
        "On divise l'espace de recherche par deux à chaque étape."
      ],
      [
        "Que vaut 2 === '2' en JavaScript ?",
        ["true", "undefined", "false", "2"],
        2,
        "L'opérateur === compare la valeur et le type."
      ],
      [
        "À quoi sert une clé primaire en SQL ?",
        ["Identifier une ligne de manière unique", "Créer un graphique", "Chiffrer une table", "Sauvegarder le serveur"],
        0,
        "La clé primaire identifie chaque enregistrement de façon unique."
      ],
      [
        "Quel sélecteur CSS cible l'identifiant menu ?",
        [".menu", "menu", "*menu", "#menu"],
        3,
        "Le symbole # cible un identifiant HTML."
      ]
    ],
    difficile: [
      [
        "Quelle structure suit le principe FIFO ?",
        ["Pile", "File", "Arbre", "Graphe"],
        1,
        "FIFO : premier entré, premier sorti."
      ],
      [
        "Complexité du tri fusion ?",
        ["O(n²)", "O(log n)", "O(n log n)", "O(1)"],
        2,
        "Le tri fusion divise puis fusionne les sous-listes."
      ],
      [
        "À quoi sert HAVING en SQL ?",
        ["Filtrer des groupes", "Créer une table", "Supprimer une colonne", "Trier des lignes"],
        0,
        "HAVING filtre les groupes, souvent après GROUP BY."
      ],
      [
        "Une fonction récursive doit avoir...",
        ["Une boucle for", "Une base SQL", "Une feuille CSS", "Un cas de base"],
        3,
        "Le cas de base permet de terminer la récursion."
      ]
    ]
  },

  mathematiques: {
    facile: [
      [
        "Combien vaut 3² + 4² ?",
        ["12", "25", "49", "14"],
        1,
        "9 + 16 = 25."
      ],
      [
        "Résous 2x + 6 = 14.",
        ["x = 2", "x = 3", "x = 4", "x = 7"],
        2,
        "2x = 8, donc x = 4."
      ],
      [
        "Dérivée de x² ?",
        ["2x", "x", "2", "x³"],
        0,
        "La dérivée de x² est 2x."
      ],
      [
        "20 % de 150 ?",
        ["15", "20", "25", "30"],
        3,
        "150 × 0,20 = 30."
      ]
    ],
    moyen: [
      [
        "Dérivée de 3x³ - 2x ?",
        ["9x² - 2", "3x² - 2", "9x - 2", "x³ - 2"],
        0,
        "On dérive séparément chaque terme."
      ],
      [
        "Limite de 1/x quand x tend vers +∞ ?",
        ["1", "0", "+∞", "-∞"],
        1,
        "Plus x grandit, plus 1/x se rapproche de zéro."
      ],
      [
        "Combien de résultats ordonnés avec deux dés ?",
        ["6", "12", "36", "72"],
        2,
        "6 × 6 = 36 couples possibles."
      ],
      [
        "Une primitive de 2x ?",
        ["2", "2x", "x³", "x²"],
        3,
        "La dérivée de x² est 2x."
      ]
    ],
    difficile: [
      [
        "Dérivée de ln(x) pour x > 0 ?",
        ["ln(x)", "1/x", "x", "e^x"],
        1,
        "La dérivée de ln(x) est 1/x."
      ],
      [
        "Déterminant de la matrice [[2,1],[3,4]] ?",
        ["5", "11", "8", "-5"],
        0,
        "2 × 4 - 1 × 3 = 5."
      ],
      [
        "Somme des probabilités de toutes les issues ?",
        ["0", "0,5", "1", "Variable"],
        2,
        "La somme des probabilités vaut 1."
      ],
      [
        "Résous e^x = e³.",
        ["x = 0", "x = 1", "x = e", "x = 3"],
        3,
        "L'exponentielle est injective : x = 3."
      ]
    ]
  },

  anglais: {
    facile: [
      [
        "Traduction de « recherche » ?",
        ["Research", "Holiday", "Meeting", "Shopping"],
        0,
        "Research signifie recherche."
      ],
      [
        "Complète : She ___ a student.",
        ["are", "am", "is", "be"],
        2,
        "On utilise is avec she."
      ],
      [
        "Traduction de « bibliothèque » ?",
        ["Bookshop", "Library", "Laboratory", "Classroom"],
        1,
        "Library est une bibliothèque."
      ],
      [
        "Prétérit du verbe go ?",
        ["Goed", "Going", "Gone", "Went"],
        3,
        "Go, went, gone."
      ]
    ],
    moyen: [
      [
        "I have studied English ___ three years.",
        ["since", "for", "from", "during of"],
        1,
        "For exprime une durée."
      ],
      [
        "Que signifie deadline ?",
        ["Date limite", "Cours facultatif", "Salle de classe", "Conférence"],
        0,
        "Deadline signifie date limite."
      ],
      [
        "If I study, I ___ the exam.",
        ["passed", "passing", "will pass", "passes"],
        2,
        "Premier conditionnel : if + présent, puis will + verbe."
      ],
      [
        "Quelle phrase est correcte ?",
        ["He don't understand.", "They is studying.", "She have a book.", "They are studying."],
        3,
        "On utilise are avec they."
      ]
    ],
    difficile: [
      [
        "Had I known, I ___ earlier.",
        ["would have arrived", "will arrive", "arrive", "had arrive"],
        0,
        "C'est un troisième conditionnel avec inversion."
      ],
      [
        "Que signifie findings dans un article ?",
        ["Financements", "Résultats", "Chercheurs", "Références"],
        1,
        "Findings désigne les résultats d'une étude."
      ],
      [
        "Quelle phrase convient à un article académique ?",
        ["This stuff is cool.", "It's kinda true.", "The results suggest a correlation.", "Everyone knows it."],
        2,
        "Le style académique doit être précis et nuancé."
      ],
      [
        "The report ___ before the meeting began.",
        ["has submitted", "submits", "is submitting", "had been submitted"],
        3,
        "Le past perfect passif exprime une action antérieure."
      ]
    ]
  },

  methodologie: {
    facile: [
      [
        "Quelle méthode améliore la mémorisation ?",
        ["Relire une seule fois", "Répétition espacée", "Ne pas se tester", "Tout réviser la veille"],
        1,
        "La répétition espacée consolide les apprentissages."
      ],
      [
        "Pourquoi citer ses sources ?",
        ["Allonger le devoir", "Éviter de réfléchir", "Attribuer les idées", "Remplacer la conclusion"],
        2,
        "Les références indiquent l'origine des idées."
      ],
      [
        "À quoi sert un planning ?",
        ["Organiser ses révisions", "Supprimer les examens", "Garantir une note", "Éviter les exercices"],
        0,
        "Planifier permet de répartir le travail."
      ],
      [
        "Comment prendre des notes efficacement ?",
        ["Tout recopier", "Noter seulement les dates", "Ne pas écouter", "Organiser les idées essentielles"],
        3,
        "On résume et structure les idées importantes."
      ]
    ],
    moyen: [
      [
        "Comment tester réellement sa mémoire ?",
        ["Répondre sans regarder le cours", "Tout surligner", "Relire passivement", "Copier un corrigé"],
        0,
        "Le rappel actif révèle les acquis et les lacunes."
      ],
      [
        "Quelle source privilégier en sciences ?",
        ["Publicité", "Rumeur", "Article évalué par les pairs", "Message anonyme"],
        2,
        "L'évaluation par les pairs apporte un contrôle scientifique."
      ],
      [
        "Qu'est-ce qu'une problématique ?",
        ["Une liste de dates", "Une question centrale", "Une bibliographie", "Un titre décoratif"],
        1,
        "La problématique guide l'argumentation."
      ],
      [
        "Pourquoi examiner ses erreurs ?",
        ["Les apprendre par cœur", "Éviter les cours", "Gagner du temps sans comprendre", "Identifier les lacunes"],
        3,
        "Une erreur aide à cibler le prochain effort."
      ]
    ],
    difficile: [
      [
        "À quoi sert une revue de littérature ?",
        ["Analyser les études existantes", "Éviter les recherches", "Aligner des citations", "Donner son seul avis"],
        0,
        "Elle synthétise et examine les travaux publiés."
      ],
      [
        "Qu'est-ce qu'un plagiat ?",
        ["Citer un auteur", "Reprendre une idée sans la citer", "Présenter ses calculs", "Comparer des articles cités"],
        1,
        "On doit attribuer les idées empruntées."
      ],
      [
        "Deux études se contredisent. Que faire ?",
        ["En ignorer une", "Choisir la plus récente", "Comparer méthodes et limites", "Écarter les deux"],
        2,
        "L'analyse critique compare les protocoles et les données."
      ],
      [
        "Pourquoi corrélation n'implique pas causalité ?",
        ["Les statistiques sont inutiles", "Les variables ne sont jamais liées", "Toutes les corrélations sont fausses", "Une association ne prouve pas une cause"],
        3,
        "Un lien statistique ne démontre pas une cause."
      ]
    ]
  },

  sciences: {
    facile: [
      [
        "Unité SI de force ?",
        ["Joule", "Watt", "Newton", "Volt"],
        2,
        "La force est mesurée en newtons."
      ],
      [
        "Planète la plus proche du Soleil ?",
        ["Mercure", "Vénus", "Terre", "Mars"],
        0,
        "Mercure est la planète la plus proche du Soleil."
      ],
      [
        "Molécule portant l'information génétique ?",
        ["Glucose", "Eau", "Dioxygène", "ADN"],
        3,
        "L'ADN porte l'information génétique."
      ],
      [
        "Température de congélation de l'eau pure ?",
        ["100 °C", "0 °C", "50 °C", "-100 °C"],
        1,
        "À pression normale, l'eau pure gèle vers 0 °C."
      ]
    ],
    moyen: [
      [
        "Deuxième loi de Newton ?",
        ["F = m × a", "P = U / I", "E = m / c", "v = m × t"],
        0,
        "La résultante des forces vaut masse × accélération."
      ],
      [
        "Organe produisant principalement l'insuline ?",
        ["Foie", "Cœur", "Pancréas", "Rein"],
        2,
        "L'insuline est sécrétée par le pancréas."
      ],
      [
        "Pourquoi utiliser un groupe témoin ?",
        ["Changer les résultats", "Disposer d'une référence", "Remplacer l'expérience", "Supprimer tout biais"],
        1,
        "Le groupe témoin sert de comparaison."
      ],
      [
        "Le watt mesure...",
        ["L'énergie", "La force", "La tension", "La puissance"],
        3,
        "La puissance s'exprime en watts."
      ]
    ],
    difficile: [
      [
        "À température constante, ΔS réversible vaut...",
        ["Qrév/T", "m × a", "U × I", "R/I"],
        0,
        "La variation d'entropie vaut le transfert thermique réversible divisé par la température absolue."
      ],
      [
        "Rôle de l'ARN messager ?",
        ["Produire toute l'énergie", "Porter le message de synthèse des protéines", "Détruire l'ADN", "Former la membrane"],
        1,
        "L'ARNm transmet l'information utilisée par les ribosomes."
      ],
      [
        "Une valeur p inférieure à 0,05 prouve-t-elle une hypothèse ?",
        ["Toujours", "Avec beaucoup de données", "Non", "Si l'étude est publiée"],
        2,
        "Une valeur p ne prouve pas une hypothèse à elle seule."
      ],
      [
        "Quelle est la loi d'Ohm ?",
        ["F = m × a", "E = h × f", "P = m × g", "U = R × I"],
        3,
        "La loi d'Ohm relie tension, résistance et intensité."
      ]
    ]
  }
};

// ========================================
// 2. PREPARATION DES QUESTIONS
// ========================================

const $ = id => document.getElementById(id);

const matieres = {
  informatique: "💻 Informatique",
  mathematiques: "📐 Mathématiques",
  anglais: "🇬🇧 Anglais",
  methodologie: "📝 Méthodologie",
  sciences: "🔬 Culture scientifique"
};

const niveaux = ["facile", "moyen", "difficile"];
const questions = [];

for (const [matiere, groupes] of Object.entries(banque)) {
  for (const [niveau, liste] of Object.entries(groupes)) {
    liste.forEach((donnees, i) => {
      questions.push({
        id: `${matiere}-${niveau}-${i}`,
        matiere: matiere,
        niveau: niveau,
        question: donnees[0],
        choix: donnees[1],
        bonne: donnees[2],
        explication: donnees[3]
      });
    });
  }
}

// ========================================
// 3. SAUVEGARDE DES RESULTATS
// ========================================

function nouvelEtat() {
  return {
    xp: 0,
    sessions: 0,
    bonnes: 0,
    total: 0,
    erreurs: [],
    matieres: {}
  };
}

let etat = nouvelEtat();

try {
  const data = JSON.parse(
    localStorage.getItem("campusQuestFinal")
  );

  if (data && typeof data === "object") {
    etat = { ...etat, ...data };
  }
} catch (erreur) {
  console.warn("Sauvegarde illisible");
}

if (!Array.isArray(etat.erreurs)) {
  etat.erreurs = [];
}

if (!etat.matieres || typeof etat.matieres !== "object") {
  etat.matieres = {};
}

function sauvegarder() {
  try {
    localStorage.setItem(
      "campusQuestFinal",
      JSON.stringify(etat)
    );
  } catch (erreur) {
    console.warn("Sauvegarde impossible");
  }
}

function taux(bonnes, total) {
  return total
    ? Math.round(100 * bonnes / total)
    : 0;
}

function melanger(liste) {
  const copie = [...liste];

  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copie[i], copie[j]] = [copie[j], copie[i]];
  }

  return copie;
}

// ========================================
// 4. NAVIGATION ENTRE LES PAGES
// ========================================

let session = null;
let minuterie = null;

function arreterTemps() {
  if (minuterie !== null) {
    clearInterval(minuterie);
  }

  minuterie = null;
}

function montrerBloc(bloc) {
  $("configuration").hidden = bloc !== "configuration";
  $("quiz").hidden = bloc !== "quiz";
  $("resultats").hidden = bloc !== "resultats";
}

function configuration() {
  arreterTemps();
  session = null;

  montrerBloc("configuration");

  $("messageConfig").textContent = "";
}

function page(nom) {
  document.querySelectorAll(".page").forEach(element => {
    element.classList.toggle(
      "active",
      element.id === nom
    );
  });

  document.querySelectorAll("nav [data-page]").forEach(
    element => {
      element.classList.toggle(
        "selected",
        element.dataset.page === nom
      );
    }
  );

  actualiserProfil();
  window.scrollTo(0, 0);
}

function naviguer(nom) {
  if (session && session.active) {
    const quitter = confirm(
      "Quitter le quiz sans enregistrer cette session ?"
    );

    if (!quitter) return;

    configuration();
  }

  page(nom);
}

// ========================================
// 5. DEMARRER UNE REVISION
// ========================================

function demarrer(mode, toutesErreurs = false) {
  const matiere = $("matiere").value;
  const niveau = $("difficulte").value;

  let selection = [];

  if (mode === "erreurs") {
    selection = questions.filter(question => {
      return etat.erreurs.includes(question.id) &&
        (toutesErreurs || question.matiere === matiere);
    });
  } else {
    selection = questions.filter(question => {
      return question.matiere === matiere &&
        niveaux.indexOf(question.niveau) <=
        niveaux.indexOf(niveau);
    });
  }

  selection = melanger(selection).slice(0, 10);

  if (selection.length === 0) {
    $("messageConfig").textContent =
      "Aucune question à réviser ici. " +
      "Essaie un autre mode ou une autre matière.";

    return;
  }

  arreterTemps();

  session = {
    mode: mode,
    questions: selection,
    index: 0,
    bonnes: 0,
    choix: [],
    repondu: false,
    active: true,
    limite: mode === "examen"
      ? Date.now() + 180000
      : 0,
    ecoule: false
  };

  $("corrigeExamen").innerHTML = "";

  montrerBloc("quiz");
  afficherQuestion();

  if (mode === "examen") {
    mettreAJourTemps();

    minuterie = setInterval(
      mettreAJourTemps,
      250
    );
  }
}

// ========================================
// 6. AFFICHER LES QUESTIONS
// ========================================

function afficherQuestion() {
  if (!session || !session.active) return;

  session.repondu = false;

  const question = session.questions[session.index];

  $("quizMatiere").textContent =
    matieres[question.matiere];

  $("quizNumero").textContent =
    "Question " + (session.index + 1) +
    " / " + session.questions.length;

  $("quizTemps").textContent =
    session.mode === "examen"
      ? "⏱️ 03:00"
      : "📖 Entraînement";

  $("quizQuestion").textContent =
    question.question;

  $("quizBarre").style.width =
    (100 * session.index / session.questions.length) +
    "%";

  $("quizCorrection").hidden = true;
  $("suivante").hidden = true;

  const zone = $("quizReponses");
  zone.innerHTML = "";

  question.choix.forEach((choix, index) => {
    const bouton = document.createElement("button");

    bouton.type = "button";

    bouton.textContent =
      String.fromCharCode(65 + index) +
      ". " + choix;

    bouton.addEventListener("click", () => {
      repondre(index);
    });

    zone.appendChild(bouton);
  });
}

// ========================================
// 7. CORRIGER LES REPONSES
// ========================================

function repondre(index) {
  if (
    !session ||
    !session.active ||
    session.repondu
  ) {
    return;
  }

  session.repondu = true;

  const question = session.questions[session.index];

  const correct = index === question.bonne;

  if (correct) {
    session.bonnes++;
  }

  session.choix.push({
    id: question.id,
    index: index,
    correct: correct
  });

  const boutons = $("quizReponses").querySelectorAll(
    "button"
  );

  boutons.forEach((bouton, i) => {
    bouton.disabled = true;

    if (session.mode !== "examen") {
      if (i === question.bonne) {
        bouton.classList.add("correct");
      } else if (i === index) {
        bouton.classList.add("wrong");
      }
    }
  });

  if (session.mode !== "examen") {
    $("quizVerdict").textContent =
      correct
        ? "✅ Bonne réponse !"
        : "❌ Réponse incorrecte";

    $("quizExplication").textContent =
      "Réponse : " +
      question.choix[question.bonne] +
      ". " +
      question.explication;

    $("quizCorrection").hidden = false;
  }

  const derniere =
    session.index === session.questions.length - 1;

  $("suivante").textContent =
    derniere
      ? "Voir les résultats →"
      : "Question suivante →";

  $("suivante").hidden = false;
}

// ========================================
// 8. EXAMEN CHRONOMETRE
// ========================================

function mettreAJourTemps() {
  if (!session || !session.active) return;

  const secondes = Math.max(
    0,
    Math.ceil(
      (session.limite - Date.now()) / 1000
    )
  );

  const minutes = String(
    Math.floor(secondes / 60)
  ).padStart(2, "0");

  const secondesRestantes = String(
    secondes % 60
  ).padStart(2, "0");

  $("quizTemps").textContent =

    "⏱️ " + minutes + ":" + secondesRestantes;

  if (secondes === 0) {
    session.ecoule = true;
    terminer();
  }
}

// ========================================
// 9. TERMINER LA SESSION
// ========================================

function terminer() {
  if (!session || !session.active) return;

  session.active = false;
  arreterTemps();

  const reponses = new Map(
    session.choix.map(reponse => [
      reponse.id,
      reponse
    ])
  );

  session.choix.forEach(reponse => {
    const question = questions.find(
      element => element.id === reponse.id
    );

    if (!question) return;

    etat.total++;

    if (reponse.correct) {
      etat.bonnes++;
    }

    if (!etat.matieres[question.matiere]) {
      etat.matieres[question.matiere] = {
        bonnes: 0,
        total: 0
      };
    }

    const statistiques = etat.matieres[question.matiere];

    statistiques.total++;

    if (reponse.correct) {
      statistiques.bonnes++;
      etat.erreurs = etat.erreurs.filter(
        id => id !== question.id
      );
    } else if (!etat.erreurs.includes(question.id)) {
      etat.erreurs.push(question.id);
    }
  });

  if (session.mode === "examen") {
    session.questions
      .filter(question => !reponses.has(question.id))
      .forEach(question => {
        if (!etat.erreurs.includes(question.id)) {
          etat.erreurs.push(question.id);
        }
      });
  }

  etat.sessions++;

  const gains = session.bonnes * 10 + 20;
  etat.xp += gains;

  sauvegarder();
  montrerBloc("resultats");

  $("scoreFinal").textContent =
    session.bonnes + " / " + session.questions.length;

  const note = taux(
    session.bonnes,
    session.questions.length
  );

  if (session.ecoule) {
    $("messageFinal").textContent =
      "⏱️ Temps écoulé : voici ton résultat.";
  } else if (note >= 80) {
    $("messageFinal").textContent =
      "🌟 Excellent travail !";
  } else if (note >= 50) {
    $("messageFinal").textContent =
      "👏 Bonne progression, continue !";
  } else {
    $("messageFinal").textContent =
      "📚 Revois tes erreurs et réessaie.";
  }

  $("detailFinal").textContent =
    note + " % de réussite • " +
    session.choix.length + " réponse(s) • +" +
    gains + " XP";

  if (session.mode === "examen") {
    const zone = $("corrigeExamen");

    const titre = document.createElement("h3");
    titre.textContent = "📖 Corrigé de l'examen";

    zone.appendChild(titre);

    session.questions.forEach((question, index) => {
      const reponse = reponses.get(question.id);

      const carte = document.createElement("article");

      const enonce = document.createElement("h3");
      enonce.textContent =
        (index + 1) + ". " + question.question;

      const explication = document.createElement("p");

      const resultat = !reponse
        ? "⚪ Non répondu"
        : reponse.correct
          ? "✅ Correct"
          : "❌ Incorrect";

      explication.textContent =
        resultat + " — " +
        question.choix[question.bonne] +
        ". " + question.explication;

      carte.append(enonce, explication);
      zone.appendChild(carte);
    });
  }

  actualiserProfil();
}

// ========================================
// 10. STATISTIQUES DU JOUEUR
// ========================================

function actualiserProfil() {
  const niveau = Math.floor(etat.xp / 100) + 1;
  const progression = etat.xp % 100;

  $("xpNav").textContent = etat.xp + " XP";
  $("xpAccueil").textContent = etat.xp + " XP";
  $("bonnesAccueil").textContent = etat.bonnes;
  $("precisionAccueil").textContent =
    taux(etat.bonnes, etat.total) + " %";
  $("sessionsAccueil").textContent = etat.sessions;

  $("xpProfil").textContent = etat.xp;
  $("niveauProfil").textContent = niveau;
  $("bonnesProfil").textContent = etat.bonnes;
  $("sessionsProfil").textContent = etat.sessions;

  $("niveauBarre").style.width = progression + "%";

  $("niveauTexte").textContent =
    "Niveau " + niveau +
    " — encore " + (100 - progression) +
    " XP avant le niveau suivant.";

  $("nombreErreurs").textContent =
    etat.erreurs.length + " question(s) à retravailler";

  const zone = $("statsMatieres");
  zone.innerHTML = "";

  Object.entries(matieres).forEach(([cle, nom]) => {
    const stats = etat.matieres[cle] || {
      bonnes: 0,
      total: 0
    };

    const carte = document.createElement("div");
    carte.className = "subject-stat";

    const entete = document.createElement("header");

    const nomMatiere = document.createElement("strong");
    nomMatiere.textContent = nom;

    const resultat = document.createElement("span");

    resultat.textContent = stats.total
      ? taux(stats.bonnes, stats.total) +
        " % (" + stats.bonnes + "/" + stats.total + ")"
      : "Pas encore de résultat";

    entete.append(nomMatiere, resultat);

    const barre = document.createElement("div");
    barre.className = "track";

    const remplissage = document.createElement("div");
    remplissage.className = "fill";

    remplissage.style.width =
      taux(stats.bonnes, stats.total) + "%";

    barre.appendChild(remplissage);
    carte.append(entete, barre);
    zone.appendChild(carte);
  });

  const badges = $("badges");
  badges.innerHTML = "";

  const recompenses = [
    ["🌱 Première réponse", etat.total >= 1],
    ["📚 3 sessions", etat.sessions >= 3],
    ["🧠 20 bonnes réponses", etat.bonnes >= 20],
    ["⭐ 100 XP", etat.xp >= 100],
    ["🎓 Niveau 5", niveau >= 5],
    ["🏆 10 sessions", etat.sessions >= 10]
  ];

  recompenses.forEach(([nom, acquis]) => {
    const badge = document.createElement("span");
    badge.className =
      "badge" + (acquis ? "" : " locked");
    badge.textContent = nom;
    badges.appendChild(badge);
  });
}

// ========================================
// 11. ACTIVATION DES BOUTONS
// ========================================

function initialiser() {
  document.querySelectorAll("[data-page]").forEach(
    bouton => {
      bouton.addEventListener("click", evenement => {
        evenement.preventDefault();
        naviguer(bouton.dataset.page);
      });
    }
  );

  document.querySelectorAll("[data-subject]").forEach(
    bouton => {
      bouton.addEventListener("click", () => {
        configuration();
        $("matiere").value = bouton.dataset.subject;
        page("revision");
      });
    }
  );

  document.querySelectorAll("[data-mode]").forEach(
    bouton => {
      bouton.addEventListener("click", () => {
        demarrer(bouton.dataset.mode);
      });
    }
  );

  $("suivante").addEventListener("click", () => {
    if (!session || !session.active || !session.repondu) {
      return;
    }

    session.index++;

    if (session.index >= session.questions.length) {
      terminer();
    } else {
      afficherQuestion();
    }
  });

  $("quitter").addEventListener("click", () => {
    if (session && session.active) {
      const confirmation = confirm(
        "Quitter cette session sans enregistrer les résultats ?"
      );

      if (!confirmation) return;
    }

    configuration();
  });

  $("rejouer").addEventListener("click", configuration);

  $("revoirErreurs").addEventListener("click", () => {
    if (etat.erreurs.length === 0) {
      alert("Tu n'as aucune erreur à réviser.");
      return;
    }

    configuration();
    page("revision");
    demarrer("erreurs", true);
  });

  $("reinitialiser").addEventListener("click", () => {
    const confirmation = confirm(
      "Supprimer tes points, résultats et erreurs ?"
    );

    if (!confirmation) return;

    configuration();
    etat = nouvelEtat();
    sauvegarder();
    page("accueil");
  });

  configuration();
  page("accueil");
}

// ATTENDRE LE CHARGEMENT DU HTML

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initialiser
  );
} else {
  initialiser();
}

