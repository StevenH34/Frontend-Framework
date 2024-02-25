import { h } from "snabbdom";

// Extract init value w/ a template key
const initialState = {
    template: "",
    on: {}
};

// Move reducer outside of createElement
const createReducer = args => (acc, currentString, index) => {
    const currentArg = args[index];

    // Define the behavior of an event node
    if (currentArg && currentArg.type === "event") {
        return {...acc, on: { click: currentArg.click }};
    }
    return {
        ...acc,
        template: acc.template + currentString + (args[index] || "")
    };
};

const createElement = tagName => (strings, ...args) => { 
    const { template, on } = strings.reduce(createReducer(args), initialState);
    const elementTemplate = template.trim() != "" ? template : undefined
    return {
        type: "element",
        template: elementTemplate ? h(tagName, {on}, template) : undefined
    };
};

export const div = createElement("div");
export const p = createElement("p");
// TODO: add more elements