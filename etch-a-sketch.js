const container = document.querySelector('.container');

const gridSize = 16;

function createGrid(size) {
    for (let i = 0; i < 15; i++) {
        const div = document.createElement('div');
        // div.style.border = 'thick solid #0000FF';
        container.appendChild(div);
    }
}

const divs = document.querySelectorAll('.div');

divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'grey';
    })
})


createGrid(gridSize);