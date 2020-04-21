axios.get('https://api.github.com/users/Paulo-Felipe-96')
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.warn(error);
    });