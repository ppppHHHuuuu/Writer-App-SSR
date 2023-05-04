const url = "localhost:8086/doc/:id"


fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });





