export const effectModule = (function ($) {

    $(function () {

        var count = 0;

        const effectbox = document.querySelector('#effects_loadbox');

        let root = document.documentElement;


        $('.effect_h3').on('click', (event) => {

            stripScripts(effectbox);

            var $text = $(event.target).attr('data-val');

            effectDefault();

            root.style.setProperty('--main-bg-color', "black");
            root.style.setProperty('--base-color', "white");
            root.style.setProperty('--main-font-color', "black");
            root.style.setProperty('--secondary-font-color', "gray");


            switch ($text) {

                case 'particle':
                    $('#effects_loadbox').css('position', 'initial');
                    $('#effects_frame').css('position', 'initial');

                    break;

                case 'hover1':

                    $('#effects_loadbox').css('border', 'none');

                    break;

                case 'hover2':

                    $('#effects_loadbox').css('border', 'none');

                    break;

                case 'click':
                    break;

                case 'slider':

                    $('#effects_loadbox').css('overflow', 'hidden');
                    $('#effects_loadbox').css('justify-content', 'flex-start');

                    break;

                case 'scroll2':

                    $('#effects_loadbox').css('overflow-y', 'scroll');
                    $('#effects_loadbox').css('overflow-x', 'hidden');
                    $('#effects_loadbox').css('border', 'none');

                    break;


                case 'liquify':
                    $('#effects_loadbox').css('border', 'none');
                    $('#effects_loadbox').css('justify-content', 'space-evenly');
                    $('#effects_loadbox').css('margin-bottom', '15vh');
                    break;

                default:

                    break;
            }

            $('#effects_loadbox').load('/load_effects/load_' + $text + '.html')

            console.log('load_' + $text + '.html');

            count++

            if (count >= 5) {

                this.location.reload();

            }
        })




    });


    function stripScripts(div) {

        console.log(div);

        var scripts = div.querySelectorAll('script');
        var i = scripts.length;

        while (i--) {
            scripts[i].parentNode.removeChild(scripts[i]);
        }

    }


    function effectDefault() {

        const effectbox = document.querySelector('#effects_loadbox');

        $('#effects_frame').css('position', 'relative');
        $('#effects_loadbox').css('position', 'relative');
        $('#effects_loadbox').css('border', '2px solid black');
        $('#effects_loadbox').css('background', 'white');
        $('#effects_loadbox').css('overflow', 'initial');
        $('#effects_loadbox').css('overflow-y', 'initial');
        $('#effects_loadbox').css('justify-content', 'center');
        $('#effects_loadbox').css('margin-bottom', '5vh');

    }

})(jQuery); 
