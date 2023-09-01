import './style.scss'
import {Wireframe} from "./Wireframe.ts";
import DOM from "../src/wireframe/DOM.json";

type HTMLTreeNode = {
    tag: string;
    attributes?: Record<string, string>;
    text?: string;
    children?: HTMLTreeNode[];
};

( ()=>{
    let dom:any = DOM;
    let html:HTMLTreeNode = dom.html
    new Wireframe(html);
} )();