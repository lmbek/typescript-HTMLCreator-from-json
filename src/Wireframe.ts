type HTMLTreeNode = {
    tagName: string;
    attributes?: Record<string, string>;
    innerText?: string;
    children?: HTMLTreeNode[] | null;
};

// Wireframe - a function that use data (usually from json) and generate html from the structure of the data
export class Wireframe {
    constructor(data: HTMLTreeNode) {
        this.insertHTML(document.body, data);
    }

    insertHTML(element: HTMLElement, nodeTree: HTMLTreeNode) {
        // for each child we add the attributes, add the innerText and add the children elements
        nodeTree.children?.forEach((node: HTMLTreeNode) => {
            const newElement = document.createElement(node.tagName) as HTMLElement;

            // add attributes to this element
            const attributes = node.attributes as Record<string, string>;
            if(attributes != null){
                for (const [key, value] of Object.entries(attributes)) {
                    newElement.setAttribute(key, value);
                }
            }

            // add innerText to this element
            if(node.innerText != null){
                newElement.innerText = node.innerText;
            }

            // add this (child) element to the parent in html
            element.appendChild(newElement);

            // run this method recursively for all children
            this.insertHTML(newElement, node);
        });
    }
}