type HTMLTreeNode = {
    tag: string;
    attributes?: Record<string, string>;
    innerText?: string;
    children?: HTMLTreeNode[];
};


export class Wireframe {
    constructor(data: HTMLTreeNode) {
        this.insertHTML(document.body, data);
    }

    insertHTML(parent: HTMLElement, DOM: HTMLTreeNode) {
        if (DOM.children != null) {
            DOM.children.forEach((elem: any) => {
                const element = document.createElement(elem.tag) as HTMLElement;

                if (elem.attributes != null) {
                    const attributes = elem.attributes as Record<string, string>;
                    for (const [key, value] of Object.entries(attributes)) {
                        element.setAttribute(key, value);
                    }
                }

                if (elem.innerText != null) {
                    element.innerText = elem.innerText;
                }

                parent.appendChild(element);
                this.insertHTML(element, elem);
            });
        }
    }
}