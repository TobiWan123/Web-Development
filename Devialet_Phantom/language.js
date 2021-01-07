export var langModule = (function() {

    const sect1_head = document.querySelector('.left h2');
    const lang = document.querySelectorAll('header ul h3');
    const sect2_head = document.querySelector('.sect-2-text h2');
    const hook_text = document.querySelectorAll('.hook_text');
    const card_features = document.querySelectorAll('.detailcard li');
    const link_home = document.querySelector('.footer_links a:nth-child(1)');
    const link_shop = document.querySelector('.footer_links a:nth-child(2)');
    const button = document.querySelector('#front_btn p');
    const data_reload = document.querySelectorAll('[data-reload]'); 
    const arrow = document.querySelector('.arrow_down');


    var language = {

        eng:
            {
                sect1_head : 'The Art of Music',
                sect2_head : 'Little Heading',
                lang: ['Language', 'German', 'English'],
                hook_text: ['Feature Number 1', 'Feature Number 2', 'Feature Number 3', 'Feature Number 4', 'Feature Number 5', 'Feature Number 6' ],
                card_features: 'Dummy-Text Feature',
                link_home: 'Homepage',
                link_shop: 'Webshop',
                button: 'See more'

            },        
        ger:
            {
                sect1_head : 'Die Kunst der Musik',
                sect2_head : 'Kleines Heading',
                lang: ['Sprache', 'Deutsch', 'Englisch'],
                hook_text: ['Eigenschaft Nummer 1', 'Eigenschaft Nummer 2', 'Eigenschaft Nummer 3' ],
                card_features: 'Dummy-Text Eigenschaft',
                link_home: 'Homepage',
                link_shop: 'Onlineshop',
                button: 'Zum Shop'
            }

    }

    data_reload.forEach(element => {
        element.addEventListener('click', ()=>{

            setTimeout(()=>{
                location.reload(true); 
            }, 100); 
          
        })
    });


    function log(){
        console.log(sect1_head);
        console.log(sect2_head);
        console.log(lang);
        console.log(hook_text);
        console.log(card_features); 
        console.log(link_home);
        console.log(link_shop); 
        console.log(data_reload); 
    }

    function changeLang(){

       if(window.location.hash === '#eng'){

        arrow.style.left= '47.5%';

            sect1_head.textContent = language.eng.sect1_head;
            sect2_head.textContent = language.eng.sect2_head;

            lang.forEach( (item, index) => {
                item.textContent = language.eng.lang[index]; 
            });

            
            hook_text.forEach( (item, index) => {
                item.textContent = language.eng.hook_text[index];
            });
        
            card_features.forEach( item =>{
                item.textContent = language.eng.card_features; 
            });

            link_home.textContent = language.eng.link_home;
            link_shop.textContent = language.eng.link_shop;
            button.textContent = language.eng.button;

       }
       else if(window.location.hash === '#ger'){

        arrow.style.left= '42.5%';

            sect1_head.textContent = language.ger.sect1_head;
            sect2_head.textContent = language.ger.sect2_head;

            lang.forEach( (item, index) => {
                item.textContent = language.ger.lang[index]; 
            });

            hook_text.forEach( (item, index) => {
                item.textContent = language.ger.hook_text[index];
            });
        
            card_features.forEach( item =>{
                item.textContent = language.ger.card_features; 
            });

            link_home.textContent = language.ger.link_home;
            link_shop.textContent = language.ger.link_shop;
            button.textContent = language.ger.button;
       }



    }

    return {
        log: log,
        changeLang: changeLang
    }

})();


