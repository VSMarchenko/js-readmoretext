(function($){
	"use strict";
    jQuery.fn.readmore = function(options){
      options = $.extend({
            thisClass:"read-more", // Селектор слайдера
            separator:"<!--more-->", // Разделитель
      hide:true,
      shadowDown:true,
      shadowDownClass:'show-down-shadow',
      setTime:400
        }, options);

      var that = this.selector;
      var classes = options.thisClass;

      function ReadNext(){
        var moreDiv = '.'+classes;
        var switchKey = true; // ключ перемикання показу/схову
        var firstParagraphHeight;
        var blockHeight; // Оригінальна висота блоку

        this.getNext = function (){
          var text = $(that).html();
          var regexp =  new RegExp(options.separator,'i');
          var result = regexp.exec($(that).html());

          $(moreDiv).children(":eq(1)").hide();

          if (result === null){
            $(moreDiv).hide();
            return true;
          }else{
            $(that).html('');
            text = text.split(regexp);					
            $(that).append('<div class="first-paragraph" style="position:relative">'+text[0]+'<div class="'+options.shadowDownClass+'"></div></div><div class="last-paragraph">'+text[1]+'</div>').css({"overflow":"hidden"});

            if(options.shadowDown === true){
              $("."+options.shadowDownClass).css({
                position: "absolute",
                width: "100%",
                height: "20px",
                bottom: 0,
                background: "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 1) 100%)"
              });	
            }
          }
          getStartBlock();

          $(moreDiv).click(function(){
            if (switchKey){
              $(that).animate({height: blockHeight +'px'},options.setTime,function(){
                $(moreDiv).children(":eq(0)").hide(); // ховаємо напис "Читати далі"
                if(options.hide === true){
                  $(moreDiv).children(":eq(1)").fadeIn(300); // показуємо напис "Сховати"
                }
              });
              $(that+' .show-down-shadow').hide(); // ховаємо тінь
              switchKey = false;
            }else if(options.hide === true){
              $(that).animate({height: firstParagraphHeight +'px'},options.setTime,function(){
                $(moreDiv).children(":eq(0)").fadeIn(300); // показуємо напис "Читати далі"
                $(moreDiv).children(":eq(1)").hide(); // ховаємо напис "Сховати"
              });
              $(that+' .show-down-shadow').show(); // показуємо тінь
              switchKey = true;
            }
          });

          $(window).resize(function(){
            $(that).css('height', 'auto'); // Повертаємо оригінальну висоту блоку
            $(moreDiv).children(":eq(0)").fadeIn(300); // показуємо напис "Читати далі"
            $(moreDiv).children(":eq(1)").hide(); // ховаємо напис "Сховати"
            switchKey = true;
            getStartBlock();     
          });
        };

        function getStartBlock(){
          blockHeight = $(that).height();
          firstParagraphHeight = $('.first-paragraph').height();
          $(that).height(firstParagraphHeight); // Налаштовуємо висоту показу
        }
      }

      var init = function (){
        var p = new ReadNext();
        p.getNext();
      };

      return this.each(init);    // Plug-in inicialization

	};
	
})(jQuery);
