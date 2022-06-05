// get container size
var container_width = $(".container").width();
// console.log(container_width);
var container_height = $(".container").height();
// console.log(container_height);

var amount_of_elements_per_row = 100;
// console.log(amount_of_elements_per_row); 
var amount_of_elements_per_col = 100;
// console.log(amount_of_elements_per_col);
$(document).ready(function () {
    var x = '';
    for (i = 0; i < amount_of_elements_per_col; i++) {
        $(".container").append("<div class='row'></div>");  
    }
        $(".pike-input").keyup(function(){
            x = $(".pike-input").val();
            $(".row").each(function(count){
        
                if(count%2 == 1){
                    for(j = 0;j<amount_of_elements_per_row;j++){
                        if(j%2==0){
                            $(this).append("<span class='text'></span>");
                            $(this).children(".text").text(x);break;
                        }
                        else{
                            $(this).append("<span class='text hide'></span>");
                            $(this).children(".text").text(x);break;
                        }
                        
                    }
                }
                else{
                    for(j = 0;j<amount_of_elements_per_row;j++){
                        if(j%2==0){
                            $(this).append("<span class='text hide'></span>");
                            $(this).children(".text").text(x);break;
                        }
                        else{
                            $(this).append("<span class='text'></span>");
                            $(this).children(".text").text(x);break;
                        }
                        
                    }
                }
            });
            console.log(x);
        });    
});