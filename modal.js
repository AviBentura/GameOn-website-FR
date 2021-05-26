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
// ************** ACTION MODAL ***************//
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

// variables rattachée au éléments du formulaire
let form = document.querySelector("#form-registration");

//********************************************************//
//***********                       **********************//
//*********   ECOUTE SUR LES INPUTS    *******************//
//***********                       **********************//
//********************************************************//

// Ecoute sur l'intégralité du formulaire sur les 'inputs'
// Le but de cette écoute, est de vérifier si rien n'est tapé dans les champs inputs

form.addEventListener("input", function () {
  //Vérification si le champs Prénom ne contient rien

  if (!first.value) {
    first.parentElement.setAttribute("data-error-visible", "true");
    first.parentElement.setAttribute("data-error", "Veuillez saisir votre Nom");
  }

  //Vérification si le champs Prénom ne contient rien

  if (!last.value) {
    last.parentElement.setAttribute("data-error-visible", "true");
    last.parentElement.setAttribute(
      "data-error",
      "Veuillez saisir votre Prénom"
    );
  }
});

//********************************************************//
//***********                       **********************//
//*********     VALIDATION PRENOM    *********************//
//***********                       **********************//
//********************************************************//

// Ecoute de la modification du champs correspondant au Prénom
// Ecoute est faite sur la valeur de l'input

form.first.addEventListener("input", function () {
  // On renvoie vers une fonction qui va éxécuter un fonctionnement définie

  validateFirst(this);
});

const validateFirst = function (inputFirstName) {
  //Création de la RegExp qui va vérifier les valeurs indiquées dans le champs prénom

  let regexFirst = new RegExp(
    // On autorise les éléments en Majuscule
    // On autorise les éléments en minuscule
    // On autorise les lettres particulière
    // On accepte les '-' mais pas les '_' n'y les " ' "
    // On autorise la saisie de plusieurs fois la meme valeurs avec le ' + '
    // On effectue une recherche de façon générale avec le ' g ' de la regExp

    "^[a-zA-Z-àâçéèêëìíîïñòóôöùúûüýÿÀÁÂÇÈÉÊËÌÍÎÏÑÒÓÔÙÚÛÜÝŸ]+$",
    "g"
  );

  // Modification du texte sous le champs Prénom
  // On cible l'élément parent pour pouvoir lui assigner des attributs dans certains cas
  // Avec la variable smallFirst

  let smallFirst = inputFirstName.parentElement;

  // Si jamais la valeur est inférieur à 2 élément
  // On récupère cette valeur grace à length

  if (inputFirstName.value.length < 2) {
    // On ajoute a la div parent l'attribut data-error-visible à true pour appeler les propriétés de styles de CSS

    smallFirst.setAttribute("data-error-visible", "true");

    // On ajoute a la div parent l'attribut data-error
    // Avec la valeur que l'on souhaite en paramettre

    smallFirst.setAttribute(
      "data-error",
      "Veuillez saisir au minimum 2 caractères"
    );

    // Sinon si la valeur indiquer est supérieur ou égal à 16 caractères
  } else if (inputFirstName.value.length >= 16) {
    smallFirst.setAttribute("data-error-visible", "true");
    smallFirst.setAttribute(
      "data-error",
      "Veuillez saisir un prénom plus court"
    );
  }

  // On effectue un test de la valeur 'Prenom' si les conditions précedentes
  // ne sont pas vérifiées
  else if (regexFirst.test(inputFirstName.value)) {
    // Si la valeur passe le test de regExp
    // alors les attributs de styles ajoutés précedement sont retirés

    smallFirst.removeAttribute("data-error-visible");
    smallFirst.removeAttribute("data-error");

    // On retourne également la valeur de True
    // plusque la valeur 'Prénom' passe le Test

    return true;

    // Sinon la valeur ne passe pas le test de la regex
    // Je demande à l'utilisateur de saisir une autre valeur
  } else {
    // Dans ce cas j'ajoute les attributs de style
    // Qui vont indiquer à l'utilisateur la démarche à suivre

    smallFirst.setAttribute("data-error-visible", "true");
    smallFirst.setAttribute("data-error", "Veuillez saisir une autre valeur");
  }
};

