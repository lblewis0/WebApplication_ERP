
//Redimensionne les divs dans lequel se trouve les boutons ajouter en fonction des tableaux au-dessus
$(document).ready(function () {

    var tableWidth = $("#contacts-table").width();
    $("#right-button-div-contact").css("width", tableWidth + "px");

    tableWidth = $("#organisation-table").width();
    $("#right-button-div-organisation").css("width", tableWidth + "px");
});