
function validation() {
    var fname = document.getElementById("fname");
    firstname = document.getElementById("fname").value.length;
    var lname = document.getElementById("lastname");
    lastname = document.getElementById("lastname").value.length;
    var Adresse = document.getElementById("adress");
    adress = document.getElementById("adress").value.length;
    var mail = document.getElementById("contact").value.length;
    var date = document.getElementById("date of birth").value.length;
    
    document.getElementById("Error").innerHTML = "";
    
    if (firstname < 5) {
    document.getElementById("Error").innerHTML =
    "La saisie du nom est obligatoire";
    return false;
    }
    
    if (lastname < 5) {
    document.getElementById("Error").innerHTML =
    "La saisie du prénom est obligatoire";
    return false;
    }
    if (date < 5) {
    document.getElementById("Error").innerHTML = "La date est obligatoire";
    return false;
    }
    
    const dateNaissance = new Date(document.getElementById("date of birth").value);
    if (dateNaissance.getTime() > Date.now()) {
    document.getElementById("Error").innerHTML =
    "La date de naissance ne peut pas etre sup à la date d'aujourd'hui ";
    return false;
    }
    
    if (Adresse < 5) {
    document.getElementById("adress");
    document.getElementById("Error").innerHTML =
    "La saisie d'Adresse est obligatoire";
    return false;
    }
    
    if (mail < 5) {
    document.getElementById("email");
    document.getElementById("Error").innerHTML =
    "La saisie d'Email est obligatoire";
    return false;
    }
    
    if (document.getElementById("Error").innerHTML == "") {
    document.getElementById("resultat").innerHTML =
    "Bienvenue " + document.getElementById("fname").value;
    return true;
    }
    }