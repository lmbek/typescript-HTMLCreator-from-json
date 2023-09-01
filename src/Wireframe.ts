import {HTMLTreeNode} from "./type/types.ts"

export class Wireframe {
    constructor(data: HTMLTreeNode) {
        this.insertHTML(document.body, data);
    }

    insertHTML(parent: HTMLElement, DOM: HTMLTreeNode) {
        DOM.children?.forEach((elem: any) => {
            const element = document.createElement(elem.tag) as HTMLElement;
            const attributes = elem.attributes as Record<string, string>;
            if(attributes != null){
                for (const [key, value] of Object.entries(attributes)) {
                    element.setAttribute(key, value);
                }
            }
            if(elem.innerText != null){
                element.innerText = elem.innerText;
            }
            parent.appendChild(element);
            this.insertHTML(element, elem);
        });
    }
}