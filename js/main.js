 window.onscroll = function() {
            myFunction()

        };

        var content = document.getElementsByClassName('contents').offsetTop;

        var about = document.getElementsByClassName("about");

        jQuery(document).ready(function() {
            var topLine = $('.top_line');
            var bottomLine = $('.bottom_line');
            var rightLine = $('.right_line');
            var leftLine = $('.left_line');
            var ani;

            line();

            function line() {
                ani = setInterval(function() {
                    topLine.css('left', '-100%').animate({
                        left: 0
                    }, 500);
                    bottomLine.css('left', '100%').animate({
                        left: 0
                    }, 500);
                    rightLine.css('top', '-100%').animate({
                        top: 0
                    }, 500);
                    leftLine.css('top', '100%').animate({
                        top: 0
                    }, 500);
                }, 1500);
            };

$('.main_button').on('click',function(){
			location.href="portfolio.html";
		})
        $('.box_btn').on('click', function() {
            $('html').stop().animate({
                scrollTop: sample
            }, 1000);
            $(".about").addClass('active').siblings().removeClass('active');
        });

        $('.about').on('click', function() {
            $('html').stop().animate({
                scrollTop: sample
            }, 1000);
            $(".about").addClass('active').siblings().removeClass('active');
        });

        $('.home').on('click', function() {
            $('html').stop().animate({
                scrollTop: 0
            }, 1000);
            $(".home").addClass('active').siblings().removeClass('active');
        });
			
			 $('.aboutmo').on('click', function() {
         
            $(".about").addClass('active').siblings().removeClass('active');
        });

        });


			
        var sample = $('.contents_wrap').offset().top;
        console.log(sample);
        $(window).on('mousewheel', function(e) {
            html_top = $('html').scrollTop();
            if (html_top > sample - 100) {
                $(".about").addClass('active').siblings().removeClass('active');

            } else {
                $(".home").addClass('active').siblings().removeClass('active');
            }
        });
 		