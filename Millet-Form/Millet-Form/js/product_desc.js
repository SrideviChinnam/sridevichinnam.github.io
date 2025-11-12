 $(document).ready(function(){
			 $(".colors li:first").addClass("active");
			 $(".size_chart li:first").addClass("active");
			 
			 if ( $('.info_color ul li').length == 0 ) {
				 $("#color_label").remove();
			 }
			 if ( $('.info_size ul li').length == 0 ) {
				 $("#size_label").remove();
			 }
	 
            //-- Click on detail
            $("ul.menu-items > li").on("click",function(){
                $("ul.menu-items > li").removeClass("active");
                $(this).addClass("active");
            })

            $(".attr,.attr2").on("click",function(){
                var clase = $(this).attr("class");

                $("." + clase).removeClass("active");
                $(this).addClass("active");

                $("#show_price").text(this.value);
                $(".section > div > input").val("1");
            })

     //-- Click on QUANTITY
           
            $(".btn-minus").on("click",function(){
                var now = $(".section > div > input").val();
                if ($.isNumeric(now)){
                    if (parseInt(now) -1 >= 0){ now--;}
                    $(".section > div > input").val(now);
                    var a = parseInt($('#show_price').text());
                    var b = parseInt($('.attr2.active').attr('value'));
                    $("#show_price").text(a - b);
                }else{
                    $(".section > div > input").val("1");
                }
            })            
            $(".btn-plus").on("click",function(){
                var now = $(".section > div > input").val();
                if ($.isNumeric(now)){
                    $(".section > div > input").val(parseInt(now) + 1);
                    var a = parseInt($('#show_price').text());
                    var b = parseInt($('.attr2.active').attr('value'));
                    $("#show_price").text(a+b);
                }else{
                    $(".section > div > input").val("1");
                }
            })
            if (parseInt(now) = 0) {
                $("#show_price").text(0);
                $(".attr,.attr2").removeClass("active");
            }
        
 
 });
        
  