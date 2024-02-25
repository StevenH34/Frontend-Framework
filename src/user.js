import { createComponent } from "../framework";
import { div } from "../framework/element";
import { onClick } from "../framework/event";

const initialState = { firstName: "John", lastName: "Doe" };

// state mutating actions
const methods = {
    changeName: (state, firstName) => ({ ...state, firstName })
};

// Component template
const template = ({ firstName, lastName, methods }) =>
    div`${onClick(() =>
        methods.changeName("Thomas")    
    )} Hello, ${firstName} ${lastName}!`;

// real world component
export const User = createComponent({ template, methods, initialState });