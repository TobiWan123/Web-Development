export const contactModule = $(function(){

    $('#submit').click( () => {

        $('#contact_response').html('processing..');

        if($('#email').val().includes('@')){

            $.post("https://script.google.com/macros/s/AKfycbxIpoiVljeLIjYDGWBG_jcPXBZWYvH7RphXaCcbwCr5uEggYIJP/exec" , 
            { 
                email: $('#email').val(),
                message:  $('#message').val() 
            },
    
            function(data, status){
                console.log(data + 'data sent!');  
                $('#contact_response').html('Message deployed!');
            });

        }else{
            
            $('#contact_response').html('Check your Email.');

        }
    
    });
});