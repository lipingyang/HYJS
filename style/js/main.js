//		导航
		$(".nav-title").mouseover(function() {
			$(this).children(".menu-box").show();
		});
		$(".nav-title").mouseleave(function() {
			$(this).children(".menu-box").hide();
		});

		//		图片轮播


        var ml = 0;
        var vliw=171;
        var timer
        var count = $(".student-pic ul li").length - 6;
        var vuw=vliw*count;
		function nextImage() {
			clearInterval(timer);
			var vu = $('.student-pic ul');
			
			if( ml < vuw){
				timer = setInterval(
				function() {
					ml = ml + 1;
					vu.css('margin-left', -ml);
					if(ml >= vliw) {						
						if(ml % vliw == 0) {
							clearInterval(timer);						
						}
					}
				}, 2);
			}
			
		};
		function prevImage() {
			clearInterval(timer);
			var vu = $('.student-pic ul');
			if( ml > 0){
				timer = setInterval(
				function() {
					ml = ml - 1;
					vu.css('margin-left', -ml);
					if(ml <= vuw) {						
						if(ml % vliw == 0) {
							clearInterval(timer);						
						}
					}
				}, 2);
			}
			
		};
		$(".prev-btn").click(function(){
			prevImage();
		})
		$(".next-btn").click(function(){
			nextImage();
		})
//		学生风采
        $(".student-elegant").mouseover(function(){
        	$(".next-btn").show();
        	$(".prev-btn").show();
        });
        $(".student-elegant").mouseout(function(){
        	$(".next-btn").hide();
        	$(".prev-btn").hide();
        });
		
//		教师风采
        $(".pic-wall li").mouseover(function(){
        	$(this).children(".shadow").show();
        	$(this).children(".pic-txt").show()
        });
        $(".pic-wall li").mouseout(function(){
        	$(this).children(".shadow").hide();
        	$(this).children(".pic-txt").hide()
        })