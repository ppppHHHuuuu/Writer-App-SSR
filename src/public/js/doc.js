const url = "http://localhost:8086"

const saveButton = document.getElementById('save-btn');

saveButton.addEventListener('click', updateDocList );

async function updateDocList() {
    const title = document.getElementById('doc-name-input').value;
    const doc = document.getElementById('text-field').value;
    console.log("title: " + title)
    console.log("document: " + doc)

    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, doc})//"{"title"}"
    })
    const data = await response.json();
    if (response.ok) {
        
        console.log("server receive status:"+ JSON.stringify(data));
    }
    else {
        
        console.log('Error' + JSON.stringify(data));
    }
}