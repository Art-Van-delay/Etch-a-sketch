const container = document.querySelector('.container');

function createGrid() {
    for (let i = 0; i < 15000; i++) {
        const div = document.createElement('div');
        div.className = 'grid-item';
        div.setAttribute("id", "grid-item");
        container.appendChild(div);
    }
}
createGrid();

const divs = document.querySelectorAll('.grid-item');

divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "red";
    })
});

const button = document.querySelector('#refresh');

button.addEventListener('click', () => {
    location.reload();
})
