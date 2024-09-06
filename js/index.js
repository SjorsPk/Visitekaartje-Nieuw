document.addEventListener("DOMContentLoaded", async () => {
    let card = document.querySelector('.LOL');
    let titleElement = document.getElementsByTagName("title")[0]
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    });
})

// let hier absoluut niet op ik was iets aan t proberen
// async function getData() {
//     const url = "https://api.chucknorris.io/jokes/random";
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Response status: ${response.status}`);
//         }

//         const json = await response.json();
//         console.log(json);
//         return json
//     } catch (error) {
//         console.error(error.message);
//     }
