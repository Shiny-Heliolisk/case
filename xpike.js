$(document).ready(function () {
    var amount_of_elements_per_row = 50;
    // console.log(amount_of_elements_per_row); 
    var amount_of_elements_per_col = 50;
    // console.log(amount_of_elements_per_col);
    for (i = 0; i < amount_of_elements_per_col; i++) {
        $(".container").append("<div class='row'></div>");
    }
    $(".row").each(function(count){
        
        if(count%2 == 1){
            for(j = 0;j<amount_of_elements_per_row;j++){
                if(j%2==0){
                    $(this).append("<span class='text'></span>");
                }
                else{
                    $(this).append("<span class='text hide'></span>");  
                }
                
            }
        }
        else{
            for(j = 0;j<amount_of_elements_per_row;j++){
                if(j%2==0){
                    $(this).append("<span class='text hide'></span>");
                }
                else{
                    $(this).append("<span class='text'></span>");
                }
                
            }
        }
    });

    (function ($) {
        $.fn.print_output = function (text) {
            for (j = 0; j < amount_of_elements_per_row; j++) {
                if (j % 2 == 0) {
                    $(this).children().text(text);
                }
                else {
                    $(this).children().text(text);
                }
            }
        };
    })(jQuery);

    $(".pike-input").keyup(function () {
        var x = $(".pike-input").val();

        $(".row").print_output(x);
    });

    //change text-shadow color
    $(".color-picker").click(function(){
        var color = $(this).attr("value");
        var text_shadow = 
        "4px 4px 0 "+ color +
        ",3px 3px 0 " + color +
        ",2px 2px 0 " + color +
        ",1px 1px 0 "+ color +
        ", 0 0 0 " + color;
        console.log(text_shadow);
        $(".text").css({"text-shadow":text_shadow});
    });
});