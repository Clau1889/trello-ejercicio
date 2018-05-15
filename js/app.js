var formulario= function (event){
    //Crear Etiquetas que necesito
    var tagA= document.getElementById("add-list");
        tagA.style.display= "none";  
    var sectionForm= document.getElementById("section-form");
    var tagForm= document.createElement("form");
        tagForm.setAttribute("id", "form-box");
    var tagInput= document.createElement("input");
        tagInput.setAttribute("id", "form-input");
        tagInput.setAttribute("placeholder", "Add List");
    var tagDiv= document.createElement("div");
    var tagButton= document.createElement("button");
        tagButton.textContent = "Save";
        tagButton.setAttribute("class", "form-button");
    var tagSecondButton= document.createElement("button");
        tagSecondButton.innerHTML = "&times;";
        tagSecondButton.setAttribute("id", "close-button");

    //Asignarle en el arbol de la familia que lugar le corresponde
    tagForm.appendChild(tagInput);
    tagDiv.appendChild(tagButton);
    tagDiv.appendChild(tagSecondButton);
    tagForm.appendChild(tagDiv);
    sectionForm.appendChild(tagForm);
    sectionForm.style.display= "block";
    //Agregar evento al close-button
    var close= document.getElementById("close-button");
    close.addEventListener("click",limpiar);

    //Agregar evento para guardar contenido de Input
    //var close= document.getElementById("close-button");
    //close.addEventListener("click",limpiar);
};

var limpiar= function(event){
    var hidden= document.getElementById("section-form");
    hidden.style.display= "none";    
    hidden.innerHTML = ""; 
    var show= document.getElementById("add-list");
    show.style.display= "block"; 
};

//Agregar funcion para generar la lista
//crear todas las etiquetas de big-box y asignarle el evento

//Primera version: agregar evento al boton.
var addList= document.getElementById("add-list");
addList.addEventListener("click",formulario);



