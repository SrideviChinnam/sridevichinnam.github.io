
    jQuery('#lightgallery').lightGallery({});
    jQuery('#lightgallery1').lightGallery({});
    jQuery('#lightgallery2').lightGallery({});
    $( ".list-unstyled" ).each(function() {
      var id = $( this ).attr("id");
	 // alert(id);
      $("#" + id).lightGallery({
        mode: 'slide',
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',//
        speed: 600,
        addClass: '',

        closable: true,
        loop: true,
        auto: false,
        pause: 6000,
        escKey: true,
        controls: true,
        hideControlOnEnd: false,

        preload: 1, //number of preload slides. will exicute only after the current slide is fully loaded. ex:// you clicked on 4th image and if preload = 1 then 3rd slide and 5th slide will be loaded in the background after the 4th slide is fully loaded.. if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded.. ... ...
        showAfterLoad: true,
        selector: null,
        index: false,

        lang: {
            allPhotos: 'All photos'
        },
        counter: false,

        exThumbImage: false,
        thumbnail: true,
        showThumbByDefault:false,
        animateThumb: true,
        currentPagerPosition: 'middle',
        thumbWidth: 150,
        thumbMargin: 10,


        mobileSrc: false,
        mobileSrcMaxWidth: 640,
        swipeThreshold: 50,
        enableTouch: true,
        enableDrag: true,

        vimeoColor: 'CCCCCC',
        youtubePlayerParams: false, // See: https://developers.google.com/youtube/player_parameters,
        videoAutoplay: true,
        videoMaxWidth: '855px',

        dynamic: false,
        dynamicEl: [],

        // Callbacks el = current plugin
        onOpen        : function(el) {}, // Executes immediately after the gallery is loaded.
        onSlideBefore : function(el) {}, // Executes immediately before each transition.
        onSlideAfter  : function(el) {}, // Executes immediately after each transition.
        onSlideNext   : function(el) {}, // Executes immediately before each "Next" transition.
        onSlidePrev   : function(el) {}, // Executes immediately before each "Prev" transition.
        onBeforeClose : function(el) {}, // Executes immediately before the start of the close process.
        onCloseAfter  : function(el) {}, // Executes immediately once lightGallery is closed.
        onOpenExternal  : function(el) {
          var href = $(el).attr("data-url");
          crp_loadHref(href,true);
        }, // Executes immediately before each "open external" transition.
        onToggleInfo  : function(el) {
          var $info = $(".lg-info");
          if($info.css("opacity") == 1){
            $info.fadeTo("slow",0);
          }else{
            $info.fadeTo("slow",1);
          }
        } // Executes immediately before each "toggle info" transition.
      });
    });

    jQuery(".drwimg").on('click', function (event){
        event.preventDefault();
        if(jQuery(event.target).hasClass("fa") && !jQuery(event.target).hasClass("zoom")) return;

        var tileId = jQuery(this).attr("id");
        var target = jQuery("#" + tileId + " .list-unstyled li:first");
        target.trigger( "click" );
    });
