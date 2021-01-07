export const menuModule = $(function () {

    var flag = true;

    var navhide;

    $('#menu_ref_container').on('click', () => {

        if (flag) {

            $('nav').css('display', 'block');

            clearTimeout(navhide);

            setTimeout(() => {

                $('nav').css('transform', 'translateX(0px)');

            }, 50);

            flag = false;

        } else {

            $('nav').css('transform', 'translateX(320px)');


            navhide = setTimeout(() => {

                $('nav').css('display', 'none');

            }, 400);

            flag = true;

        }


    })

    $('nav').on('mouseleave', () => {

        navhide = setTimeout(() => {

            $('nav').css('transform', 'translateX(320px)');


            setTimeout(() => {

                $('nav').css('display', 'none');
                flag = true;

            }, 400);

        }, 750);

    })


    $('nav').on('mouseover', () => {

        clearTimeout(navhide);

        flag = false;
    })

});

