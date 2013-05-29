$(document).ready(function(){
        $('#input').on('click',function(){
            $('#overlay').css('display', 'block');
            $('#blur').css('display', 'block');
            $('#blured').attr({
                'class': 'blur'
            });
        });
        $('#output').on('click',function(){
            $('#overlay').css('display', 'none');
            $('#blur').css('display', 'none');
            $('#blured').attr({
                'class': ''
            });
        });       
    });
    
