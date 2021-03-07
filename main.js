const table = document.querySelector('table#game-board')
const player = document.querySelector('img.sprite_sheet')
const sprite = document.querySelector('div.sprite')


const width = 12 
const height = 11
let cellID = 1

let currentX = player.x
let currentY = player.y

for (let h = 0; h < height; h++ ) {

    // Create a table row
    const tableRow = document.createElement('tr')
    tableRow.id = h

    // on each table row, create 12 table cells
    for (let w = 0; w < width; w++) {
        const td = document.createElement('td')
        td.id = cellID++
        td.classList.add('path')
        tableRow.appendChild(td)
    }
    
    table.appendChild(tableRow)
}


function moveSprite(e) {
    switch (e.keyCode) {
        case 37: 
            sprite.style.transform = `translateX(-70px)`
            currentX = player.x
            // Add "facing_left" to player class
            break;
            // Left

        case 39: 
            sprite.style.transform = `translateX(70px)`
            currentX = player.x;
            // Add "facing_right" to player class
            break;
            // Right

        case 38:  
            sprite.style.transform = `translateY(-60px)`
            currentY = player.y;
            break;
            // Up

        case 40: 
            sprite.style.transform = `translateY(60px)`
            currentY = player.y; 
            // Add "facing_down" to player class
            break;
            // Down
    }

}

document.addEventListener('keydown', moveSprite)
