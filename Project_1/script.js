
const name = document.getElementById("name");
const image = document.getElementById("image");
const eyecolor = document.getElementById("eyecolor");
const gender = document.getElementById("gender");
const button = document.querySelector(".getRandomCharacter");

button.addEventListener('click', (e) => {
    e.preventDefault()
    const randomNumber = Math.ceil(Math.random() * 88)
    fetch(`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`)
        .then(response => response.json())
        .then(character => {
            name.innerHTML = character['name'];
            image.innerHTML = `<img src="${character['image']}" alt="Character Image">`;
            eyecolor.innerHTML = character['eyeColor'];
            gender.innerHTML = character['gender'];
        })
})
