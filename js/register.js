import {
    validateForm,
    registerUser
} from './controllers/register.controller.js';
import {
    launchModal
} from './helpers/alertModal.helper.js';

import {
    UserModel
} from './models/user.model.js';

let responseBase = {
    ok: true,
    msg: 'OK'
};

document.getElementById('btn-register').addEventListener('click', () => {
    validateInputs();
});

const validateInputs = () => {
    let response = responseBase;
    let registerData = {
        user: document.getElementById('controlRegisterUser').value,
        emailInput: document.getElementById('controlRegisterEmail').value,
        passwordInput: document.getElementById('controlRegisterPassword').value,
        passwordValidationInput: document.getElementById('controlRegisterValidatePass').value,
        checkReadTerms: document.getElementById('check-readTerms').checked
    };
    response = validateForm(registerData);
    if (!response.ok) {
        launchModal('Error!', response.msg, 'error');
    } else {
        registerUser(registerData)
            .then((res) => {
                validateModal(res);
            });
    }
};

function validateModal(res) {
    if (res.ok) {
        const resModal = launchModal('Success!', 'Usuario creado con exito', 'success');
        resModal.then((res) => {
            if (res.isConfirmed) {
                location.href = 'index.html';
            }
        });
    } else {
        launchModal('Error!', 'El usuario ya existe', 'error');
    }
}
