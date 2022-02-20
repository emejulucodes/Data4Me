(function($) {
    "use strict";

    if ($(".scroll-to-target").length) {
        $(".scroll-to-target").on("click", function() {
            var target = $(this).attr("data-target");
            // animate
            $("html, body").animate({
                    scrollTop: $(target).offset().top
                },
                1000
            );

            return false;
        });
    }



    if ($(".all-grid-posts-wrapper").length) {

       $('.blog-card__content').matchHeight();

    }

    if ($(".all-posts-wrapper").length) {

       $('.blog-card__content').matchHeight();

    }

    if ($(".img-popup").length) {
        var groups = {};
        $(".img-popup").each(function() {
            var id = parseInt($(this).attr("data-group"), 10);

            if (!groups[id]) {
                groups[id] = [];
            }

            groups[id].push(this);
        });

        $.each(groups, function() {
            $(this).magnificPopup({
                type: "image",
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: {
                    enabled: true
                }
            });
        });
    }

    function dynamicCurrentMenuClass(selector) {
        let FileName = window.location.href.split("/").reverse()[0];

        selector.find("li").each(function() {
            let anchor = $(this).find("a");
            if ($(anchor).attr("href") == FileName) {
                $(this).addClass("current");
            }
        });
        // if any li has .current elmnt add class
        selector.children("li").each(function() {
            if ($(this).find(".current").length) {
                $(this).addClass("current");
            }
        });
        // if no file name return
        if ("" == FileName) {
            selector.find("li").eq(0).addClass("current");
        }
    }
    if ($(".main-menu__list").length) {
        // dynamic current class
        let mainNavUL = $(".main-menu__list");
        dynamicCurrentMenuClass(mainNavUL);
    }

    if ($(".mobile-nav__container").length) {
        let navContent = document.querySelector(".main-menu").innerHTML;
        let mobileNavContainer = document.querySelector(".mobile-nav__container");
        mobileNavContainer.innerHTML = navContent;
    }
    if ($(".sticky-header__content").length) {
            
        if ($(".sticky-header__content").hasClass('style-three')) {
            let navContent = document.querySelector(".main-menu").innerHTML;
            let mobileNavContainer = document.querySelector(".sticky-header__content");
            $(".sticky-header__content.style-three").append(navContent);
        }
        else
        {
            let navContent = document.querySelector(".main-menu").innerHTML;
            let mobileNavContainer = document.querySelector(".sticky-header__content");
            mobileNavContainer.innerHTML = navContent;    
        }
    }

    if ($(".mobile-nav__container .main-menu__list").length) {
        let dropdownAnchor = $(
            ".mobile-nav__container .main-menu__list .dropdown > a"
        );
        
    }

    if ($(".mobile-nav__toggler").length) {
        $(".mobile-nav__toggler").on("click", function(e) {
            e.preventDefault();
            $(".mobile-nav__wrapper").toggleClass("expanded");
        });
    }

    if ($(".search-toggler").length) {
        $(".search-toggler").on("click", function(e) {
            e.preventDefault();
            $(".search-popup").toggleClass("active");
        });
    }


    if ($(".wow").length) {
        var wow = new WOW({
            boxClass: "wow", // animated element css class (default is wow)
            animateClass: "animated", // animation css class (default is animated)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }

    if ($("#donate-amount__predefined").length) {
        let donateInput = $("#donate-amount");
        $("#donate-amount__predefined")
            .find("li")
            .on("click", function(e) {
                e.preventDefault();
                let amount = $(this).find("a").text();
                donateInput.val(amount);
                $("#donate-amount__predefined").find("li").removeClass("active");
                $(this).addClass("active");
            });
    }

    $("#accordion .collapse").on("shown.bs.collapse", function() {
        $(this).prev().addClass("active");
        $(this).prev().parent().addClass("active");
    });

    $("#accordion .collapse").on("hidden.bs.collapse", function() {
        $(this).prev().removeClass("active");
        $(this).prev().parent().removeClass("active");
    });

    $("#accordion").on("hide.bs.collapse show.bs.collapse", (e) => {
        $(e.target).prev().find("i:last-child").toggleClass("fa-plus fa-minus");
    });

    // window load event

    $(window).on("load", function() {
        if ($(".prelod").length) {
            $(".prelod").fadeOut();
        }
    });

    // window load event

    $(window).on("scroll", function() {
        if ($(".scroll-to-top").length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
                $(".scroll-to-top").fadeIn(500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                $(".scroll-to-top").fadeOut(500);
            }
        }
    });

    if (typeof imagesLoaded == 'function') {
        $('.masonrys > div').addClass('masonry-item');
        var $boxes = $('.masonry-item');
        $boxes.hide();
        var $container = $('.masonrys');
        $container.imagesLoaded(function() {
            $boxes.fadeIn();
            $container.masonry({
                itemSelector: '.masonry-item',
            });
        });
    }

})(jQuery);

function pylon_stretched_column()
{
  $('.elementor-section-wrap > .elementor-section').each(function(){
    if ($(this).hasClass('pylon-column-stretched-left') || $(this).hasClass('pylon-column-stretched-right') || $(this).hasClass('pylon-column-stretched-both'))
    {
        $(this).addClass('pylon-column-stretched-yes').removeClass('pylon-column-stretched-no');
    }
    else
    {
        $(this).addClass('pylon-column-stretched-no').removeClass('pylon-column-stretched-yes');
    }
  });
  // $('.elementor-section-wrap > .elementor-section.pylon-column-stretched-yes').each(function(){
  //   var self_Section = $(this);
  //   var self_Column = '';
  // });  
  $('.elementor-section-wrap > .elementor-section.pylon-column-stretched-yes').each(function(){
        var self_Section = $(this);
        var self_Column = '';
        var column_wrapper      = '';
        var stretched_section  = '';

        if ($(this).hasClass('pylon-column-stretched-yes')) {

        if(self_Section.hasClass('pylon-column-stretched-left') || self_Section.hasClass('pylon-column-stretched-both'))
        {
            self_Column = $( '.elementor-column:not(.elementor-inner-column):first-child',self_Section);
            if ($('.pylon-stretched-section',self_Column).length == 0) {
                column_wrapper = self_Column.children('.elementor-column-wrap');
                widget_wrapper = self_Column.children('.elementor-column-wrap').children('.elementor-widget-wrap');
                widget_wrapper.prepend('<div class="pylon-stretched-section"></div>');

                stretched_section = widget_wrapper.children('.pylon-stretched-section');
                stretched_section.addClass('pylon-stretched-left-side');
                self_Column.addClass('pylon-column-stretched-yes pylon-column-stretched-left');

                if (self_Section.hasClass('pylon-left-stretched-content-yes')) 
                {
                  self_Column.addClass('pylon-stretched-content-yes');
                }
                else
                {
                  self_Column.removeClass('pylon-stretched-content-yes'); 
                }

                column_wrapper.css('background-image' , '')
                var col_bg_img = column_wrapper.css('background-image');
                if (col_bg_img != 'none' || col_bg_img!='' ) 
                {
                  stretched_section.css('background-image',col_bg_img)
                  column_wrapper.css('background-image','none');
                }
                var col_bg_color = column_wrapper.css('background-color');
                if (col_bg_color != 'transparent' || col_bg_color!='' )
                {
                  stretched_section.css('background-color',col_bg_color)
                  column_wrapper.css('background-color','transparent');
                }
                var col_bg_pos = column_wrapper.css('background-position');
                if (col_bg_pos != 'none' || col_bg_pos!='' )
                {
                  stretched_section.css('background-position',col_bg_pos)
                }
                var col_bg_repeat = column_wrapper.css('background-repeat');
                if (col_bg_repeat != 'none' || col_bg_repeat!='' )
                {
                  stretched_section.css('background-repeat',col_bg_repeat)
                }
                var col_bg_size = column_wrapper.css('background-size');
                if (col_bg_size != 'none' || col_bg_size!='' )
                {
                  stretched_section.css('background-size',col_bg_size)
                }
                pylon_stretched_content_width_calculation();
            }
        }

        if(self_Section.hasClass('pylon-column-stretched-right') || self_Section.hasClass('pylon-column-stretched-both'))
        {
            self_Column = $( '.elementor-column:not(.elementor-inner-column):last-child',self_Section);
            if ($('.pylon-stretched-section',self_Column).length == 0) {
                column_wrapper = self_Column.children('.elementor-column-wrap');
                widget_wrapper = self_Column.children('.elementor-column-wrap').children('.elementor-widget-wrap');
                widget_wrapper.prepend('<div class="pylon-stretched-section"></div>');

                stretched_section = widget_wrapper.children('.pylon-stretched-section');
                stretched_section.addClass('pylon-stretched-right-side');
                self_Column.addClass('pylon-column-stretched-yes pylon-column-stretched-right');

                if (self_Section.hasClass('pylon-right-stretched-content-yes')) 
                {
                  self_Column.addClass('pylon-stretched-content-yes');
                }
                else
                {
                  self_Column.removeClass('pylon-stretched-content-yes'); 
                }

                column_wrapper.css('background-image' , '')
                var col_bg_img = column_wrapper.css('background-image');
                if (col_bg_img != 'none' || col_bg_img!='' ) 
                {
                  stretched_section.css('background-image',col_bg_img)
                  column_wrapper.css('background-image','none');
                }
                var col_bg_color = column_wrapper.css('background-color');
                if (col_bg_color != 'none' || col_bg_color!='' )
                {
                  stretched_section.css('background-color',col_bg_color)
                  column_wrapper.css('background-color','transparent');
                }
                var col_bg_pos = column_wrapper.css('background-position');
                if (col_bg_pos != 'none' || col_bg_pos!='' )
                {
                  stretched_section.css('background-position',col_bg_pos)
                }
                var col_bg_repeat = column_wrapper.css('background-repeat');
                if (col_bg_repeat != 'none' || col_bg_repeat!='' )
                {
                  stretched_section.css('background-repeat',col_bg_repeat)
                }
                var col_bg_size = column_wrapper.css('background-size');
                if (col_bg_size != 'none' || col_bg_size!='' )
                {
                  stretched_section.css('background-size',col_bg_size)
                }
                pylon_stretched_content_width_calculation();
            }
        }
      }
  });
}

function pylon_stretched_content_width_calculation()
{
    if ($('.elementor-section-wrap > .elementor-section > .elementor-container .elementor-column.pylon-column-stretched-yes').length>0) 
    {
        // if ($('.col-lg-3').css('max-width')=='25%') {
            
        // alert($('.col-lg-3').css('max-width'))
        // }
        var window_width = $(window).width();
        var document_width = $(document).width();
        $('.elementor-section-wrap > .elementor-section > .elementor-container .elementor-column.pylon-column-stretched-yes').each(function(){
            var this_column = $(this);
            var section_width = this_column.closest('.elementor-container').width();
            var extra_width = ((window_width - section_width)/2);
            var column_width = '';

            var pos='left';
            if (this_column.hasClass('pylon-column-stretched-right')) 
            {
                pos='right'
            }

            column_width=$('.elementor-widget-wrap',this_column).parent().width();

            if (column_width == '100%') 
            {
                $('.elementor-widget-wrap',this_column).css('width','100%')
            }
            else
            {
                $('.elementor-widget-wrap',this_column).css('width','')
            }

            $('.pylon-stretched-section',this_column).css('margin-'+pos,'-'+extra_width+'px')

            if(this_column.hasClass('pylon-stretched-content-yes'))
            {
                stretched_section_width = $('.pylon-stretched-section',this_column).width();
                this_column.children('.elementor-column-wrap').children('.elementor-widget-wrap').css( 'margin-'+pos,'-'+extra_width+'px' );
                this_column.children('.elementor-column-wrap').children('.elementor-widget-wrap').css( 'width', stretched_section_width+'px' )
                // if (this_column.parent('.pylon-column-stretched-both')) {
                //     if (this_column.hasClass('elementor-col-100')) {
                //         this_column.children('.elementor-widget-wrap').css( 'margin-right','-'+extra_width+'px' );
                //     }
                //         this_column.children('.elementor-widget-wrap').children('.elementor-inner-section').children('.elementor-container').css('max-width','100%')
                // }
            }
            else
            {
                this_column.children('.elementor-column-wrap').children('.elementor-widget-wrap').css( 'margin-'+pos,'' );
                this_column.children('.elementor-column-wrap').children('.elementor-widget-wrap').css( 'width','' );   
            }

        });
    }
}

function pylon_background_img()
{
    $('.elementor-section').each(function(){
        if($(this).css('background-image')!='' && $(this).css('background-image')!='none')
        {
            $(this).addClass('pylon-background-img-yes').removeClass('pylon-background-img-no')
        }
        else
        {
            $(this).addClass('pylon-background-img-no').removeClass('pylon-background-img-yes')   
        }
    });

    $('.elementor-column').each(function(){
        if($(this).children('.elementor-column-wrap').children('.elementor-widget-wrap').children('.pylon-stretched-section').length)
        {
            if($(this).children('.elementor-column-wrap').children('.elementor-widget-wrap').children('.pylon-stretched-section').css('background-image')!='' && $(this).children('.elementor-column-wrap').children('.elementor-widget-wrap').children('.pylon-stretched-section').css('background-image')!='none')
            {
                $(this).addClass('pylon-background-img-yes').removeClass('pylon-background-img-no');
            }
            else
            {
                $(this).addClass('pylon-background-img-no').removeClass('pylon-background-img-yes');
            }
        }
        else
        {
            if ($(this).children('.elementor-column-wrap').children('.elementor-widget-wrap').css('background-image')!='' && $(this).children('.elementor-column-wrap').children('.elementor-widget-wrap').css('background-image')!='none') 
            {
                $(this).addClass('pylon-background-img-yes').removeClass('pylon-background-img-no');   
            }
            else
            {
                $(this).addClass('pylon-background-img-no').removeClass('pylon-background-img-yes');
            }
        }
    });
}

function pylon_background_color()
{
    $('.elementor-section').each(function(){
        if($(this).css('background-color')!='' && $(this).css('background-color')!='transparent')
        {
            $(this).addClass('pylon-background-color-yes').removeClass('pylon-background-color-no')
        }
        else
        {
            $(this).addClass('pylon-background-color-no').removeClass('pylon-background-color-yes')   
        }
    });

    $('.elementor-column').each(function(){
        if($(this).children('.pylon-stretched-section').length)
        {
            if($(this).children('.elementor-column-wrap').children('.elementor-widget-wrap').children('.pylon-stretched-section').css('background-color')!='' && $(this).children('.elementor-column-wrap').children('.elementor-widget-wrap').children('.pylon-stretched-section').css('background-color')!='transparent')
            {
                $(this).addClass('pylon-background-color-yes')
            }
        }
        else
        {
            if ($(this).children('.elementor-column-wrap').children('.elementor-widget-wrap').css('background-color')!='' && $(this).children('.elementor-column-wrap').children('.elementor-widget-wrap').css('background-color')!='transparent') 
            {
                $(this).addClass('pylon-background-color-yes').removeClass('pylon-background-color-no');   
            }
            else
            {
                $(this).addClass('pylon-background-color-no').removeClass('pylon-background-color-yes');
            }
        }
    });
}

var $ = jQuery.noConflict();
$(document).on('ready', function() {

    "use strict";
    pylon_stretched_column();
    pylon_stretched_content_width_calculation();
    pylon_background_img();
    pylon_background_color();

});