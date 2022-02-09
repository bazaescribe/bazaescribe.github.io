function test() {
    console.log("Test");
}

function login() {
    var mail = ""
    var pass= ""

    mail = document.getElementById("email").value
    pass = document.getElementById("password").value

    console.log(mail+pass)

    if(mail == "baza@devf.mx"){
        console.log("Mail correcto")
        if(pass == "123456"){
            console.log("Bienvenido a tu cuenta")
            mixpanel.track("Sesión iniciada")
            document.getElementById("response").innerHTML = "Bienvenido"
        } else {
            console.log("Contraseña incorrecta")
            mixpanel.track("Wrong password")
            document.getElementById("response").innerHTML = "Contraseña incorrecta"
        }
    } else {
        console.log("Usuario no registrado")
        mixpanel.track("User not found")
        document.getElementById("response").innerHTML = "Usuario NO registrado"
    }
}