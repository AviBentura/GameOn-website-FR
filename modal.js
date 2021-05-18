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
  // Au minimum 3 caracteres
  else if (inputFirstName.value.length < 3) {
    smallFirst.setAttribute("data-error-visible", "true");
    smallFirst.setAttribute(
      "data-error",
      "Veuillez saisir au minimum 3 caractères"
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
    "^[a-zA-ZàâçéèêëìíîïñòóôöùúûüýÿÀÁÂÇÈÉÊËÌÍÎÏÑÒÓÔÙÚÛÜÝŸ]+$",
    "g"
  );

  // Modification du texte sous le champs Nom
  let smallLast = inputLastName.parentElement;

  if (inputLastName.value === "") {
    smallLast.setAttribute("data-error-visible", "true");
    smallLast.setAttribute("data-error", "Veuillez saisir une valeur");
  }
  // Au minimum 4 caracteres
  else if (inputLastName.value.length < 4) {
    smallLast.setAttribute("data-error-visible", "true");
    smallLast.setAttribute(
      "data-error",
      "Veuillez saisir au minimum 4 caractères"
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

//***************DATE DE NAISSANCE********************//

// Ecoute de la modification de l'élément Date de Naissance
form.birthdate.addEventListener("change", function () {
  validateBirth(this);
});

const validateBirth = function (inputBirth) {
  // Création de la variable qui récupère la date
  let born = new Date(inputBirth.value);

  // Extrait des composants de la date
  // Notamment l'année de naissance
  let year = born.getFullYear();
  let month = born.getMonth() + 1;
  let day = born.getDate();

  // Modification du texte sous le champs date de naissance
  let smallBirthday = inputBirth.parentElement;

  // Verification si la valeur n'existe pas
  if (year > 2003 || year < 1930) {
    smallBirthday.setAttribute("data-error-visible", "true");
    smallBirthday.setAttribute(
      "data-error",
      "Veuillez saisir votre date de naissance"
    );
  } else if (born == getDay + "/" + getMonth + "/" + "aaaa") {
    smallBirthday.setAttribute("data-error-visible", "true");
    smallBirthday.setAttribute(
      "data-error",
      "Veuillez saisir votre année de naissance"
    );
  } else {
    smallBirthday.setAttribute("data-error-visible", "false");
    smallBirthday.setAttribute("data-error", "Date de naissance valide");
  }
};

// On vise la balise HTML "small" dans une variable
const filledBirthday = birthdate.parentElement;

// On crée une écoute "focusout" et éxecute une fonction à réaliser sur le champs date de naissance
birthdate.addEventListener("focusout", function () {
  setTimeout(function () {
    filledBirthday.removeAttribute("data-error-visible");
    filledBirthday.setAttribute("data-error", "");
  }, 3000);
});

//***************NOMBRE DE TOURNOIS******************//

// Ecoute de la modification sur le champs "nombre de tournois"
form.quantity.addEventListener("change", function () {
  validateTournament(this);
});

const validateTournament = function (inputNumber) {
  // Modification du texte sous le champs date de naissance
  let smallTournament = inputNumber.parentElement;

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
    // Vérification si la valeur est supérrieur à 99 tournois
  } else if (inputNumber.value > 99) {
    smallTournament.setAttribute("data-error-visible", "true");
    smallTournament.setAttribute(
      "data-error",
      "veuillez saisir une valeur inférieur"
    );
    // Si aucune des conditions remplie, retirer les propriétés CSS data-error et data-error-visible
  } else {
    smallTournament.removeAttribute("data-error-visible");
    smallTournament.removeAttribute("data-error");
  }
};

//************CHECKBOX LIEUX DES TOURNOIS***********//
