

function logar(){
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

if(login == "#" && senha == "#"){
    alert('Login efetuado');
    location.href = "gamesSpacers.html";
}else{
    alert('Usuário ou senha incorretos');
}
}

