const [mainElemenet] = document.getElementsByTagName('main');

Object.entries(data).forEach(([element, { textContent, innerHTML, style, ...props }]) => {
    const newElement = document.createElement(element);

    if (textContent) {
        newElement.textContent = textContent;
    }

    if (innerHTML) {
        newElement.innerHTML = innerHTML;
    }

    for (let key in style) {
        newElement.style[key] = style[key];
    }

    mainElemenet.append(newElement);
});