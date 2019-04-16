$('.category.pc').on('click', function() {
			$('.category_menu_wrap').fadeIn();
		
		})
		$('.close_btn').on('click', function() {
			$('.category_menu_wrap').fadeOut();
		})
		

		
var mySideBack = $('.mySideBack');
$('.category.mo.openNav').on('click',function(){
		$('#mySidenav').css({
				'right': '0px'
			});
			mySideBack.fadeIn();
	
})
	$('.sidenav .closebtn').on('click',function(){
				$('#mySidenav').css({
				'right': '-650px'
			});
			mySideBack.fadeOut();
	
})
	
	
		var acc = document.getElementsByClassName("accor_btn");
		var i;
		for (i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function() {
				this.classList.toggle("active");

				var panel = this.nextElementSibling;
				panel.classList.toggle("detail_m");
			});
		}

		$(function(){
    $(window).on('scroll',function(){
      if($(window).scrollTop()>30){
        $('.gnb').addClass('fixed') 
         }
      else{
        $('.gnb').removeClass('fixed')  
      }
     
		
        if($(window).scrollTop()>300){
           $('.quick_menu').fadeIn(1000);
        }else{
            $('.quick_menu').fadeOut(500);
        }
			  
			 
  });
				
		var info= $('.f_sec2>ul>li').eq(2);
			info.on('click',function(){
				alert("모집기간이 아닙니다");
			})
			
			$('.site_map').on('click',function(){
				location.href="../site_map.html";
			})
			
			$('.submit_ok').on('click',function(){
				location.href="../submit_ok.html";
			})
			
			
			$('.realtime').on('click',function(){
				alert("준비중인 서비스 입니다");
			})
			
		  $('.onetoone').on('click',function(){
				alert("준비중인 서비스 입니다");
			})
			
			  $('.request').on('click',function(){
				location.href="../service/service_request.html";
			})
			  $('.example').on('click',function(){
				location.href="../example/example.html";
			})
	  $('.sec2.detail_btn').on('click',function(){
				location.href="example/example.html";
			})


			  $('.request.index').on('click',function(){
				location.href="service/service_request.html";
			})
			  $('.example.index').on('click',function(){
				location.href="example/example.html";
			})
			$('._logo').on('click',function(){
				location.href="../index.html";
			})
				
  
  });


		
 