//********************************************************//
//***********                       **********************//
//*********     VALIDATION NOM       *********************//
//***********                       **********************//
//********************************************************//

// Ecoute de la modification au niveau de l'input sur le champs Nom

form.last.addEventListener("input", function () {
  validateLast(this);
});

const validateLast = function (inputLastName) {
  //Création de la RegExp qui va vérifier la valeur saisie dans le champs Nom

  let regexLast = new RegExp(
    // On autorise les éléments en Majuscule
    // On autorise les éléments en minuscule
    // On autorise les lettres particulière
    // On accepte les '-' mais pas les '_'
    // On accepte les " ' " et les espaces
    // On autorise la saisie de plusieurs fois la meme valeurs avec le ' + '
    // On effectue une recherche de façon générale avec le ' g ' de la regExp

    "^[a-zA-Z 'àâçéèêëìíîïñòóôöùúûüýÿÀÁÂÇÈÉÊËÌÍÎÏÑÒÓÔÙÚÛÜÝŸ]+$",
    "g"
  );

  // La variables smallLast va nous permettre de génerer des attributs de styles
  // qui vont indiquer à l'utilisateur la démarche à suivre

  let smallLast = inputLastName.parentElement;

  // Si jamais la valeur du champs est inférieur à 2 caractères

  if (inputLastName.value.length < 2) {
    smallLast.setAttribute("data-error-visible", "true");
    smallLast.setAttribute(
      "data-error",
      "Veuillez saisir au minimum 2 caractères"
    );
  } // Si jamais la valeur du champs est superieur ou égal à 16 caractère
  else if (inputLastName.value.length >= 16) {
    smallLast.setAttribute("data-error-visible", "true");
    smallLast.setAttribute("data-error", "Veuillez saisir un nom plus court");
  }
  // Si les conditions précedentes ne sont pas verifiées
  // On test la valeur saisie dans le champs Prénom
  else if (regexLast.test(inputLastName.value)) {
    // Si celle si est vrai :
    smallLast.removeAttribute("data-error-visible");
    smallLast.removeAttribute("data-error");
    return true;
    // Sinon :
  } else {
    smallLast.setAttribute("data-error-visible", "true");
    smallLast.setAttribute("data-error", "Veuillez saisir une valeur valide");
  }
};

//********************************************************//
//***********                       **********************//
//*********     VALIDATION E-MAIL    *********************//
//***********                       **********************//
//********************************************************//

// Ecoute au niveau de l'input du champs correspondant à la saisie de l'E-mail

form.email.addEventListener("input", function () {
  validateEmail(this);
});

const validateEmail = function (inputEmail) {
  //Création de la RegExp qui va vérifier la valeur de l'E-mail

  let regexEmail = new RegExp(
    // On accepte en premiere Partie :
    // Les Majuscules de A à Z
    // Les minuscules de a à z
    // Les Chiffres de 0 à 9
    // Les ' . '
    // Les ' _ '
    // Les ' - '
    // On peut taper plusieurs la méme valeur gràce au ' + '
    // On accepte en seconde Partie :
    // Un seul @
    // Suivie de MAJUSCULES ou minuscules
    // de A à Z et les chiffres de 0 à 9
    // Ainsi que => ' . ' ' - ' ' _ '
    // Cela plusieurs fois
    // On accepte en troisième Partie :
    // Un seul '.'
    // Suivie des lettres en minuscules uniquement de
    // a à z
    // On accepte après le point de 2 lettres à 10 lettres maximum
    // On effectue une recherche de façon général

    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );

  // Modification du texte sous le champs de saisie E-mail
  // Avec la variables smallEmail qui récupère la 'div' parent

  let smallEmail = inputEmail.parentElement;

  // Testing de la valeur saisie dans le champs Email
  if (regexEmail.test(inputEmail.value)) {
    // Si celle-çi est vérifier on ajoute des attributs de styles CSS
    // Et on indique que l'adresse e-mail est valide

    smallEmail.removeAttribute("data-error-visible");
    smallEmail.setAttribute("data-error-visible", "false");
    smallEmail.setAttribute("data-error", "Adresse e-mail valide");
    return true;
    // Sinon, on indique que la valeur ne respecte pas la regExp
    // et n'a pas passée le Test
  } else {
    smallEmail.removeAttribute("data-error-visible");
    smallEmail.setAttribute("data-error-visible", "true");
    smallEmail.setAttribute("data-error", "Adresse e-mail non valide");
  }
};

