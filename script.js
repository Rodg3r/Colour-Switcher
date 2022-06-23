const colourChanger = document.getElementById('colourSwitcher')
const colours = ['Red', 'Blue', 'Yellow', 'Green', 'Pink']
const colorIndicator = document.getElementById('colourDisplayed')

colourChanger.addEventListener('click', () => {
    const number = Math.floor(Math.random() * colours.length)
    document.body.style.backgroundColor = colours[number]
    colourDisplayed.innerHTML = colours[number]
    console.log(colours[number])
})