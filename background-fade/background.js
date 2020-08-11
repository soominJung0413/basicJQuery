
$(function(){
    fadeBack();
   
        });
        function fadeBack(){
            var images = ['./image/1807_024_8.jpg','./image/MariaDB.png'];
            var i =0;
             $('.row').css('background-image','url('+images[i]+')');
            setInterval(function(){
                i++;
                if( i == images.length){
                    i =0;
                }
                $('.row').fadeOut('slow',function(){
                      $(this).css('background-image','url('+images[i]+')');
                     $(this).fadeIn('slow');                  
                     });
            },5000);
        }