// Création de la variable d'affichage du resultat
const filledEmail = email.parentElement;

// On effectue une écoute sur l'extérieur du champs lorsque l'on sort du focus
email.addEventListener("focusout", function () {
  // On verifie si la valeur est null
  if (!validateEmail.value) {
    // Dans ce cas on affiche un message d'erreur
    filledEmail.setAttribute("data-error-visible", "true");
    filledEmail.setAttribute(
      "data-error",
      "Veuillez saisir votre adresse e-mail"
    );
  }
  // On utilise la fonction SetTimeout pour dire
  // Au bout de 3 seconde rettirer le message d'erreur
  // C'est également le cas si la valeur est bonne
  setTimeout(function () {
    filledEmail.removeAttribute("data-error-visible");
    filledEmail.removeAttribute("data-error");
  }, 3000);
});

//********************************************************//
//******                                 *****************//
//***     VALIDATION DATE DE NAISSANCE    ****************//
//******                                ******************//
//********************************************************//

// Ecoute de la modification sur l'élément Date de Naissance
// Sur l'évenement Input
form.birthdate.addEventListener("input", function () {
  validateBirth(this);
});

// On crée une variable rataché à l'élément parent 'div'
const filledBirthday = birthdate.parentElement;

// Fonction éxécutée lors de l'écoute sur le champs Input
const validateBirth = function (inputBirth) {
  // Création de la variable qui récupère la date
  let born = new Date(inputBirth.value);

  // Extrait des composants de la date
  // Notamment l'année de naissance
  let years = born.getFullYear();

  // Modification du texte sous le champs date de naissance
  let smallBirthday = inputBirth.parentElement;

  // Verification si la valeur est située entre 1930 et 2003
  // Si la valeur est juste on afiche un message de validation
  if (years <= 2003 && years >= 1930) {
    smallBirthday.setAttribute("data-error-visible", "false");
    smallBirthday.setAttribute("data-error", "Date de naissance valide");
    // On retourne également la valeur True
    return true;
  } else {
    // Sinon on indique que la valeur est n'est pas valide
    smallBirthday.setAttribute("data-error-visible", "true");
    smallBirthday.setAttribute(
      "data-error",
      "Veuillez saisir une date de naissance valide"
    );
  }
};

// On effectue une écoute lorsque l'on sort du focus
birthdate.addEventListener("focusout", function () {
  // On vérifie si la valeur saisie dans le champs est null
  if (!birthdate.value) {
    birthdate.parentElement.setAttribute("data-error-visible", "true");
    birthdate.parentElement.setAttribute(
      "data-error",
      "Veuillez saisir votre date de naissance"
    );
  }
  // Si la valeur est vrai alors
  if (validateBirth(form.birthdate)) {
    // On retire le message d'erreur
    birthdate.parentElement.removeAttribute("data-error-visible");
    birthdate.parentElement.removeAttribute("data-error");
  }
});

//********************************************************//
//******                                 *****************//
//***     VALIDATION NOMBRE DE TOURNOIS   ****************//
//******                                ******************//
//********************************************************//

// Ecoute de la modification sur le champs "nombre de tournois"
form.quantity.addEventListener("input", function () {
  validateTournament(this);
});

