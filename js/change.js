function check(thisform) {

    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;

    if (name == "admin" && pass == "123456") {
        alert("登录成功！");
        window.document.f.action = "index.html";
        window.document.f.submit();
    }
    else {
        alert("用户名或密码错误！");
    }

}