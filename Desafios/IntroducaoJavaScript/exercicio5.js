function varreUsuarios(usuarios) {
    for (const i of usuarios) {
        console.log(`O ${i.nome} possui as habilidades: ${i.habilidades.join(', ')}`)
    };
};

var usuarios = [
    {
        nome: 'Diego',
        habilidades: ['Javascript', 'ReactJS', 'Redux']
    }, {
        nome: 'Gabriel',
        habilidades: ['Vuejs', 'Ruby on Rails', 'Elixir']
    }
];

varreUsuarios(usuarios);
