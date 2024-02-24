// Tagged template literals
// 1st arg are the Strs which correspond to the static strings: "Hello", " ", " !"
// 2nd arg, spread param, converts every arg (any num) into an array
const createElement = tagName => (strings, ...args) => ({ 
    type: tagName, 
    template: strings.reduce(
        (acc, currentString, index) => acc + currentString + (args[index] || ""),
        ""
    ),
});

export const div = createElement("div");
export const p = createElement("p");
// TODO: add more elements

// const template  = div`Hello, ${firstName} ${lastName}!`;
// div is a tag which allows us to make computations on the following template literal
// Available by default in ES6 
// const { template } = p`Hello, ${firstName} ${lastName}!`