// Fonction éxécutée à l'écoute de l'input Nombre de tournois
const validateTournament = function (inputNumber) {
  // Definition de la variable qui correspond à la 'div' des input => Ville
  const smallTournament = inputNumber.parentElement;

  // Création de la variable qui récupère l'élément 'div' des checkbox ville
  const checkboxT = document.getElementById("checkbox");

  // Création de la variable qui récupère l'élément le paragraphe 'Quelles villes'
  const pCheckbox = document.querySelector("p.text-label");

  // On utilise ces variables pour appliquer la classe 'switchOff'
  // pCheckbox et checkboxT
  // La classe 'switchOff' va masquer les villes

  // Verification si la valeur saisie est inférieur à 0
  // Sois négative
  if (inputNumber.value < 0) {
    // Dans ce cas on enleve le masque des éléments
    checkboxT.classList.remove("switchOff");
    pCheckbox.classList.remove("switchOff");

    // On ajoute un texte d'erreur correspondant
    quantity.parentElement.setAttribute("data-error-visible", "true");
    quantity.parentElement.setAttribute(
      "data-error",
      "veuillez saisir une valeur positive"
    );
    // Si jamais la valeur est égal à 0
  } else if (inputNumber.value === "0") {
    // Ajout de la classe 'switchOff' à la div parent qui contient le choix des villes
    // Dans ce cas on masques les élements
    checkboxT.classList.add("switchOff");
    // Ajout de la classe 'switchOff' au paragraphe qui contient le texte 'Quelles villes'
    // On masque également 'quelle ville'
    pCheckbox.classList.add("switchOff");

    // Si la valeur est supérieur à 99
    // La valeur 99 est accepté donc si uniquement supérieur
  } else if (inputNumber.value > 99) {
    // Suppression de la classe 'switchOff' de l'élément div
    // On enleve le masque si il a été appliqué
    checkboxT.classList.remove("switchOff");
    // Suppression de la classe 'switchOff' du paragraphe qui contient le texte
    pCheckbox.classList.remove("switchOff");

    // On ajoute un message d'erreur
    // Indiquant de saisir une valeur inférieur
    quantity.parentElement.setAttribute("data-error-visible", "true");
    quantity.parentElement.setAttribute(
      "data-error",
      "veuillez saisir une valeur inférieur"
    );
    // Sinon on retire 'switchOff'
  } else {
    checkboxT.classList.remove("switchOff");
    pCheckbox.classList.remove("switchOff");
    // On retire également le message d'erreur
    smallTournament.removeAttribute("data-error-visible");
    smallTournament.removeAttribute("data-error");
    // On retourne la valeur vrai plusqu'aucune des conditions d'erreur n'est remplie
    // La valeur est donc juste
    return true;
  }
};

// On effectue une écoute à la sortie du focus sur le champs 'nombre de tournois'

form.quantity.addEventListener("focusout", function () {
  // Si rien n'est saisie dans le champs
  if (!form.quantity.value) {
    // On affiche un message d'erreur
    quantity.parentElement.setAttribute("data-error-visible", "true");
    quantity.parentElement.setAttribute(
      "data-error",
      "Veuillez saisir une valeur"
    );
    // Sinon on retire le message d'erreur
    // Que l'on remettra si une des conditions précedentes est vérifier
    // Ou si la valeur indiqué est juste
  } else {
    quantity.parentElement.removeAttribute("data-error-visible");
    quantity.parentElement.removeAttribute("data-error");
  }
});

//********************************************************//
//*************                        *******************//
//**********     VALIDATION CHECKBOX   *******************//
//***********    LIEUX DES TOURNOIS     ******************//
//*************                        *******************//
//********************************************************//

// Création de la variable correspondant à la 'div' qui contient les input radio
const checkboxInput = document.getElementById("checkbox");

// Crétion de la variable correspondant à la 'div' avec la checkbox
// Conditions générales d'utilisation
const checkboxNext = checkboxInput.nextElementSibling;

// Ecoute au click  sur le formulaire
// Si click on éxécute la fonction validateCheck()
form.addEventListener("click", function () {
  validateCheck(this);
});

