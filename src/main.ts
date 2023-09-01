import './style.scss'
//import DOMhead from "../src/wireframe/DOM-with-head.json"; // test purposes only - don't use this one, as it will make duplicate <head> tag
import {HTMLTreeNode} from "./type/types.ts"
import {Wireframe} from "./Wireframe.ts";
import DOM from "../src/wireframe/DOM.json";

( ()=>{
    // Create a new Wireframe instance with the 'html' data
    new Wireframe(DOM.html as HTMLTreeNode);
} )();