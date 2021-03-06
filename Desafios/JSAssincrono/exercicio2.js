// https://api.github.com/users/diego3g/repos

var btnElement = document.querySelector('div#user button');
var inputElement = document.querySelector('div#user input');
var lista = document.querySelector('div#gitUsers');
var user;
var rep;

var listElemnt = document.createElement('ul');

btnElement.onclick = function () {
    listElemnt.innerHTML = '';
    user = inputElement.value;
    axios.get(`https://api.github.com/users/${user}/repos`)
        .then(function (response) {
            console.log(response)
            rep = response.data;
        })
        .catch(function (error) {
            console.warn(error);
        });

    setTimeout(() => {
        for (i = 0; i < rep.length; i++) {
            var itemElement = document.createElement('li');
            var text = document.createTextNode(rep[i].name);
            itemElement.appendChild(text);
            listElemnt.appendChild(itemElement);
            lista.appendChild(listElemnt);
        }
    }, 500);
}