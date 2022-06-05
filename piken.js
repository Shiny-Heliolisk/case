$(document).ready(function () {
    // get container size
    var container_width = $(".container").width();
    // console.log(container_width);
    var container_height = $(".container").height();
    // console.log(container_height);

    var amount_of_elements_per_row = 10;
    // console.log(amount_of_elements_per_row); 
    var amount_of_elements_per_col = 10;
    // console.log(amount_of_elements_per_col);

    (function ($) {
        $.fn.print_output_even_rows = function (a, b,text) {
            for (j = 0; j < amount_of_elements_per_row; j++) {
                if (j % 2 == 0) {
                    $(this).append(a);
                    $(this).children().text(text);
                }
                else {
                    $(this).append(b);
                    $(this).children().text(text);
                }
            }
        };
    })(jQuery);

    (function ($) {
        $.fn.print_output_odd_rows = function (a, b, text) {
            for (j = 0; j < amount_of_elements_per_row; j++) {
                if (j % 2 == 0) {
                    $(this).append(b);
                    $(this).children().text(text);
                }
                else {
                    $(this).append(a);
                    $(this).children().text(text);
                }
            }
        };
    })(jQuery);

    for (i = 0; i < amount_of_elements_per_col; i++) {
        $(".container").append("<div class='row'></div>");
    }
    $(".pike-input").keyup(function () {
        var x = $(".pike-input").val();
        var span_active = "<span class='text'></span>";
        var span_inactive = "<span class='text hide'></span>";

        $(".row:even").print_output_even_rows(span_active, span_inactive, x);
        $(".row:odd").print_output_odd_rows(span_active, span_inactive, x);
    });
});