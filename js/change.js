const toggleForm = document.getElementById("toggle-form");
const toggleFormRegister = document.getElementById("toggle-form-register");

// 获取注册和登录表单
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");

// 切换到注册表单
toggleForm.addEventListener("click", function () {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
});

// 切换到登录表单
toggleFormRegister.addEventListener("click", function () {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
});