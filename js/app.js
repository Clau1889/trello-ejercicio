var formulario= function (e){
    e.preventDefault();
    //Crear Etiquetas para el formulario
    var tagA= document.getElementById("add-list");
        tagA.style.display= "none";  
    var sectionForm= document.getElementById("section-form");
    var tagForm= document.createElement("form");
        tagForm.setAttribute("id", "form-box");
    var tagInput= document.createElement("input");
        tagInput.setAttribute("id", "form-input");
        tagInput.setAttribute("placeholder", "Add a list...");
    var tagDiv= document.createElement("div");
    var tagButton= document.createElement("button");
        tagButton.textContent = "Save";
        tagButton.setAttribute("id", "save-button");
    var tagSecondButton= document.createElement("button");
        tagSecondButton.innerHTML = "&times;";
        tagSecondButton.setAttribute("id", "close-button");

    //Asignarle en el arbol de la familia que lugar le corresponde
    tagForm.appendChild(tagInput);
    tagDiv.appendChild(tagButton);
    tagDiv.appendChild(tagSecondButton);
    tagForm.appendChild(tagDiv);
    sectionForm.appendChild(tagForm);
    tagInput.focus();
    sectionForm.style.display= "block";

    //Agregar evento al close-button
    var close= document.getElementById("close-button");
    close.addEventListener("click",limpiar);

    //Agregar evento para guardar contenido de Input
var save= document.getElementById("save-button");
    save.addEventListener('click', function(e){
    e.preventDefault();
    //crear todas las etiquetas para la section de list
    var saveButton= document.getElementById("form-input").value;
    var textInput= document.createTextNode(saveButton);
    var listBox= document.getElementById("section-new-list");
    var divList= document.createElement('div');
        divList.setAttribute("id","box-list");
    var title= document.createElement("h3");
        title.setAttribute("id","title-list");
    var inputList= document.createElement("a");
        inputList.textContent= "Add a card...";
        inputList.setAttribute("id","title-links");

        //desginar lugar en la familia
        listBox.appendChild(divList);
        divList.appendChild(title);
        title.appendChild(textInput);
        divList.appendChild(inputList);

        //Limpiar el input 
        document.getElementById("form-input").value= ""; 

        var link=document.getElementById("title-links");
            link.addEventListener('click', function(){
            link.style.display= "none";

            var divTextArea= document. createElement('div');
                divTextArea.setAttribute("id","cont-main");
            var textArea= document.createElement("textArea");
                textArea.setAttribute("id","text-area");
            var addButton= document.createElement("button");
                addButton.setAttribute("id","add-button");
                addButton.innerHTML="Add";
            //var closeSecondButton= document.createElement("button");
                //closeSecondButton.setAttribute("id","close-second-button");
                //closeSecondButton.innerHTML = "&times;";

            divList.appendChild(divTextArea);
            divTextArea.appendChild(textArea);
            textArea.focus();
            divTextArea.appendChild(addButton);
                
                
           //Contenedor del valor de TextArea
            var addValue= document.getElementById("add-button");
                addValue.addEventListener('click', function(e){
                e.preventDefault();

                var contText= document.getElementById("text-area").value;
                var textAreaValue= document.createTextNode(contText);
                var divValueTextArea= document.createElement('div');
                    divValueTextArea.setAttribute("id","value-textArea");
                    
                    divValueTextArea.appendChild(textAreaValue);

                    divList.insertBefore(divValueTextArea, divTextArea);
                    document.getElementById("text-area").value= "";
            });
        });
    });
};

//Oculta el cuadro de link para mostrar el de agregar la lista
var limpiar= function(){
    var hidden= document.getElementById("section-form");
    hidden.style.display= "none";    
    hidden.innerHTML = ""; 
    var show= document.getElementById("add-list");
    show.style.display= "block"; 
};



//Primera version: agregar evento al boton.
var addList= document.getElementById("add-list");
addList.addEventListener("click",formulario);


