const grids = document.querySelectorAll('td')
const bombs = 4

// Insert 4 bombs randomly to the grids, add class of .bomb to each one 

const gridsArr = Array.from(grids)


for (let i = 0; i < 4; i++) {
    let rdnGrid = Math.round(Math.random() * grids.length)

    while (grids[rdnGrid].classList.contains("bomb")) 
    {
        let rdnGrid = Math.round(Math.random() * grids.length)
    }
    
    grids[rdnGrid].classList.add("bomb")
}