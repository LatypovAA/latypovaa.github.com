  $(function(){

        var field = new Array("name", "text");
        
        var validate = function(event) {
            
            var error=0; 
            $(event.target).find(":input").each(function() {
            
                for(var i=0;i<field.length;i++){ 
                    if($(this).attr("name")==field[i]){
                        
                        if(!$(this).val()){
                            $(this).addClass('validation_fail');
                            $($(event.target).find('#add_comment')).prev().removeClass('hidden');
                        } else {
                            $(this).removeClass('validation_fail');
                            $($(event.target).find('#add_comment')).prev().addClass('hidden');
                        }
                        
                    }               
                }
           });
           
            return false;
        };
    

        $("form").submit(validate);

  $(document).ready(function(){

$('.reply').click(function(){
    var _form = $('#comment_form').clone();
    $('.small-form').remove();
    $(_form).addClass('small-form');
    _form[0].reset();
    $(_form).submit(validate);
    $(this).after(_form);
    return false;
});

});
  });