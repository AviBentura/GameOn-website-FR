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
form.first.addEventListener("input", function () {
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
    return true;
  } else {
    // Si la valeur ne passe pas le test de la regex
    smallFirst.setAttribute("data-error-visible", "true");
    smallFirst.setAttribute("data-error", "Veuillez saisir une autre valeur");
  }
};

//************Validation Nom **********************//

// Ecoute de la modification de l'élément Nom
form.last.addEventListener("input", function () {
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

  if (inputLastName.value.trim() == "") {
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
    return true;
  } else {
    smallLast.setAttribute("data-error-visible", "true");
    smallLast.setAttribute("data-error", "Veuillez saisir votre nom");
  }
};

//***************E-MAIL******************************//

// Ecoute de la modification de l'élément E-mail
form.email.addEventListener("input", function () {
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
    return true;
  } else {
    smallEmail.removeAttribute("data-error-visible");
    smallEmail.setAttribute("data-error-visible", "true");
    smallEmail.setAttribute("data-error", "Adresse e-mail non valide");
  }
};

const filledEmail = email.parentElement;

console.log(filledEmail);

email.addEventListener("focusout", function () {
  if (!validateEmail.value) {
    filledEmail.setAttribute("data-error-visible", "true");
    filledEmail.setAttribute("data-error", "Veuillez saisir une valeur");
  }
  setTimeout(function () {
    filledEmail.removeAttribute("data-error-visible");
    filledEmail.removeAttribute("data-error");
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
    return true;
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
form.quantity.addEventListener("input", function () {
  validateTournament(this);
});

// Definition de la variable qui correspond à la 'div' des input => Ville
const checkboxPreview = form.childNodes[25];

const validateTournament = function (inputNumber) {
  // Modification du texte sous le champs date de naissance
  const smallTournament = inputNumber.parentElement;

  // Création de la variable qui récupère l'élément 'div' des checkbox ville
  const checkboxT = document.getElementById("checkbox");

  // Création de la variable qui récupère l'élément le paragraphe 'Quelles villes'
  const pCheckbox = document.querySelector("p.text-label");

  // Verification si la valeur n'existe pas
  if (inputNumber.value === "") {
    checkboxPreview.removeAttribute("data-error-visible");
    checkboxPreview.removeAttribute("data-error");
    // Vérification si la valeur est négative
  } else if (inputNumber.value < 0) {
    checkboxT.classList.remove("switchOff");
    pCheckbox.classList.remove("switchOff");

    checkboxPreview.removeAttribute("data-error-visible");
    checkboxPreview.removeAttribute("data-error");
    // Vérification si la valeur est supérrieur à 99 tournois
  } else if (inputNumber.value === "0") {
    // Ajout de la classe 'switchOff' à la div parent qui contient le choix des villes
    checkboxT.classList.add("switchOff");
    // Ajout de la classe 'switchOff' au paragraphe qui contient le texte 'Quelles villes'
    pCheckbox.classList.add("switchOff");

    // Si la valeur est supérieur à 99
  } else if (inputNumber.value > 99) {
    // Suppression de la classe 'switchOff' de l'élément div
    checkboxT.classList.remove("switchOff");
    // Suppression de la classe 'switchOff' du paragraphe qui contient le texte
    pCheckbox.classList.remove("switchOff");

    checkboxPreview.removeAttribute("data-error-visible");
    checkboxPreview.removeAttribute("data-error");
    // Si aucune des conditions remplie, retirer les propriétés CSS data-error et data-error-visible
  } else {
    checkboxT.classList.remove("switchOff");
    pCheckbox.classList.remove("switchOff");
    smallTournament.removeAttribute("data-error-visible");
    smallTournament.removeAttribute("data-error");
    return true;
  }
};

quantity.addEventListener("focusout", function () {
  quantity.parentElement.setAttribute("data-error-visible", "true");
  quantity.parentElement.setAttribute(
    "data-error",
    "Veuillez saisir une valeur valide"
  );
  if (validateTournament(form.quantity)) {
    return true;
  } else if (quantity.value < 0) {
    quantity.parentElement.setAttribute("data-error-visible", "true");
    quantity.parentElement.setAttribute(
      "data-error",
      "veuillez saisir une valeur positive"
    );
    checkboxPreview.removeAttribute("data-error-visible");
    checkboxPreview.removeAttribute("data-error");
  } else if (quantity.value > 99) {
    quantity.parentElement.setAttribute("data-error-visible", "true");
    quantity.parentElement.setAttribute(
      "data-error",
      "veuillez saisir une valeur inférieur"
    );
    checkboxPreview.removeAttribute("data-error-visible");
    checkboxPreview.removeAttribute("data-error");
  } else if (quantity.value === "0") {
    quantity.parentElement.removeAttribute("data-error-visible");
    quantity.parentElement.removeAttribute("data-error");
    checkboxPreview.removeAttribute("data-error-visible");
    checkboxPreview.removeAttribute("data-error");
  } else if (quantity.value !== null) {
    checkboxPreview.removeAttribute("data-error-visible");
    checkboxPreview.removeAttribute("data-error");
  }
});

//************CHECKBOX LIEUX DES TOURNOIS***********//

const checkboxElement = document.querySelectorAll(".checkbox-label");

const checkboxInput = document.getElementById("checkbox");

const checkboxNext = checkboxInput.nextElementSibling;

// Récupération des données des elements checkbox à partir d'une fonction et de conditions
form.addEventListener("click", function () {
  validateCheck(this);
});

// Création d'une fonction qui regroupe tout les elements des checkbox
function validateCheck() {
  let btnCheck = document.getElementsByClassName("checkbox-input");
  if (btnCheck[0].checked) {
    checkboxInput.removeAttribute("data-error");
    checkboxInput.removeAttribute("data-error-visible");
  } else if (btnCheck[1].checked) {
    checkboxInput.removeAttribute("data-error");
    checkboxInput.removeAttribute("data-error-visible");
  } else if (btnCheck[2].checked) {
    checkboxInput.removeAttribute("data-error");
    checkboxInput.removeAttribute("data-error-visible");
  } else if (btnCheck[3].checked) {
    checkboxInput.removeAttribute("data-error");
    checkboxInput.removeAttribute("data-error-visible");
  } else if (btnCheck[4].checked) {
    checkboxInput.removeAttribute("data-error");
    checkboxInput.removeAttribute("data-error-visible");
  } else if (btnCheck[5].checked) {
    checkboxInput.removeAttribute("data-error");
    checkboxInput.removeAttribute("data-error-visible");
  } else {
    checkboxInput.setAttribute("data-error-visible", "true");
    checkboxInput.setAttribute("data-error", "Veuillez saisir une valeur");
  }
}

//************CHECKBOX CONDITIONS***********//

checkboxNext.addEventListener("click", function () {
  validateCheck();
});

function valideChecked() {
  const btnChecked = document.getElementById("checkbox1");
  if (btnChecked.checked) {
    return true;
  } else {
    return false;
  }
}
//******************** C'EST PARTIE *********************************/
//******************** BOUTON SUBMIT ********************************/

form.addEventListener("submit", function (e) {
  e.preventDefault();
  return validate();
});

function validate() {
  let error;

  let inputs = document.getElementsByTagName("input");

  if (valideChecked(form.checkbox1) === false) {
    error = "veuillez accepter les conditions d'utilisation";
  }

  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      error = "Veuillez renseigner tous les champs";
      break;
    }
  }
  if (error) {
    alert(error);
    return false;
  } else {
    alert("Formulaire envoyé !");
    form.submit();
  }
}
