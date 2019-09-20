
$(function(){
	//导航简单下拉
    $('#home_nav li.child').mouseenter(function(){
	     $('#home_nav li.child').removeClass('hover');
		 $(this).addClass('hover').find('ul').show();
	 }).mouseleave(function(){
		 $(this).find('ul').hide();
	});
  
	//置顶效果
	$("#scrolltop").click(function(){
			$("html,body").stop().animate({ scrollTop:0},500);
	});
	
   //预期收益 显示效果
   function expect_num(input_name){
	 var input_num=$(input_name);
	 
	 input_num.bind('input propertychange',function(){
		 if(!!$(this).val()){
			$(this).parent().prev().fadeIn();
		 }else{
			$(this).parent().prev().fadeOut();
		 }
	 });
	 
	  input_num.blur(function(){
		 $(this).parent().prev().fadeOut();
	  });
	  
	  
	  input_num.focus(function(){
		  if(!!$(this).val()){
			  $(this).parent().prev().fadeIn();
		  }
	  });
   }
   expect_num('.input_money');

	   
	      
	/*微信二维码下拉*/
	$('.share li.wx,.share li.xl').hover(function(){
	   $(this).find('img').show();
	   $(this).find('a').addClass('hover');
	},function(){
	   $(this).find('img').hide();
	   $(this).find('a').removeClass('hover');
	});
	
});


//只有移动端才能执行
	  function initnavigatorurl(){
	  var sUserAgent = navigator.userAgent.toLowerCase();
	  if(sUserAgent .match(/iphone os/i) == "iphone os" || sUserAgent .match(/android/i) || sUserAgent .match(/windows mobile/i)){
		 $('html').css({width:'1200px',margin:'auto 0'});
	  }
	  }
	  initnavigatorurl();

	   
		//输入框插件
	  (function($) {
	      var methods = {
	          // 在字面量对象中定义每个单独的方法
	          init: function() {
	              // 为了更好的灵活性，对来自主函数，并进入每个方法中的选择器其中的每个单独的元素都执行代码
	              return this.each(function(opt) {
	                  var $this = $(this);
	                  
	                  var settings = $this.data('inputPlus');

	                  if(typeof(settings) == "undefined") {
	                      var options = {
	                              type: 'normal',
	                              onkeyUp: null,
	                              onblur: null,
	                              onfocus: null,
	                              rule: null,
	                              childSelect: null
	                          };
	                      settings = $.extend({}, options, opt);
	                      $this.data('inputPlus', settings);
	                  } else {
	                      settings = $.extend({}, settings, opt);
	                      $this.data('inputPlus', settings);
	                  }

	                  if(!$this.is('input')) {
	                      $this.find('input').bind('keyup', function(e) {
	                      	if(e.keyCode!=13){
	                      		closeTip.call($this);
	                      	}
	                      });
	                  } else {
	                      $this.bind('keyup', function(e) {
	                      	if(e.keyCode!=13){
	                      		closeTip.call($this);
	                      	}
	                      });
	                  }
	              });
	          },
	          close: function() {
	              // 对选择器每个元素都执行方法
	              return this.each(function() {
	                  closeTip.call($(this));
	              });
	          },
	          show: function(string) {
	              return this.each(function() {
	                  showTip.call($(this), string);
	              });
	          }
	      };
	      
	      $.fn.inputPlus = function() {
	          var method = arguments[0];
	   
	          if(methods[method]) {
	              method = methods[method];
	              arguments = Array.prototype.slice.call(arguments, 1);
	          } else if(typeof(method) == 'object' || !method ) {
	              method = methods.init;
	          } else {
	              $.error( '方法不存在，检查拼写！' );
	              return this;
	          }
	   
	          return method.apply(this, arguments);
	      };

	      function closeTip() {
	          var $data = this.data('inputPlus');
	          // 执行代码
	          if(!this.is('input')) {
	        	  this.find('span').empty().addClass("hide");
	          } else {
	        	  this.find('input').nextAll('span').empty().addClass("hide");
	          }
	      }

	      function showTip(string) {
	          var $data = this.data('inputPlus');
	          // 执行代码
	          if(!this.is('input')) {
	        	
	              (string != null) && (string != "");
	        	  this.removeClass("hide").find('span').html(string);
	              
	          } else {
	              (string != null) && (string != "");
	              this.removeClass("hide").find('input').nextAll('span').html(string);
	          }
	      }

	  })(jQuery);	
	
	    