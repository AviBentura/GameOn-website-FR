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
  let regexFirst = new RegExp("^[a-zA-Z-]+$", "g");

  // Modification du texte sous le champs Prénom
  let smallText = inputFirstName.nextElementSibling;

  // Testing de la valeur saisie dans le champs Prénom
  if (regexFirst.test(inputFirstName.value)) {
    smallText.classList.remove("danger");
    smallText.innerHTML = "";
  } else {
    smallText.innerHTML = "Veuillez saisir une autre valeur";
    smallText.classList.add("danger");
  }
};

// Ecoute de la modification de l'élément Nom
form.last.addEventListener("change", function () {
  validateFirst(this);
});
