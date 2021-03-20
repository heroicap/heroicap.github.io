import {
    login
} from './controllers/index.controller.js';
import {
    launchModal
} from './helpers/alertModal.helper.js';

document.getElementById('btn-login').addEventListener('click', () => {
    let emailInput = document.getElementById('controlUsuario').value;
    let passInput = document.getElementById('controlContrasena').value;
    if(!emailInput || !passInput){
        launchModal('Error!', 'Ingrese los campos solicitados', 'error');
        return;
    }
    login(emailInput, passInput)
        .then(response => {
            if (response.ok) {
                location.href = 'misions.html';
                localStorage.setItem('userToken', result.token);
            } else {
                const msg = 'Usuario o contraseña incorrecto, favor reintentar';
                launchModal('Error!', msg, 'error');
            }
        });
});

document.getElementById('btn-register').addEventListener('click', () =>{
    location.href = 'register.html';
});