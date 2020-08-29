
function displayColors(colors) {
    let myColorsHtml = colors.map(color => {
        return `<div class="my-color" style="background-color: ${color.value}"></div>`
    }).join('')

    document.body.innerHTML = `<div class="my-colors">
        ${myColorsHtml}
    </div>`
}

const url = "https://api.noopschallenge.com/hexbot"

async function getColors(howMany) {

    let response = await fetch(`${url}?count=${howMany}`)
    let data = await response.json()
    let colors = data.colors

    displayColors(colors)
}

getColors(100)
