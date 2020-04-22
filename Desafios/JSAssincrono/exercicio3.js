// https://api.github.com/users/diego3g/repos

var btnElement = document.querySelector('div#user button');
var inputElement = document.querySelector('div#user input');
var lista = document.querySelector('div#gitUsers');
var user;
var rep;
var listElemnt = document.createElement('ul');
var loading = function () {
    var itemElement = document.createElement('li');
    var text = document.createTextNode('Carregando... ');
    itemElement.appendChild(text);
    listElemnt.appendChild(itemElement);
    lista.appendChild(listElemnt);
}

btnElement.onclick = function () {
    listElemnt.innerHTML = '';
    user = inputElement.value;
    axios.get(`https://api.github.com/users/${user}/repos`)
        .then(function (response) {
            console.log(response)
            rep = response.data;
            loading();
        })
        .catch(function (error) {
            console.warn(error);
            alert('Usuário inexistente!');
        });

    setTimeout(() => {
        listElemnt.innerHTML = '';
        for (i = 0; i < rep.length; i++) {
            var itemElement = document.createElement('li');
            var text = document.createTextNode(rep[i].name);
            itemElement.appendChild(text);
            listElemnt.appendChild(itemElement);
            lista.appendChild(listElemnt);
        }
    }, 500);
};