         $('.headermore').on('click', function(e) {
            $(".header_a").toggle();
        });

        $('.category').on('click', function(e) {
            $('.category_sec').fadeIn(100);
			
        });

        $('span.exit').on('click', function(e) {
            $('.category_sec').fadeOut(100);
        });
        
        $( '.sec1 ul.aaa>li').hover(function(e) {
            $(this).find('.ser.txt').css({'color':'#fff'});
            $(this).find('.ser.line').css({'background-color':'#fff'})
            $(this).find('.ser.txt_s').css({'color':'#fff'})
            $(this).find('.ser.circle').css({'background-color':'#fff'});
            $(this).find('.ser.circle img').css({'opacity':'0.2'})
            $(this).find('.ser.box').animate({'bottom':'-33px','opacity':'1'},300);
            $(this).css({'background-color':'#004ea1','border':'1px solid #004ea1'});
              }, function(e) {
            $(this).find('.ser.txt').css({'color':'#222'});
            $(this).find('.ser.line').css({'background-color':'#000'})
            $(this).find('.ser.txt_s').css({'color':'#363636'})
            $(this).find('.ser.circle').css({'background-color':'#f3f3f3'});
            $(this).find('.ser.circle img').css({'opacity':'1'})
            $(this).find('.ser.box').animate({'bottom':'-66px','opacity':'0'},300)
            $(this).css({'background-color':'#fff','border':'1px solid #dcdcdc'});
              });


       $( '.sec1_ccc ul li').hover(function(e) {
             $(this).find('.ser.box').animate({'bottom':'-33px','opacity':'1'},300).delay( 300 );
           $(this).find('.ser.mask').css({'opacity':'1'});
              }, function(e) {
            $(this).find('.ser.box').animate({'bottom':'-66px','opacity':'0'},300)
             $(this).find('.ser.mask').css({'opacity':'0'});
              });

        var maintit = ['병원','대리운전/퀵','프리마켓','식자재유통','요식업','농수산물','방문판매','배달전문','오픈마켓','자동차 공업사','특허법률','오프라인매장','여행사','SNS결제'];
      
        var tit2= ['Hospital','Express delivery / Chauffeur service','free market','Food resource circulation','Restaurant','Farmers','Market','Door-to-door sales','Delivery service','Open market','Motor service','Patent Law','Offline Store','Travel agency','SNS Payment'];

        var tit3=['의료 결제시스템에 최적화된 통합 솔루션','더 신속하고 안전한 결제시스템','프리마켓 셀러의 HOT한 결제시스템','편리한 결제, 정확한 매출관리','예약부도(노쇼)의 해결책','도매업체뿐 아니라 일반소비자 직거래까지 확보','무거운 결제장비 없이 스마트폰만으로 어디서든 간편결제','배달전문 선결제 시스템으로 차별화된서비스','최저의 수수료로 결제와 관리','고객 편의 = 공업사 매출증대','세금절약, 세무관리, 다양한 결제수단','온라인, 오프라인 매장 통합 결제솔루션','해외에 있는 여행객도 즉시 카드결제','쇼핑몰 없이 고객관리, 주문관리, 간편 카드결제'];
        
        var text2 =['즉시결제 및 스마트폰 결제가 가능하여 의료비용 결제 대기시간 감소로 고객 불편함을 해소하고,적극적인 의료비 카드결제 수용제도로 고객 홍보효과 증대! 병원내방 없이 가능한 결제로 미수금 해결,인건비 절감, 빠른결제!','대리운전 / 퀵 서비스 결제 시 신속하고 안전한 카드결제가가능하도록 간편결제시스템을 지원합니다.신속한 접수진행으로 고객서비스와 결제 담당자의업무효율을 증진시키는데 큰 도움이 됩니다.','전체 결제건수 중 카드결제의 비율은 나날이 늘어가는 추세입니다.카드 사용 고객 중 20~30대가 가장 많은 비율을 차지하고 있습니다.프리마켓의 주요 고객층은 20~30대!카드결제 시스템은 매출증가의 핵심입니다.','빠른 결제 처리가 가능하여 매출 관리에 용이하고,직접 방문 없이도 원거리 카드결제가 가능하여업체간 미수금 방지에도 효과적입니다.카드 단말기가 필요없어 비용절감에 도움이 됩니다.','전화 예약이나 주문 시 동시에 선결제가 이루어져취소율을 최소화할 수 있습니다. 별도의 기기를구매할 필요없이 스마트폰으로 간편한 결제가 가능하여배달 사원이 현장에서 즉시 결제가 가능합니다.','간편 카드결제시스템으로 도매업체가 아닌 일반소비자도카드결제를 할 수 있어 보다 많은 거래처를 확보할 수 있습니다.거리 상관없이 간편하게 주문부터 결제까지 가능하여상품 유통이 정확하고 빠르게 진행됩니다.','별도의 기기를 구매할 필요없어 운영비를 절감할 수 있습니다.스마트 기기에 어플 설치만으로 현장결제뿐 아니라 멀리있는 고객도결제창을 전송하여 결제가 가능합니다. 업무효율 증진과 매출 향상을 기대할 수 있습니다.','주문 선 결제시스템을 적용하여 예약부도(노쇼)를 해결하고고객 주문 취소율 감소, 배달 속도 향상을 기대할 수 있습니다. 단말기 없이 카드결제가 가능한 멀티 솔루션과 고객 셀프 결제기능으로결제의 편리성을 극대화 하였습니다.','홍보를 위한 낮은 가격 책정, 높은 수수료로 인한 적자에서 이제 벗어나세요.간편하고 신속하게 결제와 관리가 가능한 통합 결제시스템으로로운 전략을 시작할 수 있습니다. 부가서비스인 PAYLOG 서비스로 쇼핑몰 제작도 무료!','차량수리, 정비, 픽업 후 고객 상황에 맞게 어디서든카드결제 서비스를 제공하여, 고객 방문없이 즉시결제가가능합니다. 획기적인 공업사 전용 카드결제 솔루션으로단골 고객을 확보하고 매출 향상을 기대할 수 있습니다.','자유로운 과세/비과세 설정이 가능한 특허법률 결제에특화된 시스템으로 세무관리가 더욱 편리합니다.최저의 수수료로 다양한 결제수단으로 결제가 가능한통합결제 솔루션을 최저 수수료로 사용할 수 있습니다.','고객 방문 없이 결제, 배송이 가능하여 온라인 시장까지 확보하고,고객관리 시스템이 결합되어있어 고객관리도 용이합니다.별도의 기기를 구매할 필요 없기 때문에 영비 절감에 큰 도움이 됩니다.','예약전화상담시 즉시 예약금을 받을수 있어 예매율이 증가합니다.해외에 있는 여행객도 즉시 카드결제가 가능하고,여행객에게 문자로 결제창을 전송하여 직접 결제를 받아 결제 효율을 극대화할 수 있습니다.','번거롭게 현금결제만 되는 무통장거래를 할 필요 없이간편 카드결제시스템으로 카드 결제 고객까지 확보할 수 있습니다. 또한, 블로그에 무료로 제작해드리는 쇼핑몰 페이로그 링크를 걸어 간편하게 카드결제를 받을 수 있습니다.']
               
//        var arrImg=[];
//        for(var i=0;i<5;i++){
//            
//           arrImg.push('url(img/bg'+i+'.jpg) no-repeat 50%');
//            $('section').eq(i).css({'background':arrImg[i],"background-size":'cover'});
//        };
//        
        var arrImg=[];
         for(var i=0;i<14;i++){
             arrImg.push('url(img/sec2_img'+i+'.png) no-repeat 50%');         
        };    

          $( 'ul.sec2>li').on('click',function(e) {
             $(this).addClass('on').siblings().removeClass('on');
               var idx= $(this).index();
               console.log(idx);
              $('.maintit').text(maintit[idx]);
              $('.tit2').text(tit2[idx]);
              $('.tit3').text(tit3[idx]);
              $('.text2').text(text2[idx]);
//             $('.sec2_img_sec').css({'background':'url(img/sec2_img'+idx+'.png);'});
                arrImg.push('url(img/sec2_img'+idx+'.png) no-repeat 50%');
               $('.sec2_img_sec').css({'background':arrImg[idx],"background-size":'cover'});
          });
        $(window).load(function() {
				
$('.sec2_img_sec').eq(0).css({'background':arrImg[0],"background-size":'cover'});
			});