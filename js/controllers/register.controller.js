import {
    validateEmail
} from '../helpers/validateEmail.helper.js';

export const validateForm = (registerData) => {
    let response = {
        ok: true,
        msg: 'OK'
    };
    response = inputEmpty(registerData);
    if (!response.ok) return response;
    response = validatePassword(
        registerData.passwordInput,
        registerData.passwordValidationInput
    );
    if(!validateEmail(registerData.emailInput))
    {
        response.ok = false;
        response.msg = 'Formato de email incorrecto';
    }
    if(!registerData.checkReadTerms){
        response.ok = false;
        response.msg = 'Debe aceptar los terminos y condiciones de uso';
    }
    return response;
};

const inputEmpty = (registerData) => {
    let response = {
        ok: true,
        msg: 'OK'
    };
    if (
        !registerData.user ||
        !registerData.emailInput ||
        !registerData.passwordInput ||
        !registerData.passwordValidationInput
    ) {
        response.ok = false;
        response.msg = 'Favor completar los campos solicitados';
    }
    return response;
};

const validatePassword = (passwordInput, passwordValidationInput) => {
    let response = {
        ok: true,
        msg: 'OK'
    };
    if (passwordInput !== passwordValidationInput) {
        response.ok = false;
        response.msg = 'Las contraseñas no coinciden';
    }
    return response;
}; 

export const registerUser = async (registerData) => {
    let request = {
        user: registerData.user,
        email: registerData.emailInput,
        pass: registerData.passwordInput
    };
    const response = await fetch('https://heroicap-backend.herokuapp.com/api/users', {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            return data;
        });
    return response;

};
