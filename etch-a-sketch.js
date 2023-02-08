const container = document.querySelector('.container');

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.className = 'grid-item';
        div.setAttribute("id", "grid-item");
        container.appendChild(div);
    }
}

// const divs = document.querySelectorAll('.grid-item');


createGrid();

const divs = document.querySelectorAll('.grid-item');

divs.forEach((div) => {
    div.addEventListener('click', () => {
        div.style.backgroundColor = "red";
        alert(div.id);
    })
});

