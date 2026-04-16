import { getImageData } from './image.js'
import { handleCellClick, getProgressPercent, isCompleted } from './coloring.js'
import { setStorage } from './storage.js'
import { getCurrentPuzzle } from './main.js'

function setTitle(text) {
    document.querySelector('#title').textContent = text;
}

export function createGrid(puzzle, storageData) {
    const grid = document.querySelector("#puzzle-grid");
    grid.innerHTML;
    const data = getImageData(puzzle.id);
    let x = 0;
    let y = 0;
}