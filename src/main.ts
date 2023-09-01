import './style.scss'
import DOMhead from "../src/wireframe/DOM-with-head.json";
import {HTMLTreeNode} from "./type/types.ts"
import {Wireframe} from "./Wireframe.ts";
//import DOM from "../src/wireframe/DOM.json";

( ()=>{
    // Create a new Wireframe instance with the 'html' data
    new Wireframe(DOMhead.html as HTMLTreeNode);
} )();