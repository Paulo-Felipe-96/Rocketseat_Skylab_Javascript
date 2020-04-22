function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        if (idade >= 18) {
            resolve(idade);
        } else {
            reject(idade);
        }
    });
};

checaIdade(18)
    .then(function () {
        // console.log("Maior que 18");
        setTimeout(() => {
            console.log('Maior que 18');
        }, 3000);
    })
    .catch(function () {
        // console.log("Menor que 18");
        setTimeout(() => {
            console.log('Menor que 18');
        }, 3000);
    });