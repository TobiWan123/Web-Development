export var observModule = (function () {

    const observed_section = document.querySelector('.sect-2');
    const hooks = document.querySelectorAll('.hook');
    const feature_text = document.querySelectorAll('.feature_text');
    const arrow = document.querySelector('.arrow');
    var curr = 0;
    var timeout; 

    var options = {};

    const section_obsrv = new IntersectionObserver((entries, section_obsrv) => {  // Bind observer
        entries.forEach(element => {
            if (element.isIntersecting) {

                feature_text.forEach((element, index) => {

                    element.style.opacity = '0';
                    hooks[index].style.opacity = '0';

                });
                
                while (curr < feature_text.length) {

                    (function (capturedCurr) {
                       timeout = setTimeout(() => {

                            if (capturedCurr > 0) {
                                feature_text[capturedCurr - 1].style.opacity = '0';
                                hooks[capturedCurr - 1].style.opacity = '0';
                            }

                            feature_text[capturedCurr].style.opacity = '1';
                            hooks[capturedCurr].style.opacity = '1';

                            

                        }, capturedCurr * 6000);

                        curr++;

                    })(curr);                                               // Der Wert curr muss gecaptured/aufgefangen werden da der timeout erst nach dem loop kommt (loop läuft durch (komplett),  curr ändert die werte sofort und startet die 3 Funktionen, 
                                                                            // dann kommmen die timeouts - ohne würde der wert nicht festgehalten werden, sich erhöhen und bei den timeouts nicht mehr existieren)
                                                                            //  .. mit auto wrapperfunktion und übergabe des wertes wird die variable curr gecaptured - das erklärt auch die multiplikation des timeouts .. ohne würden alle aktionen gleichzeitig stattfinden

                }
            }
            else {

                curr = 0;

                clearTimeout(timeout) ;

                feature_text.forEach((element, index) => {

                    element.style.opacity = '0';
                    hooks[index].style.opacity = '0';

                });
            }
        });
    }, options);

    section_obsrv.observe(observed_section);        // start observer


    // Muss hier ebenfalls geCaptured werden ! wahrscheinlich wegen weiter oben !



    arrow.addEventListener('click', () => {         // Disconnect observer and manually skip through features

        
        section_obsrv.disconnect(); 
        clearTimeout(timeout) ; 

        feature_text.forEach((element, index) => {
            
            element.style.opacity = '0';
            hooks[index].style.opacity = '0';

        });

        if(curr > 2){
            curr = 0 ; 
        }
        
        feature_text[curr].style.opacity = '1';
        hooks[curr].style.opacity = '1';

        curr++; 

    });

})();




