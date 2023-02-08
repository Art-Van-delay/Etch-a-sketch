const container = document.querySelector('.container');

const gridSize = 16;

function createGrid(size) {
    for (let i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.className = 'grid-item';
        // div.style.border = 'thick solid #0000FF';
        container.appendChild(div);
    }
}

const divs = document.querySelectorAll('.grid-item');

divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'grey';
    })
})


createGrid(gridSize);