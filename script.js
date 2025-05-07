function showMessage(text) {
    const message = document.getElementById('message');
    message.textContent = text;
    message.classList.add('show');
    setTimeout(() => {
        message.classList.remove('show');
    }, 3000);
}

function handleSubmit(event) {
    event.preventDefault();
    const button = event.target.querySelector('button[type="submit"]');
    button.classList.add('loading');

    showMessage('登入成功！正在跳轉...');

    setTimeout(() => {
        window.location.href = 'https://www.youtube.com/watch?v=YcqI9FdpvNs&pp=ygUVYnVyeSB0aGUgbGlnaHQgMSBob3Vy';
    }, 1000);

    return false;
}

function handleSocialLogin(provider) {
    const button = event.target.closest('.social-btn');
    button.classList.add('loading');
    
    showMessage(`正在使用 ${provider} 登入...`);

    setTimeout(() => {
        window.location.href = 'https://www.youtube.com/watch?v=YcqI9FdpvNs&pp=ygUVYnVyeSB0aGUgbGlnaHQgMSBob3Vy';
    }, 1000);
} 