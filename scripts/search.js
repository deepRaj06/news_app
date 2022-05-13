// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";
let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navbar();
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

// import { search, append } from "./fetch.js";
let newsData = JSON.parse(localStorage.getItem('news'));
// console.log(newsData);

let results = document.getElementById('results');

newsData.forEach( ( {urlToImage, title, description} ) => {

    let div = document.createElement('div');


    let img = document.createElement('img');
    img.src = urlToImage;
    img.style.width = '200px';
    img.style.height = '300px';

    let titl = document.createElement('h3');
    titl.innerText = title;

    let desc = document.createElement('p');
    desc.innerText = description;

    div.append(img, titl, desc);

    let newsDataDetail = {
        urlToImage,
        title,
        description
    }

    div.onclick = () => {
        showDetailNews(newsDataDetail);
   
    }

    results.append(div);
});
// results.append(newsData);

const showDetailNews = (x) => {
    window.location.href = 'news.html';
    localStorage.setItem('detailNews', JSON.stringify(x));
}