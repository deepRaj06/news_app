// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";
let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navbar();
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

// import { search, append } from "./fetch.js";

// let query = document.getElementById('search_input').value;

// let searchData = (e) => {
//     if(e.search === 'Enter')
//     {
//         let container = document.getElementById('results');
//         container.innerHTML = null;
//         let query = document.getElementById('search_input').value;
//         // if(query == '')
//         // {
//         //     return false;
//         // }
//         search(query).then( (data) => {
//             console.log(data);
//             append(data, container)
//         })

//     }
// }

// document.getElementById('search_input').addEventListener('keydown', searchData);

// import { searchData } from "./index.js";

// let results_div = document.getElementById('results');
// results_div.innerHTML = searchData;
