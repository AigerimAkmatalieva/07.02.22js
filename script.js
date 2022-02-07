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
