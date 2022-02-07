let exercisesElement = document.querySelector('#exercises');

let h1Element = document.createElement('h1');//create
h1Element.textContent = "H1 header";//modify
exercisesElement.append(h1Element);//attach

let h2Element = document.createElement('h2');
h2Element.textContent = "H2 header";
exercisesElement.append(h2Element);

let h3Element = document.createElement('h3');
h3Element.textContent = "H3 header";
exercisesElement.append(h3Element);

let h4Element = document.createElement('h4');
exercisesElement.append(h4Element);
h4Element.textContent = "H4 header";

let h5Element = document.createElement('h5');
exercisesElement.prepend(h5Element);
h5Element.textContent = "H5 header";

let h6Element = document.createElement('h6');
exercisesElement.before(h6Element);
h6Element.textContent = "H6 header";



let buttonElement = document.createElement('button');
buttonElement.textContent = "Launch Meeting";
exercisesElement.prepend(buttonElement);
buttonElement.style.backgroundColor = "blue";
buttonElement.style.height = "40px";
buttonElement.style.borderRadius = "10px";
buttonElement.style.color = "white";
buttonElement.style.border = "none";