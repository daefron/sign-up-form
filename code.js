const button = document.getElementById('but');
button.addEventListener('click', () => {
    const confirm = document.getElementById('confirm').value;
    const password = document.getElementById('password').value;
    if (confirm !== password) {
        const pp = document.getElementById('pp');
        pp.style['color'] = 'black';
    }
})