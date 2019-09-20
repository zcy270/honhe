$(function() {
	
	//注册提示手机号码
		$("#phone_number").focus(function(){
			$(".tip_red").css("display","none")
			if($(this).val()!==""){
				$(".tip_red").css("display","none")
			}
		})
		$("#phone_number").blur(function(){
			if($(this).val()==""){
				$(".tip_red").css("display","block")
			}
		});
		
		//点击跳入下一步
		$("#status1").on("click",function(){
			$(".form_status1").removeClass('show');
			$(".revise_status1").removeClass("suc");
			$(".revise_status2").addClass("suc");
			$(".form_status2").addClass("show");
			$(".k_tip").removeClass("show")
			
		})
		$("#status2").on("click",function(){
			$(".suc_box").addClass('show');
			$(".revise_status2").removeClass("suc");
			$(".revise_status3").addClass("suc");
			$(".form_status2").removeClass("show");
			$(".wait_box").removeClass("show");
			
		})
		
		//添加银行卡
		$()
		
		//开通密存管的密码
		var active = 0,
	        inputBtn = document.querySelectorAll('.input1');
	    for (var i = 0; i < inputBtn.length; i++) {
	        inputBtn[i].addEventListener('click', function () {
	            inputBtn[active].focus();
	        }, false);
	        inputBtn[i].addEventListener('focus', function () {
	            this.addEventListener('keyup', listenKeyUp, false);
	        }, false);
	        inputBtn[i].addEventListener('blur', function () {
	            this.removeEventListener('keyup', listenKeyUp, false);
	        }, false);
	    }
	 
	    /**
	     * 监听键盘的敲击事件
	     */
	    function listenKeyUp() {
	        var beginBtn = document.querySelector('#beginBtn');
	        if (!isNaN(this.value) && this.value.length != 0) {
	            if (active < 12) {
	                active += 1;
	            }
	            inputBtn[active].focus();
	        } else if (this.value.length == 0) {
	            if (active > 0) {
	                active -= 1;
	            }
	            inputBtn[active].focus();
	        }
	        if (active >= 12) {
	            var _value = inputBtn[active].value;
	            if (beginBtn.className == 'begin-no' && !isNaN(_value) && _value.length != 0) {
	                beginBtn.className = 'begin';
	                beginBtn.addEventListener('click', function () {
	                    calculate.begin();
	                }, false);
	            }
	        } else {
	            if (beginBtn.className == 'begin') {
	                beginBtn.className = 'begin-no';
	            }
	        }
	    };
	    
	    
	    $(".input_wrap .tip_red").click(function(){
	    	$(this).next("input").focus()
	    })
	    
	    //密码显示隐藏
	    $(".eye_switch").on("click",function(){
	    	$(this).toggleClass("hover");
	    	if($("#logo_psd").prop('type')=='text'){
	    		$("#logo_psd").prop('type',"password");
	    	}else{
	    		$("#logo_psd").prop('type',"text");
	    	}
	    })
});