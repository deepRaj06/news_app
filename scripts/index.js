// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";
let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navbar();


// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { search, append } from "./fetch.js";

// let query = document.getElementById('search_input').value;

// let searchData = (e) => {
//     if(e.key === 'Enter')
//     {
//         let query = document.getElementById('search_input').value;
//         const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`;
//         let container = document.getElementById('results');
//         search(url).then( (data) => {
//             console.log(data);
//             window.location.href = 'search.html';
//             append(data, container)
//             window.location.href = 'search.html';
//         })

//     }
// }

// document.getElementById('search_input').addEventListener('keydown', searchData);

// export {searchData};

// document.getElementById('search_input').addEventListener('keydown', () => {

//     searchData;

//     window.location.href = 'search.html';

// } );

let containerCountry = document.getElementById('sidebar').children;

function cSearch()
{
const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`
let container = document.getElementById('results');
container.innerHTML = null;
    search(url).then( (data) => {
        console.log(data);
        append(data, container)
    })

}

for(let el of containerCountry)
{
    el.addEventListener('click', cSearch);
}

