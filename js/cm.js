/**
 * @Company:深圳市后河网互联网金融服务有限公司
 * @Copyright: Copyright (c) 2015 本内容仅限于深圳市后河网互联网金融服务有限公司内部传阅，禁止外泄以及用于其他的商业目的。
 * @author: wei.ou
 * @date 2015年8月31日
 * @version  
 */
/**
 * 公用类，置于hh下面
 * @author wei.ou
 */
var hh = {
	/**
	 * 是否为空
	 * @author wei.ou
	 */
	isEmpty: function(target){
		if(target == null || typeof(target) == 'undefined'){
			return true;
		}
		if(typeof(target) == 'string'){
			if($.trim(target) == ""){
				return true;
			}
		}
		return false;
	},
	/**
	 * 请求json格式数据
	 * @author wei.ou
	 * @param url 无需带path
	 * @param async
	 * @param param
	 * @param callback
	 */
	getJsonData: function(url, param, callback) {
		hh.ajaxGetData(url, param, callback, {dataType: "json"});
	},
	/**
	 * post提交，返回json格式数据
	 * @author wei.ou
	 * @param url 无需带path
	 * @param async
	 * @param param
	 * @param callback
	 */
	postJsonData: function(url, param, callback) {
		hh.ajaxPostData(url, param, callback, {dataType: "json"});
	},
	/**
	 * get方式取得数据
	 * @author wei.ou
	 * @param url 无需带path
	 * @param param
	 * @param callback
	 * @param options 可不传入
	 */
	ajaxGetData: function(url, param, callback, options){
		options = options||{};
		options.type = "get";
		hh.ajax(url, param, callback, options);
	},
	/**
	 * 提交数据
	 * @author wei.ou
	 * @param url 无需带path
	 * @param param
	 * @param options 可不传入
	 */
	ajaxPostData: function(url, param, callback, options){
		options = options||{};
		options.type = "post";
		hh.ajax(url, param, callback, options);
	},
	/**
	 * 最好不要直接使用该方法
	 * @author wei.ou
	 */
	ajax: function(url, param, callback, options){
		var ajaxOpt = {}
		$.extend(ajaxOpt, options);
		ajaxOpt.url = hh.HONHE_PATH+url;
		ajaxOpt.data = param;
		ajaxOpt.cache = false;
		ajaxOpt.success = function(data){
			callback(data);
		}
		//session失效跳转到登入页
		ajaxOpt.complete = function(xhr, tr){
			var text = xhr.responseText;
			if(typeof text == "string" && hh.isEmpty(xhr.responseJSON)){
				if(text.search(/is_login_page/i) > -1){
					top.location.href = hh.HONHE_PATH+"login/loadLoginPage.jhtml";
					return;
				}
			}
		}

		$.ajax(ajaxOpt);
	},
	/**
	 * 更改所在位置信息
	 * @param index
	 * @param text
	 */
	modifyBread: function(index, text){
		var as = $("#bread").find("a");
		if(index >= as.size()){
			if(as.size() > 1){
				$("#bread").find("a").eq(index-1).removeClass("now");
			}
			$("#bread").append("><a class='now' href='#'>"+text+"</a>");
			return;
		}
		$("#bread").find("a").eq(index).html(text);
	},
	/**
	 * 更新title标签的文本
	 * @param text
	 */
	updateTitle: function(text){
		$("title").html("后河财富-"+text);
	}
}

/**
 * 通用输入验证类
 * @author wei.ou
 */
hh.inputVerify = {
	/**
	 * 验证邮箱
	 * @author wei.ou
	 */
	checkMail: function(mail){
		if (hh.isEmpty(mail)) {
			return false;
		}
		if (!/^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(mail)) {
			return false;
		}
		return true;
	},
	/**
	 * 校验密码
	 * @author wei.ou
	 */
	checkPassword : function(password) {
		if(hh.isEmpty(password)) {
			return false;
		}
		if(password.length < 8) {
			return false;
		}
		//必须非纯数字或纯字母
		var pwdRegExp = new RegExp("^(.*[0-9]+.*[a-zA-Z]+.*)|(.*[a-zA-Z]+.*[0-9]+.*)$", "g");
		if (!pwdRegExp.test(password)) {
			return false;
		}
		return true;
	},
	/**
	 * 检查手机号码
	 * @author wei.ou
	 */
	checkPhoneNum : function(phone) {
		if (hh.isEmpty(phone)) {
			return false;
		}
		if (!/^((13[0-9])|(14[5,7])|(15[^4,\D])|(17[0,1,3,6-8])|(18[0-9]))\d{8}$/.test(phone)) {
			return false;
		}
		return true;
	}
}