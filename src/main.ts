import './style.scss'
import {Wireframe} from "./Wireframe.ts";
import DOM from "../src/wireframe/DOM.json";

( ()=>{
    // Create a new Wireframe instance with the 'html' data
    new Wireframe(DOM.html);
} )();