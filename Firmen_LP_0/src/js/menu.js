export const mobileModule = (function () {

    const burger = document.querySelector('.burger');
    const $mobileMenu = $('.mobile-menu');
    const burger_hr = document.querySelectorAll('hr');
    const intro = document.querySelector('.intro');

    var flag = true;

    function init() {


        burger.addEventListener('click', () => {

            if (flag) {

                intro.style.opacity = 0;

                burger_hr[0].style.transitionDelay = 0;
                burger_hr[2].style.transitionDelay = 0;

                burger_hr[0].style.transform = 'translateY(' + 7 + 'px)';
                burger_hr[2].style.transform = 'translateY(' + (-7) + 'px)';

                flag = false;


            } else {

                burger_hr[0].style.transform = 'translateY(' + 0 + 'px)';
                burger_hr[2].style.transform = 'translateY(' + 0 + 'px)';
                intro.style.opacity = 1;

                flag = true;
            }

            $mobileMenu.fadeToggle();

        });

    }

    window.addEventListener('resize', () => {

        if (window.innerWidth >= 800) {
            $mobileMenu.css('display', 'none');
            burger_hr[0].style.transform = 'translateY(' + 0 + 'px)';
            burger_hr[2].style.transform = 'translateY(' + 0 + 'px)';
            intro.style.opacity = 1;
            flag = true; 
        }
    });


    return { init: init };
})();