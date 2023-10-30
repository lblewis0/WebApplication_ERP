
//Redimensionne les divs dans lequel se trouve les boutons ajouter en fonction des tableaux au-dessus
$(document).ready(function () {

    var tableWidth = $("#contacts-table").width();
    $("#right-button-div-contact").css("width", tableWidth + "px");

    tableWidth = $("#organisation-table").width();
    $("#right-button-div-organisation").css("width", tableWidth + "px");

    console.log("Contacts.js --addEventListener --input --prenom-input");
    document.getElementById('prenom-input').addEventListener('input', function () {

        validatePrenom();

    })

    console.log("Contacts.js --addEventListener --focus --prenom-input");
    document.getElementById('prenom-input').addEventListener('focus', function () {

        prenomInputSetFocusStyle();

    })

    console.log("Contacts.js --addEventListener --blur --prenom-input");
    document.getElementById('prenom-input').addEventListener('blur', function () {

        prenomInputSetBlurStyle();

    })

    console.log("Contacts.js --addEventListener --keyup --prenom-input");
    document.getElementById('prenom-input').addEventListener('keyup', function () {

        validatePrenom();

    })

    console.log("Contacts.js --addEventListener --input --nom-input");
    document.getElementById('nom-input').addEventListener('input', function () {

        validateNom();

    })

    console.log("Contacts.js --addEventListener --focus --nom-input");
    document.getElementById('nom-input').addEventListener('focus', function () {

        nomInputSetFocusStyle();

    })

    console.log("Contacts.js --addEventListener --blur --nom-input");
    document.getElementById('nom-input').addEventListener('blur', function () {

        nomInputSetBlurStyle();

    })

    console.log("Contacts.js --addEventListener --keyup --nom-input");
    document.getElementById('nom-input').addEventListener('keyup', function () {

        validateNom();

    })

    console.log("Contacts.js --addEventListener --input --numero-telephone-input");
    document.getElementById('numero-telephone-input').addEventListener('input', function () {

        validateNumeroTelephone();

    })

    console.log("Contacts.js --addEventListener --focus --numero-telephone-input");
    document.getElementById('numero-telephone-input').addEventListener('focus', function () {

        numeroTelephoneInputSetFocusStyle();

    })

    console.log("Contacts.js --addEventListener --blur --numero-telephone-input");
    document.getElementById('numero-telephone-input').addEventListener('blur', function () {

        numeroTelephoneInputSetBlurStyle();

    })

    console.log("Contacts.js --addEventListener --keyup --numero-telephone-input");
    document.getElementById('numero-telephone-input').addEventListener('keyup', function () {

        validateNumeroTelephone();

    })
    
});

function newRequirementLabel(text) {

    var titleRequirementLabel = $('<label>');
    titleRequirementLabel.addClass("contact-form-requirement-label");
    titleRequirementLabel.text(text);

    return titleRequirementLabel;
}

function newValidRequirementLabel(text) {

    var titleRequirementLabel = $('<label>');
    titleRequirementLabel.addClass("contact-form-requirement-label-valid");
    titleRequirementLabel.text(text);

    return titleRequirementLabel;
}

function newInvalidRequirementLabel(text) {

    var titleRequirementLabel = $('<label>');
    titleRequirementLabel.addClass("contact-form-requirement-label-invalid");
    titleRequirementLabel.text(text);

    return titleRequirementLabel;
}