// Création d'une fonction qui regroupe tout les elements des checkbox
function validateCheck() {
  // Création de la variable qui regroupe tout les éléments qui ont pour classe 'checkbox-input'
  // Içi correspondant aux checkbox villes
  let btnCheck = document.getElementsByClassName("checkbox-input");
  // Comme la variable, regroupe un tableau de valeur
  // On indique dans la condition la valeur de l'index correspondant
  if (btnCheck[0].checked) {
    // Pour chaque cas on retire le message d'erreur
    checkboxInput.removeAttribute("data-error");
    checkboxInput.removeAttribute("data-error-visible");
    // Création de la variable correspondant a la première valeur
    let inputOne = document.getElementById("location1");
    // On recupère la valeur de l'input
    let valueOne = inputOne.value;
    console.log(valueOne);
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
    // Sinon on affiche le message d'erreur de séléctionner une ville
    checkboxInput.setAttribute("data-error-visible", "true");
    checkboxInput.setAttribute("data-error", "Veuillez séléctionner une ville");
  }
}

//********************************************************//
//*************                        *******************//
//**********     VALIDATION CHECKBOX   *******************//
//***********       LES CONDITIONS      ******************//
//*************                        *******************//
//********************************************************//

// Ecoute au click sur la 'div' qui contient le checkbox
// Les conditions d'utilisation
checkboxNext.addEventListener("click", function () {
  //On éxécute la fonction validateCheck()
  validateCheck();
});

function valideChecked() {
  // Création de la variable qui récupére l'input 'conditions d'utilisations'
  const btnChecked = document.getElementById("checkbox1");
  // Si la variable est checked (actionnée)
  if (btnChecked.checked) {
    // On retourne la valeur vrai que l'on va réutiliser plus tard
    return true;
  } else {
    // Sinon on retourne faux
    return false;
  }
}

//********************************************************//
//*************                        *******************//
//**********         C'EST PARTIE      *******************//
//***********        BOUTON SUBMIT      ******************//
//*************                        *******************//
//********************************************************//

// Ecoute sur le formulaire sur l'élément 'submit'
// On indique dans la fonction callback un evenement avec la valeur 'e' en parametre
form.addEventListener("submit", function (e) {
  // Graçe à la dotation et l'appel du parametre 'e'
  // On arrete le fonctionnement par defaut de 'submit' qui est d'envoyé le formulaire
  e.preventDefault();
  // Pour retourner la valeur de valide
  // Inscrit coté HTML comme valeur à retourner
  return validate();
});

// Définition de la fonction validate()
function validate() {
  // On crée une variable 'error' qui va regrouper les messages d'erreur
  let error;

  // On crée la variable qui regroupe tout les inputs du formulaire
  let inputs = document.getElementsByTagName("input");

  // Si jamais la fonction validateChecked indique la valeur false
  // Fonction qui va retourner si les conditions d'utilisations sont checked ou pas
  if (valideChecked(form.checkbox1) === false) {
    // Si ce n'est pas le cas la variable 'error' indique un message d'erreur
    error = "Veuillez accepter les conditions d'utilisation";
  }

  // On crée une boucle for qui dit que pour chaque élément de la variable 'inputs'
  // Allant de la valeur du tableau de valeur [0] au dernier [i] en incrementant de 1
  // à chaque fois
  for (let i = 0; i < inputs.length; i++) {
    // Si jamais la valeur de l'input en question est null
    if (!inputs[i].value) {
      // On affiche le message suivant
      error = "Veuillez renseigner tous les champs";
      // On effectue un break pour que éviter que la boucle ne se repete en permanence
      break;
    }
  }
  // On dit que si 'error' est vérifier, donc qu'il y a une erreur
  if (error) {
    // On affiche un pop-up avec le message contenue dans 'error'
    alert(error);
    return false;
    // Sinon on demande l'envoie du formulaire
  } else {
    form.submit();
  }
}
