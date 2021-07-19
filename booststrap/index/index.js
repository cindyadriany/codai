alert("hello!");
var nome="cindy"
var cargo= "aluna growdev"
var nomehtml= document.getElementById("nome-no-html");
var cargohtml= document.getElementById("cargo-no-html");
var texto1= document.getElementById("texto-1");
var texto2= document.getElementById("texto-2");

function colocarnomenohtml(nome){
    nomehtml.innerHTML= nome;
}

function colocarnomenohtml(cargo){
    cargohtml.innerHTML=cargo;
}

function clicknoprojetos (){
    console.log ("clicou no botão projeto");
    texto1.style.display="none"
    texto2.style.display="block"
}

function clicknosobre(){
    console.log("clicou no botão sobre");
    texto1.style.display="block";
    texto2.style.display="block";
    
}

function logarnome(){
    console.log(nome)
}

colocarnomenohtml(nome);
colocarcargohtml(cargo)
