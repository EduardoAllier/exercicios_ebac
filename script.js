const form = document.getElementById('form-numbers')
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
let formEValido = false;



function validaMaioridadeCampoB(campoA, campoB) {
    const numberCampoA = Number(campoA);
    const numberCampoB = Number(campoB);
    return numberCampoB > numberCampoA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const mensagemSucesso = `Campo B > A `
    const mensagemErro = `Campo B < A`

    formEValido = validaMaioridadeCampoB(campoA.value, campoB.value)
    if(formEValido){
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.display = 'none';
        campoA.value = '';
        campoB.value = '';
    } else {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
    }
})