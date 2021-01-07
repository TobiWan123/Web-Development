import {scrollModule} from "./scroll.js" ;
import {langModule} from "./language.js" ;
import {observModule} from "./observer.js" ;

scrollModule;
observModule;

if(window.location.hash){
    langModule.changeLang();
}