//Prenom validation
function validatePrenom() {

    console.log("--validatePrenom");

    var requirementDiv = $("#contact-form-requirement-div-prenom");
    requirementDiv.empty();

    var prenomInput = document.getElementById('prenom-input');
    var prenomValue = prenomInput.value;

    var isValid = true;

    var validateLogo = document.getElementById('validate-logo-form-prenom');

    if (prenomValue.length > 0) {

        var label1 = newRequirementLabel("le prénom: ");
        var label2 = newValidRequirementLabel("Est requis");

        requirementDiv.append(label1);
        requirementDiv.append(label2);
    }
    else
    {
        var label1 = newRequirementLabel("le prénom: ");
        var label2 = newInvalidRequirementLabel("Est requis");

        requirementDiv.append(label1);
        requirementDiv.append(label2);

        isValid = false;
    }

    if (prenomValue.length >= 2 && prenomValue.length <= 32) {

        var label3 = newValidRequirementLabel("Doit être compris entre 2 et 32 caractères");

        requirementDiv.append(label3);
    }
    else
    {
        var label3 = newInvalidRequirementLabel("Doit être compris entre 2 et 32 caractères");

        requirementDiv.append(label3);

        isValid = false;
    }

    if (!prenomValue.match(/[$&!|#/\:;?_]/))
    {

        var label4 = newValidRequirementLabel("Ne doit pas contenir de caractères spéciaux $&!|#/\:;?_");

        requirementDiv.append(label4);

    }
    else
    {
        var label4 = newInvalidRequirementLabel("Ne doit pas contenir de caractères spéciaux $&!|#/\:;?_");

        requirementDiv.append(label4);

        isValid = false;

    }

    if (!prenomValue.match(/^[^ ]+$/)) {

        var label5 = newInvalidRequirementLabel("Ne doit pas contenir d'espaces");

        requirementDiv.append(label5);

        isValid = false;
    }
    else {
        var label5 = newValidRequirementLabel("Ne doit pas contenir d'espaces");

        requirementDiv.append(label5);
    }

    if (!prenomValue.match(/^[^0-9]+$/)) {

        var label6 = newInvalidRequirementLabel("Ne doit pas contenir de chiffres");

        requirementDiv.append(label6);

        isValid = false;
    }
    else {
        var label6 = newValidRequirementLabel("Ne doit pas contenir de chiffres");

        requirementDiv.append(label6);
    }

    if (isValid) {

        prenomInput.style.border = '1px solid green';
        prenomInput.style.backgroundColor = '#ecffeb';
        prenomInput.style.boxShadow = '0 0 5px green';

        console.log(document.getElementById('validate-logo-form-prenom').src);

        validateLogo.src = '/images/checkCircle-icon.svg';
        validateLogo.style.display = 'block';
    }
    else {

        prenomInput.style.border = '1px solid red';
        prenomInput.style.backgroundColor = '#fff5f5';
        prenomInput.style.boxShadow = '0 0 5px red';

        console.log(document.getElementById('validate-logo-form-prenom').src);

        validateLogo.src = '/images/cancelCircle-icon.svg';
        validateLogo.style.display = 'block';

    }

}

function prenomInputSetFocusStyle() {

    console.log("--prenomInputSetFocusStyle");

    var requirementDiv = $("#contact-form-requirement-div-prenom");
    requirementDiv.empty();

    var prenomInput = document.getElementById('prenom-input');

    if (prenomInput.value)
    {

        var prenomValue = prenomInput.value;

        console.log("true");

        if (prenomValue.length > 0)
        {
            validatePrenom();
        }
        else {

            var label1 = newRequirementLabel("le prénom: ");
            var label2 = newRequirementLabel("Est requis");
            var label3 = newRequirementLabel("Doit être compris entre 2 et 32 caractères");
            var label4 = newRequirementLabel("Ne doit pas contenir de caractères spéciaux $&!|#/\:;?_");
            var label5 = newRequirementLabel("Ne doit pas contenir d'espaces");
            var label6 = newRequirementLabel("Ne doit pas contenir de chiffres");

            requirementDiv.append(label1);
            requirementDiv.append(label2);
            requirementDiv.append(label3);
            requirementDiv.append(label4);
            requirementDiv.append(label5);
            requirementDiv.append(label6);

            prenomInput.style.border = '1px solid #3085C3';
            prenomInput.style.boxShadow = '0 0 5px #3085C3';

        }
    }
    else {

        console.log("false");

        var label1 = newRequirementLabel("le prénom: ");
        var label2 = newRequirementLabel("Est requis");
        var label3 = newRequirementLabel("Doit être compris entre 2 et 32 caractères");
        var label4 = newRequirementLabel("Ne doit pas contenir de caractères spéciaux $&!|#/\:;?_");
        var label5 = newRequirementLabel("Ne doit pas contenir d'espaces");
        var label6 = newRequirementLabel("Ne doit pas contenir de chiffres");

        requirementDiv.append(label1);
        requirementDiv.append(label2);
        requirementDiv.append(label3);
        requirementDiv.append(label4);
        requirementDiv.append(label5);
        requirementDiv.append(label6);

        prenomInput.style.border = '1px solid #3085C3';
        prenomInput.style.boxShadow = '0 0 5px #3085C3';
    }

}

function prenomInputSetBlurStyle() {

    console.log("--prenomInputSetBlurStyle");

    var prenomInput = document.getElementById('prenom-input');
    prenomInput.style.boxShadow = '0 0 0px #3085C3';

    var requirementDiv = $("#contact-form-requirement-div-prenom");
    requirementDiv.empty();

}


//Nom validation
function validateNom() {

    console.log("--validateNom");

    var requirementDiv = $("#contact-form-requirement-div-nom");
    requirementDiv.empty();

    var nomInput = document.getElementById('nom-input');
    var nomValue = nomInput.value;

    var isValid = true;

    var validateLogo = document.getElementById('validate-logo-form-nom');

    if (nomValue.length > 0) {

        var label1 = newRequirementLabel("le nom: ");
        var label2 = newValidRequirementLabel("Est requis");

        requirementDiv.append(label1);
        requirementDiv.append(label2);
    }
    else {
        var label1 = newRequirementLabel("le nom: ");
        var label2 = newInvalidRequirementLabel("Est requis");

        requirementDiv.append(label1);
        requirementDiv.append(label2);

        isValid = false;
    }

    if (nomValue.length >= 2 && nomValue.length <= 32) {

        var label3 = newValidRequirementLabel("Doit être compris entre 2 et 32 caractères");

        requirementDiv.append(label3);
    }
    else {
        var label3 = newInvalidRequirementLabel("Doit être compris entre 2 et 32 caractères");

        requirementDiv.append(label3);

        isValid = false;
    }

    if (!nomValue.match(/[$&!|#/\:;?_]/)) {

        var label4 = newValidRequirementLabel("Ne doit pas contenir de caractères spéciaux $&!|#/\:;?_");

        requirementDiv.append(label4);

    }
    else {
        var label4 = newInvalidRequirementLabel("Ne doit pas contenir de caractères spéciaux $&!|#/\:;?_");

        requirementDiv.append(label4);

        isValid = false;

    }

    if (!nomValue.match(/^[^ ]+$/)) {

        var label5 = newInvalidRequirementLabel("Ne doit pas contenir d'espaces");

        requirementDiv.append(label5);

        isValid = false;
    }
    else {
        var label5 = newValidRequirementLabel("Ne doit pas contenir d'espaces");

        requirementDiv.append(label5);
    }

    if (!nomValue.match(/^[^0-9]+$/)) {

        var label6 = newInvalidRequirementLabel("Ne doit pas contenir de chiffres");

        requirementDiv.append(label6);

        isValid = false;
    }
    else {
        var label6 = newValidRequirementLabel("Ne doit pas contenir de chiffres");

        requirementDiv.append(label6);
    }

    if (isValid) {

        nomInput.style.border = '1px solid green';
        nomInput.style.backgroundColor = '#ecffeb';
        nomInput.style.boxShadow = '0 0 5px green';

        console.log(document.getElementById('validate-logo-form-nom').src);

        validateLogo.src = '/images/checkCircle-icon.svg';
        validateLogo.style.display = 'block';
    }
    else {

        nomInput.style.border = '1px solid red';
        nomInput.style.backgroundColor = '#fff5f5';
        nomInput.style.boxShadow = '0 0 5px red';

        console.log(document.getElementById('validate-logo-form-nom').src);

        validateLogo.src = '/images/cancelCircle-icon.svg';
        validateLogo.style.display = 'block';

    }
}

function nomInputSetFocusStyle() {

    console.log("--nomInputSetFocusStyle");

    var requirementDiv = $("#contact-form-requirement-div-nom");
    requirementDiv.empty();

    var nomInput = document.getElementById('nom-input');

    if (nomInput.value) {

        var nomValue = nomInput.value;

        console.log("true");

        if (nomValue.length > 0) {
            validateNom();
        }
        else {

            var label1 = newRequirementLabel("le prénom: ");
            var label2 = newRequirementLabel("Est requis");
            var label3 = newRequirementLabel("Doit être compris entre 2 et 32 caractères");
            var label4 = newRequirementLabel("Ne doit pas contenir de caractères spéciaux $&!|#/\:;?_");
            var label5 = newRequirementLabel("Ne doit pas contenir d'espaces");
            var label6 = newRequirementLabel("Ne doit pas contenir de chiffres");

            requirementDiv.append(label1);
            requirementDiv.append(label2);
            requirementDiv.append(label3);
            requirementDiv.append(label4);
            requirementDiv.append(label5);
            requirementDiv.append(label6);

            nomInput.style.border = '1px solid #3085C3';
            nomInput.style.boxShadow = '0 0 5px #3085C3';

        }
    }
    else {

        console.log("false");

        var label1 = newRequirementLabel("le prénom: ");
        var label2 = newRequirementLabel("Est requis");
        var label3 = newRequirementLabel("Doit être compris entre 2 et 32 caractères");
        var label4 = newRequirementLabel("Ne doit pas contenir de caractères spéciaux $&!|#/\:;?_");
        var label5 = newRequirementLabel("Ne doit pas contenir d'espaces");
        var label6 = newRequirementLabel("Ne doit pas contenir de chiffres");

        requirementDiv.append(label1);
        requirementDiv.append(label2);
        requirementDiv.append(label3);
        requirementDiv.append(label4);
        requirementDiv.append(label5);
        requirementDiv.append(label6);

        nomInput.style.border = '1px solid #3085C3';
        nomInput.style.boxShadow = '0 0 5px #3085C3';
    }

}

function nomInputSetBlurStyle() {

    console.log("--nomInputSetBlurStyle");

    var nomInput = document.getElementById('nom-input');
    nomInput.style.boxShadow = '0 0 0px #3085C3';

    var requirementDiv = $("#contact-form-requirement-div-nom");
    requirementDiv.empty();

}


//Numero de telephone validation
function validateNumeroTelephone() {

    console.log("--validateNom");

    var requirementDiv = $("#contact-form-requirement-div-numero-telephone");
    requirementDiv.empty();

    var numeroInput = document.getElementById('numero-telephone-input');
    var numeroValue = numeroInput.value;

    var gsmInput = document.getElementById('numero-gsm-input');
    var gsmValue = gsmInput.value;

    var isValid = true;

    var validateLogo = document.getElementById('validate-logo-form-numero-telephone');

    if (numeroValue.length === 1) {

        if (numeroValue.charAt(0) === "0") {

            numeroInput.value = "+32" + numeroValue.substring(1);
            var label1 = newRequirementLabel("le numéro de téléphone : ");
        }
        else {

            numeroInput.value = null;

            var label1 = newRequirementLabel("le numéro de téléphone : ");
            var label2 = newInvalidRequirementLabel("Doit commencer par 0");

            requirementDiv.append(label1);
            requirementDiv.append(label2);

            isValid = false;
        }
    }
    else
    {
        //Doit obligatoirement être commencé par +32
        if (numeroValue.length != 12)
        {

        }
    }

    //if(numeroValue.length > 1)
    //{
    //    var label1 = newRequirementLabel("le nom: ");
    //    var label2 = newInvalidRequirementLabel("Est requis");

    //    requirementDiv.append(label1);
    //    requirementDiv.append(label2);

    //    isValid = false;
    //}

    //if (nomValue.length >= 2 && nomValue.length <= 32) {

    //    var label3 = newValidRequirementLabel("Doit être compris entre 2 et 32 caractères");

    //    requirementDiv.append(label3);
    //}
    //else {
    //    var label3 = newInvalidRequirementLabel("Doit être compris entre 2 et 32 caractères");

    //    requirementDiv.append(label3);

    //    isValid = false;
    //}

    //if (!nomValue.match(/[$&!|#/\:;?_]/)) {

    //    var label4 = newValidRequirementLabel("Ne doit pas contenir de caractères spéciaux $&!|#/\:;?_");

    //    requirementDiv.append(label4);

    //}
    //else {
    //    var label4 = newInvalidRequirementLabel("Ne doit pas contenir de caractères spéciaux $&!|#/\:;?_");

    //    requirementDiv.append(label4);

    //    isValid = false;

    //}

    //if (!nomValue.match(/^[^ ]+$/)) {

    //    var label5 = newInvalidRequirementLabel("Ne doit pas contenir d'espaces");

    //    requirementDiv.append(label5);

    //    isValid = false;
    //}
    //else {
    //    var label5 = newValidRequirementLabel("Ne doit pas contenir d'espaces");

    //    requirementDiv.append(label5);
    //}

    //if (!nomValue.match(/^[^0-9]+$/)) {

    //    var label6 = newInvalidRequirementLabel("Ne doit pas contenir de chiffres");

    //    requirementDiv.append(label6);

    //    isValid = false;
    //}
    //else {
    //    var label6 = newValidRequirementLabel("Ne doit pas contenir de chiffres");

    //    requirementDiv.append(label6);
    //}

    if (isValid) {

        numeroInput.style.border = '1px solid green';
        numeroInput.style.backgroundColor = '#ecffeb';
        numeroInput.style.boxShadow = '0 0 5px green';

        validateLogo.src = '/images/checkCircle-icon.svg';
        validateLogo.style.display = 'block';
    }
    else {

        numeroInput.style.border = '1px solid red';
        numeroInput.style.backgroundColor = '#fff5f5';
        numeroInput.style.boxShadow = '0 0 5px red';

        validateLogo.src = '/images/cancelCircle-icon.svg';
        validateLogo.style.display = 'block';

    }
}

function numeroTelephoneInputSetFocusStyle() {

    console.log("--numeroTelephoneInputSetFocusStyle");

    var requirementDiv = $("#contact-form-requirement-div-numero-telephone");
    requirementDiv.empty();

    var numeroInput = document.getElementById('numero-telephone-input');

    if (numeroInput.value) {

        var numeroValue = numeroInput.value;

        console.log("true");

        if (numeroValue.length > 0) {
            validateNumeroTelephone();
        }
        else {

            var label1 = newRequirementLabel("le numéro de téléphone : ");
            var label2 = newRequirementLabel("Est requis");
            var label3 = newRequirementLabel("Un numéro de téléphone ou gsm minimum est requis");
            var label4 = newRequirementLabel("Ne doit contenir que des chiffres");
            var label5 = newRequirementLabel("9 chiffres requis");

            requirementDiv.append(label1);
            requirementDiv.append(label2);
            requirementDiv.append(label3);
            requirementDiv.append(label4);
            requirementDiv.append(label5);

            numeroInput.style.border = '1px solid #3085C3';
            numeroInput.style.boxShadow = '0 0 5px #3085C3';

        }
    }
    else {

        console.log("false");

        var label1 = newRequirementLabel("le numéro de téléphone : ");
        var label2 = newRequirementLabel("Est requis");
        var label3 = newRequirementLabel("Un numéro de téléphone ou gsm minimum est requis");
        var label4 = newRequirementLabel("Ne doit contenir que des chiffres");
        var label5 = newRequirementLabel("9 chiffres requis");

        requirementDiv.append(label1);
        requirementDiv.append(label2);
        requirementDiv.append(label3);
        requirementDiv.append(label4);
        requirementDiv.append(label5);

        numeroInput.style.border = '1px solid #3085C3';
        numeroInput.style.boxShadow = '0 0 5px #3085C3';
    }

}

function numeroTelephoneInputSetBlurStyle() {

    console.log("--numeroTelephoneInputSetBlurStyle");

    var numeroInput = document.getElementById('numero-telephone-input');
    numeroInput.style.boxShadow = '0 0 0px #3085C3';

    var requirementDiv = $("#contact-form-requirement-div-numero-telephone");
    requirementDiv.empty();

}

//Open-Close Contact Form
function openContactForm()
{
    console.log("openContactForm --exe");

    var contactFormMainDiv = $("#contact-form-div");
    contactFormMainDiv.css("display", "flex");

    var mainDivOverlay = $(".overlay");
    mainDivOverlay.css("display", "block");

}

function closeContactForm() {
    console.log("closeContactForm --exe");

    var contactFormMainDiv = $("#contact-form-div");
    contactFormMainDiv.css("display", "none");

    var mainDivOverlay = $(".overlay");
    mainDivOverlay.css("display", "none");

}