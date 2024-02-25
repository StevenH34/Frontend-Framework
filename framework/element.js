import { h } from "snabbdom";

const createElement = tagName => (strings, ...args) => ({ 
    type: "element", 
    template: h( 
        tagName,
        {},
        strings.reduce(
            (acc, currentString, index) => acc + currentString + (args[index] || ""),
            ""
        )
    )
});

export const div = createElement("div");
export const p = createElement("p");
// TODO: add more elements