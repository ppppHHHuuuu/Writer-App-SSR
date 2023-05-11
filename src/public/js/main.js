//https://stackoverflow.com/questions/3225251/how-can-i-share-code-between-node-js-and-the-browser

const mainURL = "http://localhost:8086";
const docURL = "http://localhost:8086/doc/";
const ul = document.getElementById("file-name-ul");
const titlesBtn = document.getElementsByClassName("page-title");
const linkTag = document.getElementsByClassName("link");
(function addLink() {
    for (let i = 0; i < titlesBtn.length; i++) {
        const titleBtn = titlesBtn[i];
        const link = "/doc/" + titleBtn.innerHTML;
        linkTag[i].href = link;
        linkTag[i].style.color = "black";
        linkTag[i].style.textDecoration = "none";
    }
})();
console.log(linkTag);
console.log(linkTag[2]);

// // //click => fetch => add by ejs
for (let i = 0; i < linkTag.length; i++) {
    linkTag[i].addEventListener("click", (e) => {
        getPageData(linkTag[i].childNodes[1].innerText);
        // e.preventDefault();
    });
}

async function getPageData(link) {
    let url = docURL + link;
    

     console.log(url);
    // console.log(docURL + link)
    // fetch(url)
    //     .then((response) => response)
    //     .then((data) => console.log(data))
    //     .catch((error) => console.error(error));

}
