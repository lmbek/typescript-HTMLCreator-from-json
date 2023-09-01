type HTMLTreeNode = {
    tag: string;
    attributes?: Record<string, string>;
    innerText?: string;
    children?: HTMLTreeNode[] | null;
};

// Wireframe - a function that use data (usually from json) and generate html from the structure of the data
export class Wireframe {
    constructor(data: HTMLTreeNode) {
        this.insertHTML(document.body, data);
    }

    insertHTML(parent: HTMLElement, DOM: HTMLTreeNode) {
        // for each child we add the attributes, add the innerText and add the children elements
        DOM.children?.forEach((elem: HTMLTreeNode) => {
            const element = document.createElement(elem.tag) as HTMLElement;

            // add attributes to this element
            const attributes = elem.attributes as Record<string, string>;
            if(attributes != null){
                for (const [key, value] of Object.entries(attributes)) {
                    element.setAttribute(key, value);
                }
            }

            // add innerText to this element
            if(elem.innerText != null){
                element.innerText = elem.innerText;
            }

            // add this (child) element to the parent in html
            parent.appendChild(element);

            // run this method recursively for all children
            this.insertHTML(element, elem);
        });
    }
}