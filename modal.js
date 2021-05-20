// FONCTION BARRE DE NAVIGATION RESPONSIVE //

const editNav = () => {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

//*********************************** *//
// ****** ELEMENTS DU DOM ************ //
//***********************************  //

const modalbg = document.querySelector(".bground");

// Variable bouton "je m'inscrit"
const modalBtn = document.querySelectorAll(".modal-btn");
// Variable attaché à la classe des champs du formulaire
const formData = document.querySelectorAll(".formData");

// Variables de fermeture de la modal
const toClose = document.querySelectorAll(".btn-close");

//******************************************* //
// ************** ACTION *********************//
//******************************************* //

// Lancement de l'évenement de la modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fermeture de la modal
toClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//************Validation Prénom **********************//

// conditions de remplissage du formulaire
let form = document.querySelector("#form-registration");

// Ecoute de la modification de l'élément Prénom
form.first.addEventListener("change", function () {
  validateFirst(this);
});

const validateFirst = function (inputFirstName) {
  //Création de la RegExp pour valider le prénom
  let regexFirst = new RegExp(
    "^[a-zA-Z-àâçéèêëìíîïñòóôöùúûüýÿÀÁÂÇÈÉÊËÌÍÎÏÑÒÓÔÙÚÛÜÝŸ]+$",
    "g"
  );

  // Modification du texte sous le champs Prénom
  // On cible l'élément parent
  let smallFirst = inputFirstName.parentElement;

  if (inputFirstName.value === "") {
    // On ajoute a la div parent l'attribut data-error-visible à true pour appeler les propriétés de styles de CSS
    smallFirst.setAttribute("data-error-visible", "true");
    // On ajoute également l'attribut data-error avec l'argument qui correspond
    smallFirst.setAttribute("data-error", "Veuillez saisir une valeur");
  }
  // Au minimum 2 caracteres
  else if (inputFirstName.value.length < 2) {
    smallFirst.setAttribute("data-error-visible", "true");
    smallFirst.setAttribute(
      "data-error",
      "Veuillez saisir au minimum 2 caractères"
    );
    // Au maximum 16 caractères
  } else if (inputFirstName.value.length >= 16) {
    smallFirst.setAttribute("data-error-visible", "true");
    smallFirst.setAttribute(
      "data-error",
      "Veuillez saisir un prénom plus court"
    );
  }
  // Testing de la valeur saisie dans le champs Prénom
  else if (regexFirst.test(inputFirstName.value)) {
    // Si la valeur passe le test de regex alors les attributs ajoutés précedement sont retirés
    smallFirst.removeAttribute("data-error-visible");
    smallFirst.removeAttribute("data-error");
  } else {
    // Si la valeur ne passe pas le test de la regex
    smallFirst.setAttribute("data-error-visible", "true");
    smallFirst.setAttribute("data-error", "Veuillez saisir une autre valeur");
  }
};

//************Validation Nom **********************//

// Ecoute de la modification de l'élément Nom
form.last.addEventListener("change", function () {
  validateLast(this);
});

const validateLast = function (inputLastName) {
  //Création de la RegExp pour valider le Nom
  let regexLast = new RegExp(
    "^[a-zA-Z 'àâçéèêëìíîïñòóôöùúûüýÿÀÁÂÇÈÉÊËÌÍÎÏÑÒÓÔÙÚÛÜÝŸ]+$",
    "g"
  );

  // Modification du texte sous le champs Nom
  let smallLast = inputLastName.parentElement;

  if (inputLastName.value === "") {
    smallLast.setAttribute("data-error-visible", "true");
    smallLast.setAttribute("data-error", "Veuillez saisir une valeur");
  }
  // Au minimum 2 caracteres
  else if (inputLastName.value.length < 2) {
    smallLast.setAttribute("data-error-visible", "true");
    smallLast.setAttribute(
      "data-error",
      "Veuillez saisir au minimum 2 caractères"
    );
  } // Au maximum 16 caractères
  else if (inputLastName.value.length >= 16) {
    smallLast.setAttribute("data-error-visible", "true");
    smallLast.setAttribute("data-error", "Veuillez saisir un nom plus court");
  }
  // Testing de la valeur saisie dans le champs Prénom
  else if (regexLast.test(inputLastName.value)) {
    smallLast.removeAttribute("data-error-visible");
    smallLast.removeAttribute("data-error");
  } else {
    smallLast.setAttribute("data-error-visible", "true");
    smallLast.setAttribute("data-error", "Veuillez saisir votre nom");
  }
};

//***************E-MAIL******************************//

// Ecoute de la modification de l'élément E-mail
form.email.addEventListener("change", function () {
  validateEmail(this);
});

const validateEmail = function (inputEmail) {
  //Création de la RegExp pour valider l'E-mail
  let regexEmail = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );

  // Modification du texte sous le champs de saisie E-mail
  let smallEmail = inputEmail.parentElement;

  // Si aucune valeur n'est saisie
  if (inputEmail.value === "") {
    smallEmail.setAttribute("data-error-visible", "true");
    smallEmail.setAttribute("data-error", "Veuillez saisir une valeur");
  }
  // Testing de la valeur saisie dans le champs Email
  else if (regexEmail.test(inputEmail.value)) {
    smallEmail.removeAttribute("data-error-visible");
    smallEmail.setAttribute("data-error-visible", "false");
    smallEmail.setAttribute("data-error", "Adresse e-mail valide");
  } else {
    smallEmail.removeAttribute("data-error-visible");
    smallEmail.setAttribute("data-error-visible", "true");
    smallEmail.setAttribute("data-error", "Adresse e-mail non valide");
  }
};

