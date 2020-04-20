// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

function experiencia(anos) {
    if (anos <= 1) {
        return 'Iniciante';
    } else if (anos > 1 && anos < 4) {
        return 'Intermediário'
    } else if (anos > 3 && anos < 7) {
        return 'Avançado'
    } else {
        return 'Jedi Master'
    }
}

var anosEstudo = 1;
console.log(experiencia(anosEstudo));
