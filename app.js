const tehnology = document.body.children[1]
const nature = document.body.children[2]
const Text = document.body.children[3]
const animals = document.body.children[0]
const Prompt = prompt('Sorting img')

const sortingImg = (sorting) => {
    console.log(animals)
    if (sorting === 'animals') {
        animals.style.display = 'block'
    } else if (sorting === 'tehnology') {
        tehnology.style.display = 'block'
    } else if (sorting === 'nature') {
        nature.style.display = 'block'
    } else {
        Text.innerText = "Пусто"
    }
}

const ask = () => {
    sortingImg(Prompt)
}
ask()