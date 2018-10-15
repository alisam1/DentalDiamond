$(document).ready(function() { // Ждём загрузки страницы

	$(".close").click(function(){	// Событие клика на затемненный фон
		$(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
	});

});

$(document).ready(function() { // Ждём загрузки страницы

	$(".close").click(function(){	// Событие клика на затемненный фон
		$(".popup-alarm").fadeOut(800);	// Медленно убираем всплывающее окно
	});

});

function showPopup() {
	$(".popup").fadeIn(800); // Медленно выводим изображение
}

$(document).ready(function() { // Ждём загрузки страницы

	$(".close").click(function(){	// Событие клика на затемненный фон
		$(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
	});

});

function showPopupAlarm() {
	$(".popup-alarm").fadeIn(800); // Медленно выводим изображение
}

$(document).ready(function() { // Ждём загрузки страницы

	$(".close").click(function(){	// Событие клика на затемненный фон
		$(".popup-alarm").fadeOut(800);	// Медленно убираем всплывающее окно
	});

});

(function($) {
  $(function() {
      var popwindow = $('.popup');
      var popbutton = $('.appointment');
      $("body").prepend("<div class='mask'></div>");
      function preparewindow(windowobject) {
        var winwidth = windowobject.data("width");
        var winheight = windowobject.data("height");
        var winmargin = winwidth / 2;
        var wintitle = windowobject.data("title");

        windowobject.wrap("<div class='popup'></div>");
        windowobject.addClass("box_window_in");
        windowobject.parent(".box_window").prepend("<div class='bw_close'>аЗаАаКбббб</div>");
        windowobject.css("cursor","pointer");
      }
      if (popwindow.length) {
        preparewindow(popwindow);
        popbutton.click(function(){
            var idwind = $(this).data("window");
            $("#" + idwind).parent(".popup").fadeIn().addClass("windactiv");
            $(".mask").fadeIn();
            $(".to_blur").addClass("blur");
        });
      };
      $(".mask, .close").click(function(){
          $(".windactiv").fadeOut();
          $(".windactiv").removeClass("windactiv");
          $(".mask").fadeOut();
           $(".to_blur").removeClass("blur");
      });
  });
})(jQuery);

(function($) {
  $(function() {
      var popwindow = $('.popup-alarm');
      var popbutton = $('.alarm');
      $("body").prepend("<div class='mask'></div>");
      function preparewindow(windowobject) {
        var winwidth = windowobject.data("width");
        var winheight = windowobject.data("height");
        var winmargin = winwidth / 2;
        var wintitle = windowobject.data("title");

        windowobject.wrap("<div class='popup'></div>");
        windowobject.addClass("box_window_in");
        windowobject.parent(".box_window").prepend("<div class='close'></div>");
        windowobject.css("cursor","pointer");
      }
      if (popwindow.length) {
        preparewindow(popwindow);
        popbutton.click(function(){
            var idwind = $(this).data("window");
            $("#" + idwind).parent(".popup").fadeIn().addClass("windactiv");
            $(".mask").fadeIn();
            $(".to_blur").addClass("blur");
        });
      };
      $(".mask, .close").click(function(){
          $(".windactiv").fadeOut();
          $(".windactiv").removeClass("windactiv");
          $(".mask").fadeOut();
           $(".to_blur").removeClass("blur");
      });
  });
})(jQuery);
