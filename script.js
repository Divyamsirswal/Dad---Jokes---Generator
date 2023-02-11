const btnEl = document.getElementById("btn")

const jokeEl = document.getElementById("joke")

const apiKey = "FBeg6Lp8G9s7nJ2bHM14hg==9xzWg3X6BIxqHSia";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getjoke(){

    try {
        jokeEl.innerText = "-------Wait-------";
        btnEl.disabled =true;
        const response = await fetch(apiURL, options)
        const data = await response.json();
    
        btnEl.disabled =false;
        btnEl.innerText ="Tell Me A Joke"
    
        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later";
        console.log(error);
    }

   
}

btnEl.addEventListener("click", getjoke)