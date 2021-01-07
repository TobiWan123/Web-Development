export const frontPModule = $(function () {

    $('#front_particle_container').load('../load_effects/load_front.html');

    var value = window.innerWidth;

    // reload on resize of page

    $(window).on('resize', () => {

        if (window.innerWidth <= 600) {

            if (value != window.innerWidth) {

                clearTimeout(window);

                window = setTimeout(function () {
                    this.location.reload(false); /* false to get page from cache */

                }, 100);

            }

        } else {

            clearTimeout(window);

            window = setTimeout(function () {
                this.location.reload(false); /* false to get page from cache */

            }, 100);

        }

    });
});



