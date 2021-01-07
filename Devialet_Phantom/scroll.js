export var scrollModule = (function () {


        const hooks = document.querySelectorAll('.hook');
        const cards = document.querySelectorAll('.detailcard');
        const features = document.querySelector('.features'); 
        const arrow = document.querySelector('.arrow') ;
        const feature_text = document.querySelectorAll('.feature_text');

        window.addEventListener('scroll', () => {

            let scrollable = document.documentElement.scrollHeight - window.innerHeight;
            let scrolled = window.scrollY;

            if (scrolled >= 700) {

                features.style.right = '-5%';
                features.style.width = '500px';

                setTimeout(()=>{
                    arrow.style.opacity = '1';
                }, 750)

                feature_text.forEach((element, index) => {

                   
                    setTimeout(()=>{
                        element.style.display = 'block';
                        
                    }, 400)

                

                    
                });
               
            }


            if (scrolled >= 1800) {

                cards.forEach((element, index) => {

                    setTimeout(() => {

                        element.style.opacity = '1';
                        element.style.transform = 'translateY(' + 0 + ')';
                    
                    }, index * 400);
                })
            }

        });
    

  

})();
