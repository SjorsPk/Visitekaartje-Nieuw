document.addEventListener("DOMContentLoaded", async () => {
    let card = document.querySelector('.LOL');
    // const message = await getData()
    let titleElement = document.getElementsByTagName("title")[0]
    // titleElement.innerHTML = message.value
    // let gegevensElement = document.getElementsByClassName("gegevens")[0]
    // gegevensElement.addEventListener("click", async () => {
    //     const message = await getData()
    //     gegevensElement.classList += "cooleAnimatie"
    //     alert(message.value)
    // })
    // gegevensElement.innerHTML = "<p>Barrie Batsma</p>"
    // x = 3
    // y = 2
    // z = x * y
    // console.log("Hello Geno o/ \nLol")
    // console.log(z) let hier niet op lol

    card.addEventListener('click', function() {
        card.classList.toggle('is-flipped');
    });
})

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
// } let hier niet op lol nummer 2