const filledEmail = email.parentElement;

email.addEventListener("focusout", function () {
  setTimeout(function () {
    filledEmail.removeAttribute("data-error-visible");
    filledEmail.setAttribute("data-error", "");
  }, 3000);
});

//**************DATE DE NAISSANCE********************//

// Ecoute de la modification de l'élément Date de Naissance
form.birthdate.addEventListener("focusout", function () {
  validateBirth(this);

  // On crée une écoute "focusout" et éxecute une fonction à réaliser sur le champs date de naissance
  setTimeout(function () {
    filledBirthday.removeAttribute("data-error-visible");
    filledBirthday.setAttribute("data-error", "");
  }, 3000);
});

// On crée une variable rataché à l'élément parent 'div'
const filledBirthday = birthdate.parentElement;

const validateBirth = function (inputBirth) {
  // Création de la variable qui récupère la date
  let born = new Date(inputBirth.value);

  // Extrait des composants de la date
  // Notamment l'année de naissance
  let day = born.getDate();
  let month = born.getMonth() + 1;
  let years = born.getFullYear();

  // Modification du texte sous le champs date de naissance
  let smallBirthday = inputBirth.parentElement;

  // Verification si la valeur est située entre 1930 et 2003
  if (years <= 2003 && years >= 1930) {
    smallBirthday.setAttribute("data-error-visible", "false");
    smallBirthday.setAttribute("data-error", "Date de naissance valide");
    // Sinon indiqué qu'il s'agit d'une erreur
  } else {
    smallBirthday.setAttribute("data-error-visible", "true");
    smallBirthday.setAttribute(
      "data-error",
      "Veuillez saisir votre année de naissance"
    );
  }
};

//***************NOMBRE DE TOURNOIS******************//

// Ecoute de la modification sur le champs "nombre de tournois"
form.quantity.addEventListener("change", function () {
  validateTournament(this);
});

