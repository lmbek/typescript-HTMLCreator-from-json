import './style.scss'
import {Wireframe} from "./Wireframe.ts";
import DOM from "../src/wireframe/DOM.json";

( ()=>{
    return new Wireframe(DOM.html);
} )();