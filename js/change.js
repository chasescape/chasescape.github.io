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
function check2(thisform) {

    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;
    var pass = document.getElementById("passrequit").value;
    window.document.f.action = "login.html";
    window.document.f.submit();

}
function check3(thisform) {
    window.document.f.action = "register.html";
    window.document.f.submit();
}