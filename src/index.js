function searchPoem (event) {
event.preventDefault();

        new Typewriter("#poem-here", {
        delay: 50,
        cursor: "",
    })
    .typeString("Poem")
    .start(); }



let poemForm = document.querySelector("#form-poem");
poemForm.addEventListener("submit", searchPoem);
