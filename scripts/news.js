// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navbar();

let detailed_news = document.getElementById('detailed_news');

let newsDataFromSearchLocStor = JSON.parse(localStorage.getItem('detailNews'));
console.log(newsDataFromSearchLocStor);

// newsDataFromSearchLocStor.forEach( ( {urlToImage, title, description} ) => {

    let div = document.createElement('div');


    let img = document.createElement('img');
    img.src = newsDataFromSearchLocStor.urlToImage;
    img.style.width = '200px';
    img.style.height = '300px';

    let titl = document.createElement('h3');
    titl.innerText = newsDataFromSearchLocStor.title;

    let desc = document.createElement('p');
    desc.innerText = newsDataFromSearchLocStor.description;

    div.append(img, titl, desc);

    detailed_news.append(div);
// });
