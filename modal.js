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

console.log(form.first);

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
  let smallFirst = inputFirstName.nextElementSibling;

  if (inputFirstName.value === "") {
    smallFirst.classList.add("danger");
    smallFirst.innerHTML = "Veuillez saisir une valeur";
  }
  // Au minimum 3 caracteres
  else if (inputFirstName.value.length < 3) {
    smallFirst.innerHTML = "Veuillez saisir au minimum 3 caractères";
    // Ajout de la class "danger"
    smallFirst.classList.add("danger");
    // Au maximum 16 caractères
  } else if (inputFirstName.value.length >= 16) {
    smallFirst.innerHTML = "Veuillez saisir un prénom plus court";
    // Ajout de la class "danger"
    smallFirst.classList.add("danger");
  }
  // Testing de la valeur saisie dans le champs Prénom
  else if (regexFirst.test(inputFirstName.value)) {
    smallFirst.classList.remove("danger");
    smallFirst.innerHTML = "";
  } else {
    smallFirst.innerHTML = "Veuillez saisir une autre valeur";
    smallFirst.classList.add("danger");
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
  let smallLast = inputLastName.nextElementSibling;

  if (inputLastName.value === "") {
    smallLast.classList.add("danger");
    smallLast.innerHTML = "Veuillez saisir une valeur";
  }
  // Au minimum 4 caracteres
  else if (inputLastName.value.length < 4) {
    smallLast.innerHTML = "Veuillez saisir au minimum 4 caractères";
    // Ajout de la class "danger"
    smallLast.classList.add("danger");
  } // Au maximum 16 caractères
  else if (inputLastName.value.length >= 16) {
    smallLast.innerHTML = "Veuillez saisir un nom plus court";
    // Ajout de la class "danger"
    smallLast.classList.add("danger");
  }
  // Testing de la valeur saisie dans le champs Prénom
  else if (regexLast.test(inputLastName.value)) {
    smallLast.classList.remove("danger");
    smallLast.innerHTML = "";
  } else {
    smallLast.innerHTML = "Veuillez saisir votre nom";
    smallLast.classList.add("danger");
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
  let smallEmail = inputEmail.nextElementSibling;

  // Si aucune valeur n'est saisie
  if (inputEmail.value === "") {
    smallEmail.classList.remove("success");
    smallEmail.classList.add("danger");
    smallEmail.innerHTML = "Veuillez saisir une valeur";
  }
  // Testing de la valeur saisie dans le champs Email
  else if (regexEmail.test(inputEmail.value)) {
    smallEmail.classList.remove("danger");
    smallEmail.classList.add("success");
    smallEmail.innerHTML = "Adresse e-mail valide";
  } else {
    smallEmail.classList.remove("success");
    smallEmail.classList.add("danger");
    smallEmail.innerHTML = "Adresse e-mail non valide";
  }
};

const filledEmail = email.nextElementSibling;

email.addEventListener("focusout", function () {
  filledEmail.textContent = "";
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

  // Modification du texte sous le champs date de naissance
  let smallBirthday = inputBirth.nextElementSibling;

  // Verification si la valeur n'existe pas
  if (year > 2003 || year < 1930) {
    smallBirthday.classList.remove("success");
    smallBirthday.classList.add("danger");
    smallBirthday.innerHTML = "Veuillez saisir votre date de naissance";
  } else {
    smallBirthday.classList.remove("danger");
    smallBirthday.classList.add("success");
    smallBirthday.innerHTML = "Date de naissance valide";
  }
};

// On vise la balise HTML "small" dans une variable
const filledBirthday = birthdate.nextElementSibling;

// On crée une écoute "focusout" et éxecute une fonction à réaliser sur le champs date de naissance
birthdate.addEventListener("focusout", function () {
  // On remplace le texte dans la balise "small"
  filledBirthday.textContent = "";
});

//***************NOMBRE DE TOURNOIS******************//

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

  // Modification du texte sous le champs date de naissance
  let smallBirthday = inputBirth.nextElementSibling;

  // Verification si la valeur n'existe pas
  if (year > 2003 || year < 1930) {
    smallBirthday.classList.remove("success");
    smallBirthday.classList.add("danger");
    smallBirthday.innerHTML = "Veuillez saisir votre date de naissance";
  } else {
    smallBirthday.classList.remove("danger");
    smallBirthday.classList.add("success");
    smallBirthday.innerHTML = "Date de naissance valide";
  }
};

const filledBirthday = birthdate.nextElementSibling;

birthdate.addEventListener("focusout", function () {
  filledBirthday.textContent = "";
});