const validateTournament = function (inputNumber) {
  // Modification du texte sous le champs date de naissance
  let smallTournament = inputNumber.parentElement;

  // Création de la variable qui récupère l'élément 'div' des checkbox ville
  let checkboxT = document.getElementById("checkbox");

  // Création de la variable qui récupère l'élément le paragraphe 'Quelles villes'
  let pCheckbox = document.querySelector("p.text-label");

  // Verification si la valeur n'existe pas
  if (inputNumber.value === "") {
    smallTournament.setAttribute("data-error-visible", "true");
    smallTournament.setAttribute("data-error", "veuillez saisir une valeur");
    // Vérification si la valeur est négative
  } else if (inputNumber.value < 0) {
    smallTournament.setAttribute("data-error-visible", "true");
    smallTournament.setAttribute(
      "data-error",
      "veuillez saisir une valeur positive"
    );

    checkboxT.classList.remove("switchOff");
    pCheckbox.classList.remove("switchOff");
    // Vérification si la valeur est supérrieur à 99 tournois
  } else if (inputNumber.value === "0") {
    // Ajout de la classe 'switchOff' à la div parent qui contient le choix des villes
    checkboxT.classList.add("switchOff");
    // Ajout de la classe 'switchOff' au paragraphe qui contient le texte 'Quelles villes'
    pCheckbox.classList.add("switchOff");

    smallTournament.removeAttribute("data-error-visible");
    smallTournament.removeAttribute("data-error");
    // Si la valeur est supérieur à 99
  } else if (inputNumber.value > 99) {
    // Suppression de la classe 'switchOff' de l'élément div
    checkboxT.classList.remove("switchOff");
    // Suppression de la classe 'switchOff' du paragraphe qui contient le texte
    pCheckbox.classList.remove("switchOff");

    // Ajout des attributs 'data-error' et 'data-error-visible'
    smallTournament.setAttribute("data-error-visible", "true");
    smallTournament.setAttribute(
      "data-error",
      "veuillez saisir une valeur inférieur"
    );
    // Si aucune des conditions remplie, retirer les propriétés CSS data-error et data-error-visible
  } else {
    checkboxT.classList.remove("switchOff");
    pCheckbox.classList.remove("switchOff");
    smallTournament.removeAttribute("data-error-visible");
    smallTournament.removeAttribute("data-error");
  }
};

//************CHECKBOX LIEUX DES TOURNOIS***********//

// Création d'une variable qui regroupe les elements des checkbox
const checkboxElement = document.querySelectorAll(".checkbox-label");

// Récupération des données de la variables checkboxElement avec une boucle forEach pour appliquer une action à chaque élément
checkboxElement.forEach((item) => {
  // Ecoute d'un évenement au click sur chaque élément avec l'exécution d'une fonction
  item.addEventListener("click", (e) => {
    // Création de la variable de l'element rataché au span qui permet de séléctionner l'élément visuellement
    let parentItem = e.target.parentElement;
    // Création de la variable qui va récuperer l'attribut html for="" de l'élément séléctionné
    let idItem = parentItem.htmlFor;
    // Création d'un switch qui va traduire un résultat en fonction de l'élément séléctionné
    switch (idItem) {
      case "location1":
        // Création de la variable rataché à l'élément input qui correspond
        let id1 = document.getElementById("location1");
        // Récupération de la valeur rataché à cette Id
        let valueId1 = id1.value;
        console.log(valueId1);
        break;
      case "location2":
        let id2 = document.getElementById("location2");
        let valueId2 = id2.value;
        console.log(valueId2);
        break;
      case "location3":
        let id3 = document.getElementById("location3");
        let valueId3 = id3.value;
        console.log(valueId3);
        break;
      case "location4":
        let id4 = document.getElementById("location4");
        let valueId4 = id4.value;
        console.log(valueId4);
        break;
      case "location5":
        let id5 = document.getElementById("location5");
        let valueId5 = id5.value;
        console.log(valueId5);
        break;
      case "location6":
        let id6 = document.getElementById("location6");
        let valueId6 = id6.value;
        console.log(valueId6);
        break;
      // definition de la valeur par default si rien ne ce passe.
      default:
        null;
    }
  });
});

//************CHECKBOX LIEUX DES TOURNOIS***********//
