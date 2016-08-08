function check_mobile(tel){
	var tel=mobile.replace(/^\s*|\s*$/g,'');
	var length=tel.length;
	if (length==0)
	{
		alert('手机号码不能为空...');
		$('#Submit').attr('disabled','disabled');
		return;
	}
	$a=preg_match('/^((1[3|4|5|8])[0-9]{9})$/',tel);
	if ($a)
	{
		$('#Submit').attr('disabled','');
		return;
	}
	else{
		alert('手机号码格式不正确请重新输入...');
		$('#Submit').attr('disabled','dosabled');
		return;
	}

}


//检测密码
function check_password(password){
	var password=password.replace(/^\s*|\s*$/g,'');
	var length=password.length;
	if (length==0)
	{
		alert('密码不能为空...')
		$('#Submit').attr('disabled','disabled');
		return;
	}
}

//检测确认密码
function check_conform_password(p2){
	var p1=$('#password').val();
	var p2=$('#conform_password').val();
	if (p2!=p1)
	{
		alert('两次输入密码不一致...');
		$('#Submit').attr('disabled','disabled');
		return;
	}
	else{
		$('#Submit').attr('disabled','');
		return;
	}
}


//选中复选框
//function check_box(){
//	
//}
////检查用户名
//function check_username(username){
//	alert(username);
//	exit;
//	var username=username.replace(/^\s*|\s*$/g,'');
//	var length=username.length;
//	if (length==0)//用户名为空的时候
//	{
//		$('#username_notice').html('用户名不能为空');
//		$('#Submit').attr('disabled','disabled');
//		return;
//	}
//	else if (length<2)
//	{
//		$('#username_notice').html('用户名位大于2位的');
//		$('#Submit').attr('disabled','disabled');
//		return;
//	}
//	else if (length>4)
//	{
//		$('#username_notice').html('用户名不能大于！');
//		$('#Submit').attr('disabled','disabled');
//		return;
//	}
//	else{
//		$('#username_notice').html('请继续填写');
//		$('#Submit').attr('disabled','');
//		return;
//	}
//		//正则匹配中文名字/[\x{4e00}-\x{9fa5}]+/u
//		$a=preg_match('/^[a-zA-Z][a-zA-Z0-9]\w{2,19}$/',username);
//		if($a) {
//			$('#username_notice').html('姓名正确请继续');
//			$('#Submit').attr('disabled','');
//			return;
//		}
//		else{
//			$('#username_notice').html('姓名格式不正确');
//			$('#Submit').attr('disabled','dosabled');
//			return;
//		}
//
//
//}