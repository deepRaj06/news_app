// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";
let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navbar();


// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { search, append } from "./fetch.js";

let searchData = (e) => {
    if(e.key === 'Enter')
    {
        let query = document.getElementById('search_input').value;
        // console.log(query);
        const url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;
        search(url).then( (data) => {
            console.log(data);
            localStorage.setItem('news', JSON.stringify(data.articles));
            window.location.href = 'search.html';
        })

    }
}
document.getElementById('search_input').addEventListener('keydown',searchData);

// Sidebar

let containerCountry = document.getElementById('sidebar').children;

// By default India

let container = document.getElementById('results');
const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`

search(url).then( (data) => {
    console.log(data);
    append(data.articles, container)
})

// When clicked on particular country

function cSearch()
{
const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`
let container = document.getElementById('results');
container.innerHTML = null;
    search(url).then( (data) => {
        console.log(data);
        append(data.articles, container)
    })

}

for(let el of containerCountry)
{
    el.addEventListener('click', cSearch);
}

