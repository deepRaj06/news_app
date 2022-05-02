
let search = async (url) => {
    let res = await fetch(url);

    // let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);
    // let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${cc}`);
    console.log(res);
    let data = await res.json();
    // console.log(data);
    return data.articles;
}

let append = (data, container) => {
    // console.log(data);

    data.forEach( ( {urlToImage, title, description} ) => {

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
        container.append(div);
    });
}

export {search, append};