function createNameDiv(firstName, lastName) {
    let main = document.createElement("main");

    let firstParagraph = document.createElement("p");
    let firstName = document.createText(firstName);
    firstParagraph.appendChild(firstName);

    let secondParagraph = document.createElement("p");
    let lastName = document.createText(lastName);
    secondParagraph.appendChild(lastName);

    main.appendChild(firstParagraph);
    main.appendChild(secondParagraph);

    document.body.appendChild(main);
}



