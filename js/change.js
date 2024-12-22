// 获取切换表单的链接
const toggleFormLinks = document.querySelectorAll('.toggle-form');

// 获取登录和注册表单容器
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');

// 切换到注册表单
toggleFormLinks[0].addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

// 切换到登录表单
toggleFormLinks[1].addEventListener('click', () => {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});
