function showPoem (response) {
let resultBox = document.querySelector(".result");
resultBox.style.display = "block";
        new Typewriter("#poem-here", {
        delay: 50,
        cursor: "",
    })
    .typeString(response.data.answer)
    .start(); 
}
function searchPoem (event) {
event.preventDefault();
let poemTheme = document.querySelector("#text-form");
let apiKey = "ae33a3fba9364t0co66343008146ece1";
let prompt = `Generate a portuguese poem about ${poemTheme.value}`;
let context = `You are an expert AI assistant who writes Portuguese poems.

Always return the response in exactly this format:
poem title 
poem with line breaks and stanzas
author name

The poem must be in Portuguese.
Between the title and the poem use <br /> element to separate them.
Keep the line breaks and stanza structure.
Do not use markdown.
Do not add any extra text.`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showPoem);
 }
let poemForm = document.querySelector("#form-poem");
poemForm.addEventListener("submit", searchPoem);
