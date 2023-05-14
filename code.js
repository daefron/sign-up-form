var pp = document.getElementById('pp');
var button = document.getElementById('but');
button.addEventListener('click', () => {
    var confirm = document.getElementById('confirm');
    var password = document.getElementById('password');
    if (confirm.value !== password.value) {
        pp.style['color'] = 'black';
        confirm.style['outline'] = 'none';
        confirm.style['border'] = '2px solid black';
        password.style['outline'] = 'none';
        password.style['border'] = '2px solid black';

    }
    else {
        pp.style['color'] = 'white';
        confirm.style['outline'] = 'none';
        confirm.style['border'] = '1px solid rgb(228,228,228)';
        password.style['outline'] = 'none';
        password.style['border'] = '1px solid rgb(228,228,228)';

    }
})