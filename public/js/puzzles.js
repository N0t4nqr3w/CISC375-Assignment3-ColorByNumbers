import { buttonClick, isHeldDown } from './ui.js';

export let loaded_puzzle = 0;
export let current_colors = new Set();
export let selected_color = "";
export const puzzles = [
    {name: "Canvas", id: "Canvas"},
    {name: "Blossoms", id: "Blossoms"},
    {name: "Sunset", id: "Sunset"},
    {name: "Knight", id: "Knight"},
    {name: "Train", id: "Train"},
    {name: "Island", id: "Island"}
];

export function setSelectedColor(color) {
    selected_color = color;
}

export function getSelectedColor() {
    return selected_color;
}

export function changePage(index) {
    loaded_puzzle = index;
    localStorage.setItem('colorByNumbers_Puzzle', loaded_puzzle);
    selected_color = '';
    createGrid();
}

export function createGrid() {
    const grid = document.querySelector("#puzzle-grid");
    grid.innerHTML = "";
    const data = getImageData(puzzles[loaded_puzzle].id);
    current_colors.clear();
    const current_storage = loadStorage();
    let x = 0;
    let y = 0;
    
    for(let i = 0; i < data.length; i+=4) {
        const cell = document.createElement("button");
        cell.className = "grid-cell";
        cell.id = `cell-${x}-${y}`;
        cell.dataset.x = x;
        cell.dataset.y = y;
        let color = `rgba(${data[i]}, ${data[i + 1]}, ${data[i + 2]}, ${data[i + 3] / 255})`;
        current_colors.add(color);
        cell.dataset.c = color;
        grid.appendChild(cell);
        
        if(current_storage[convertCoordsToIndex(x,y)] == '0') {
            cell.addEventListener('pointerdown', () => {
                buttonClick(cell);
            });
            cell.addEventListener('pointerenter', () => {
                if(isHeldDown()) {
                    buttonClick(cell);
                }
            });
        } else {
            cell.style.backgroundColor = color;
            cell.style.color = color;
            cell.textContent = '0';
            cell.style.cursor = 'default';
        }
        x++;
        if(x > 15) {
            x = 0;
            y++;
        }
    }
    import('./public/js/ui.js').then(m => m.createColorList(current_storage));
}

export function getImageData(image_id) {
    const canvas = document.querySelector("#hidden-canvas");
    const ctx = canvas.getContext("2d", {willReadFrequently: true});
    const image = document.querySelector(`#${image_id}`);
    ctx.drawImage(image, 0, 0);
    return ctx.getImageData(0, 0, 16, 16).data;
}

export function convertCoordsToIndex(x, y) {
    return (y * 16) + x;
}

export function loadStorage() {
    let data = localStorage.getItem(`colorByNumbers_${puzzles[loaded_puzzle].id}`);
    if(!data) data = createStorage();
    return data;
}

export function setStorage(item) {
    localStorage.setItem(`colorByNumbers_${puzzles[loaded_puzzle].id}`, item);
}

export function createStorage() {
    const data = '0'.repeat(256);
    localStorage.setItem(`colorByNumbers_${puzzles[loaded_puzzle].id}`, data);
    return data;
}

export function modifyString(str, index, chr) {
    return str.substring(0, index) + chr + str.substring(index + 1);
}