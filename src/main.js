let muro = document.getElementById("muro");
let logIn = document.getElementById("logIn");
let menu = document.getElementById("navigation")
let registro = document.getElementById("registroCorreo")
logIn.style.display = "block";
registro.style.display = "none"
muro.style.display = "none";
menu.style.display = "none"


const mostrarMuroFb = () => {
    menu.style.display = "block";
    muro.style.display = "block";
    logIn.style.display = "none";
    registro.style.display = "none";
    window.guanataco.loginFacebook(); 
    // window.guanataco.printPosts(); 
}
document.getElementById("Facebook").addEventListener("click", mostrarMuroFb);
document.getElementById("publicar").addEventListener("click", posts);

const mostrarMuroGoogle = () => {
  menu.style.display = "block"
  muro.style.display = "block";
  logIn.style.display = "none";
  registro.style.display = "none";
  window.guanataco.loginGoogle(); 
  // window.guanataco.printPosts();
}
document.getElementById("google").addEventListener("click", loginGoogle);
document.getElementById("publicar").addEventListener("click", posts);


/*
const mostrarMuro = () => {
  menu.style.display="block"
  muro.style.display = "block";
  logIn.style.display = "none";
  registro.style.display = "none"
};
*/
const regresarLogin = () => {
  window.guanataco.logout();
  logIn.style.display = "block";
  menu.style.display = "none";
  muro.style.display = "none";
  registro.style.display = "none";
};

document.getElementById("cerrarSesion").addEventListener("click", regresarLogin);

const formularioRegistro = () => {
  registro.style.display = "block"
  menu.style.display = "none"
  logIn.style.display = "none";
  muro.style.display = "none";



};

document.getElementById("botonRegistrar").addEventListener("click", formularioRegistro);
