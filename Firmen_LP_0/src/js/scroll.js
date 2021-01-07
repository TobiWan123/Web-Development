export const scrollModule = (function(){

    const $header = $('header');
    const $mobileMenu = $('.mobile-menu');

    function init(){
        window.addEventListener('scroll' , ()=>{
            $header.css('background-color' , '#323162' ) ; 
            $mobileMenu.css('background-color' , '#191930' ) ; 

            if(window.scrollY <= 700){
                $header.css('background-color' , '#00000050' ) ; 
                $mobileMenu.css('background-color' , '#00000099' ) ; 
            }
        })
    }

    return { init: init} ; 

})(); 

