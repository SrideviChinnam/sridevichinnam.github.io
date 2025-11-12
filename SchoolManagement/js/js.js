  $(document).ready(function(){
        /************* adding the active-class on menu **************/
$(".filter-links li").on("click", function() {
  var $this = $(this);
  $this.addClass("is-active").siblings().removeClass("is-active");
});

/************* simple filtering function where I show/hide 
the <section> tag based on it's data(-cat) attribute.
you could of course just add the data on the specific 
games item to have more individual control addíng
delays, animations etc on each game item.
**************/

$(".filter-links a").on("click", function(e) {
  var $this = $(this);
  var linkVal = $this.attr("href").replace("#", "");
  filterGames(linkVal);

  $(".info-container .info-item").removeClass("open-item");
  e.preventDefault();
});

function filterGames(val) {
  
  $("#games ").hide().filter("[data-cat=" + val + "]").slideDown();
  if (val === "all") {
    $("#games ").each(function(i) {
      $(this).slideDown().removeClass("active");
    });
  }
}

/************* hiding/showing the hidden info layer detailing the game **************/

$(".games-container .game-item a").on("click", function(e) {
  var imageLink = $(this).attr("href").replace("#", "");

  var infoItem = $(".info-container").find($("#" + imageLink));

  if (infoItem) {
    infoItem.addClass("open-item")
    .siblings().removeClass("open-item");
  }

  e.preventDefault();
});

$(".info-item div span").each(function() {
  $(this).on("click", function() {
    
    $(this).closest(".info-item").removeClass("open-item");
           //parent().parent() 
  });
});

});