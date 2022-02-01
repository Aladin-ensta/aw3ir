

function validation() {
    if ((document.getElementById("lastname").value.length >s= 5) &&
        (document.getElementById("fname").value.length >= 5) &&
        (document.getElementById("date of birth").value.length >= 5) &&
        (document.getElementById("adress").value.length >= 5) &&
        (document.getElementById("contact").value.length >= 5)) 
        { document.getElementById("resultat").innerHTML = "Bienvenue " + document.getElementById("fname").value; }
    else if ((document.getElementById("lastname").value.length = 0) ||
        (document.getElementById("fname").value.length = 0) ||
        (document.getElementById("date of birth").value.length = 0) ||
        (document.getElementById("adress").value.length = 0) ||
        (document.getElementById("contact").value.length = 0)) 
        { document.getElementById("error").innerHTML = "La saisie du nom est obligatoire"; }
}
