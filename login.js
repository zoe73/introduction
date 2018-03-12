 var code;

 function createCode() {
     code = "";
     var codeLength = 4; //验证码的长度  
     var checkCode = document.getElementById("code");
     var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
         'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
         'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数  
     for (var i = 0; i < codeLength; i++) { //循环操作  
         var index = Math.floor(Math.random() * 52); //取得随机数的索引（0~52）  
         code += codeChars[index]; //根据索引取得随机数加到code上  
     }
     if (checkCode) {
         checkCode.className = "code"; //把code值赋给验证码  
         checkCode.innerHTML = code;
     }
 }
 function validate() {
     var inputCode = document.getElementById("inputCode").value;
     if (inputCode.length <= 0) {
         alert("请输入验证码！");
         return false;

     } else if (inputCode.toUpperCase() != code.toUpperCase()) {
         alert("验证码输入有误！");
            createCode();
         return false;
         

     }
     else{

     var iname = document.getElementById("iname").value;
     var ipw = document.getElementById("ipw").value;
     if (iname.length <= 0) {
         alert("请输入用户名！");
         createCode();
         return false;
     } else {
         if (iname != "hr") {
             alert("用户名不正确！");
             createCode();
             return false;
         }
         else
            {

     }
     if (ipw.length <= 0) {
         alert("请输入密码！");
         createCode();
         return false;
     } else {
         if (ipw != "hr") {
             alert("密码不正确！");
             createCode();
             return false;
         }
         else
            return true;
        }

     }
     }

 }
 function tomain() {
     if (validate()) { 
        setCookie(document.getElementById("iname").value);     
        window.location.href="main.html";
        
        }
 }
function outloading(){
    if (confirm("确定退出登录？")) {
        window.location.href="index.html";
        clearCookie(document.getElementById("iname").value);
        
    }
    
}

 //设置cookie
function setCookie(cname) {
    // var d = new Date();
    // d.setTime(d.getTime() + (exdays*24*60*60*1000));
    // var expires = "expires="+d.toUTCString();
    // document.cookie = cname + "=" + cvalue + "; " + expires;
    document.cookie = cname;
}
//获取cookie
// function getCookie(cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0; i<ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0)==' ') c = c.substring(1);
//         if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
//     }
//     return "";
// }
//清除cookie  
function clearCookie(name) {  
    setCookie(name, "", -1);  
}  
function checkCookie() {
    var user = getCookie("iname");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        alert("请登录");
        window.location.href="index.html";
    }
    checkCookie();
}
