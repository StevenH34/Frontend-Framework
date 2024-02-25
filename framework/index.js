import {init, eventListenersModule} from "snabbdom";

const patch = init([
    eventListenersModule
]);

export const init = (selector, component) => {
    const app = document.querySelector(selector);
    patch(app, component.template);
};