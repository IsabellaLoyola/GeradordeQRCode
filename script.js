const inputValue = document.querySelector('#inputValue');
const btnValue = document.querySelector('#btnValue');
const imgqrcode = document.querySelector('#imgqrcode');
const caixa = document.querySelector('.caixa');
let valueDefault;



btnValue.addEventListener('click', () => {
    let qrcodeValue = inputValue.value.trim()
    if(!qrcodeValue || qrcodeValue === valueDefault) return;
    valueDefault = qrcodeValue;
    btnValue.innerText = 'Gerando QR Code...'
    imgqrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`
    imgqrcode.addEventListener('load', () => {
        caixa.classList.add('active');
        btnValue.innerText = `Gerar QRCode`
    })
})