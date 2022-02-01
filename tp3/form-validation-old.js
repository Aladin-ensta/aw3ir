
document.querySelector( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
      

            document.querySelector("#nom").keyup(function(){
                if((document.querySelector("#nom").value.length < 5))
                {
                    document.querySelector("#nom").css("border-color","#ff0000");
                }
                else
                {
                    document.querySelector("#nom").css("border-color","#48DE14");
                }
            
            });
            document.querySelector("#Prenom").keyup(function(){
                if((document.querySelector("#Prenom").value.length < 5))
                {
                    document.querySelector("#Prenom").css("border-color","#ff0000");
                }
                else
                {
                    document.querySelector("Prenom").css("border-color","#48DE14");
                }
            
            });
            document.querySelector("#Adresse").keyup(function(){
                if((document.querySelector("#Adresse").value.length < 5))
                {
                    document.querySelector("#Adresse").css("border-color","#ff0000");
                }
                else
                {
                    document.querySelector("#Adresse").css("border-color","#48DE14");
                }
            
            });
            document.querySelector("#datedenaissance").keyup(function(){
                if((document.querySelector("#datedenaissance").value.length < 5))
                {
                    document.querySelector("#datedenaissance").css("border-color","#ff0000");
                }
                else
                {
                    document.querySelector("#datedenaissance").css("border-color","#48DE14");
                }
            
            });
            document.querySelector("#email").keyup(function(){
                if((document.querySelector("#email").value.length < 5))
                {
                    document.querySelector("#email").css("border-color","#ff0000");
                }
                else
                {
                    document.querySelector("#email").css("border-color","#48DE14");
                }
            
            });

            document.querySelector("#nom").keydown(function(){
                if((document.querySelector("#nom").value.length < 5))
                {
                    document.querySelector("#nom").css("border-color","#ff0000");
                }
                else
                {
                    document.querySelector("#nom").css("border-color","#48DE14");
                }
            
            });
            document.querySelector("#Prenom").keydown(function(){
                if((document.querySelector("#Prenom").value.length < 5))
                {
                document.querySelector("#Prenom").css("border-color","#ff0000");
                }
                else
                {
                    document.querySelector("#Prenom").css("border-color","#48DE14");
                }
            
            });
            document.querySelector("#Adresse").keydown(function(){
                if((document.querySelector("#Adresse").value.length < 5))
                {
                    document.querySelector("#Adresse").css("border-color","#ff0000");
                }
                else
                {
                    document.querySelector("#Adresse").css("border-color","#48DE14");
                }
            
            });
            document.querySelector("#datedenaissance").keydown(function(){
                if((document.querySelector("#datedenaissance").value.length < 5))
                {
                    document.querySelector("#datedenaissance").css("border-color","#ff0000");
                }
                else
                {
                    document.querySelector("#datedenaissance").css("border-color","#48DE14");
                }
            
            });
            document.querySelector("#email").keydown(function(){
                if((document.querySelector("#email").value.length < 5))
                {
                    document.querySelector("#email").css("border-color","#ff0000");
                }
                else
                {
                    document.querySelector("#email").css("border-color","#48DE14");
                }
            
            });



            document.querySelector("#envoyer").addEventListener("click", function (event) {
            event.preventDefault();
 
                if(document.querySelector("#nom").value.length < 5)
                {
                    document.querySelector('#myModal').modal("show");
                    document.querySelector(".modal-title").text(" Veuillez remplir tout les champs");
                    document.querySelector('.modal-body').text(" le champs nom doit contenir au moins 5 caractères ");
                }
                    else
                    { 
                        if(document.querySelector("#Prenom").value.length < 5)
                        {
                                document.querySelector('#myModal').modal("show");
                                document.querySelector(".modal-title").text(" Veuillez remplir tout les champs !");
                                document.querySelector('.modal-body').text(" le champs Prenom doit contenir au moins 5 caractères ");
                        }

                        else 
                        {
                            if(document.querySelector("#Adresse").value.length < 5)
                            {
                                document.querySelector('#myModal').modal("show");
                                document.querySelector(".modal-title").text(" Veuillez remplir tout les champs !");
                                document.querySelector('.modal-body').text(" le champs Adresse doit contenir au moins 5 caractères ");
                            }
                            else 
                            {
                                if(document.querySelector("#datedenaissance").value.length < 5)
                                {
                                document.querySelector('#myModal').modal("show");
                                document.querySelector(".modal-title").text(" Veuillez remplir tout les champs !");
                                document.querySelector('.modal-body').text(" le champs date de naissance doit contenir au moins 5 caractères ");
                                }
                                else
                                {
                                        if(document.querySelector("#email").value.length < 5)
                                        {
                                        document.querySelector('#myModal').modal("show");
                                        document.querySelector(".modal-title").text(" Veuillez remplir tout les champs !");
                                        document.querySelector('.modal-body').text(" le champs email doit contenir au moins 5 caractères ");
                                        }
                                        else
                                        {
                                            if(document.querySelector("#nom").value !== "" && document.querySelector("#Prenom").value !== "" && document.querySelector("#datedenaissance").value !== "" 
                                            && document.querySelector("#Adresse").value !== "" && document.querySelector("#email").value !== "" )
                                            {
                                                    document.querySelector('#myModal').modal("show");
                                                    document.querySelector(".modal-title").html("Bienvenue "+ document.querySelector("#Prenom").value);
                                                    document.querySelector('.modal-body').html("Vous étes né le: "+ document.querySelector("#datedenaissance").value
                                                    +"</br>Et vous Habitez à: "
                                                    + document.querySelector("#Adresse").value
                                                    +'</br><a href="https://maps.google.com/maps?q='
                                                    +document.querySelector("#Adresse").value
                                                    +'"><img src="https://maps.googleapis.com/maps/api/staticmap?markers='
                                                    +document.querySelector("#Adresse").value+'&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/></a>');
                                            }
                                                        
                                        }
                                                    
                                }
                                                    
                            }
                            
                            
                        }
                        
                        
                    }
                
        
    });
  });

    
