const alerta = document.querySelector('.alert')

const form = document.querySelector('form')


const cardUser = document.querySelector('.card-title-name');
const cardEmail = document.querySelector('.card-text-email')
const container = document.querySelector('.container')

let usersArray = JSON.parse(localStorage.getItem('users')) || [];

function readUsers() {
    for (const user of usersArray) {
        container.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title card-title-name">${user.name}</h5>
                <p class="card-text card-text-email">${user.email}</p>
            </div>
        </div>`;
    }
}

function validacionCamposVacios() {
    let user = {
        name: document.getElementById("nombre").value,
        email: document.getElementById("correo").value,
        password: document.getElementById("contraseña").value,
        password2: document.getElementById("repite-contraseña").value,

    }
    if (user.name === "" || user.name === null) {
        return false
    }
    if (user.email === "" || user.email === null) {
        return false
    }
    if (user.password === "" || user.password === null) {
        return false
    }
    if (user.password2 === "" || user.password2 === null) {
        return false
    }
    return true;
}

function validarCorreo() {
    let expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (expresionRegular.test(document.getElementById("correo").value)) {
        return true;
    } else {
        return false;
    }
}

function validarContra() {
    // Al menos una letra (mayúscula o minúscula).
    // Al menos un dígito.
    // Longitud mínima de 8 caracteres
    if (document.getElementById("contraseña").value === document.getElementById("repite-contraseña").value) {
        let expresionRegular = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (expresionRegular.test(document.getElementById("contraseña").value)) {
            return true;
        }
    }
    return false;
}


function createUser(e) {
    e.preventDefault();
    let user = {
        name: document.getElementById("nombre").value,
        email: document.getElementById("correo").value,
        password: document.getElementById("contraseña").value,
    }
    
    if (validacionCamposVacios()) {
        if (validarCorreo()) {
            
            if (validarContra()) {
                alerta.innerHTML = 'Usuario creado correctamente'
                usersArray.push(user);
                localStorage.setItem("users", JSON.stringify(usersArray));
                
                setTimeout(() => {
                    alerta.innerHTML = '';
                    window.location.href = "index.html";
                }, 3000);
                
            } else {
                alerta.innerHTML = 'contraseña incorrecta'
                setTimeout(function () {
                    alerta.innerHTML = " ";
                }, 3000);
            }
            
        } else {
            alerta.innerHTML = 'correo incorrecto'
            setTimeout(function () {
                alerta.innerHTML = " ";
            }, 3000);
        }
        
    } else {
        alerta.innerHTML = 'campo vacio'
        setTimeout(function () {
            alerta.innerHTML = " ";
        }, 3000);
    }
    
}
readUsers()


form.addEventListener('submit', createUser);
