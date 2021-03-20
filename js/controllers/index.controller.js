import {
    UserModel
} from '../models/user.model.js';


export const login = (email, password) => {
    let response = {
        ok: true,
        msg: 'Login successful'
    };
    let userModel = new UserModel();
    userModel.email = email;
    userModel.pass = password;
    let isInputOk = inputValidator(userModel);
    if (!isInputOk) {
        response.ok = false;
        response.msg = 'Favor validar que ambos campos esten completos';
    } else {
        response = loginValidator(userModel);
    }
    return response;
};

const inputValidator = (user) => {
    let isOk = true;
    if (user.email === '' || user.pass === '') {
        isOk = false;
    }
    return isOk;
};

const loginValidator = async (userObj) => {
    let request = {
        email: userObj.email,
        pass: userObj.pass
    };
    const response = await fetch('https://heroicap-backend.herokuapp.com/api/login', {
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