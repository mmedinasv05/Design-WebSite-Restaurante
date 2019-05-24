function menu(e){
    if(e == 'btn1') {
        document.getElementById('promotion').setAttribute('style', 'display:block');
        document.getElementById('saurcers').setAttribute('style', 'display:none');
        document.getElementById('office').setAttribute('style', 'display:none');
    }
    if(e == 'btn2') {
        document.getElementById('promotion').setAttribute('style', 'display:none');
        document.getElementById('saurcers').setAttribute('style', 'display:block');
        document.getElementById('office').setAttribute('style', 'display:none');
    }
    if(e == 'btn3') {
        document.getElementById('promotion').setAttribute('style', 'display:none');
        document.getElementById('saurcers').setAttribute('style', 'display:none');
        document.getElementById('office').setAttribute('style', 'display:block');
    }
}