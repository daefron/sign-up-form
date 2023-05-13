const button = document.getElementById('but');
button.addEventListener('click', () => {
    const confirm = document.getElementById('confirm').value;
    const password = document.getElementById('password').value;
    if (confirm !== password) {
        const pp = document.getElementById('pp');
        pp.style['color'] = 'black';
        document.getELementById('confirm').style['outline'] = 'none';
        document.getELementById('confirm').style['border'] = '1px solid black';
    }
})