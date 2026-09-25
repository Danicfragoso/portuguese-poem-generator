function searchPoem (event) {
event.preventDefault();

new Typewriter("#poem-here", {
        strings: ["Poem"],
        autoStart: true,
        delay: 50,
        cursor: "",
    });


}
let poemForm = document.querySelector("#form-poem");
poemForm.addEventListener("submit", searchPoem);
