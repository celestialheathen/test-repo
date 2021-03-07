const table = document.querySelector('table#game-board')

const width = 12 
const height = 11
let cellID = 1

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

const cell1 = document.querySelector('td') 
console.log(cell1)
