import {puzzles} from './main.js';
import { setSelectedColor } from './coloring';

export function initUI(loadPuzzle) {
    createPuzzleList(loadPuzzle);
    initSetting();
}

export function createPuzzleList(loadPuzzle) {
    const container = document.querySelector("#puzzle-list");
    container.innerHTML = "";

    puzzles.forEach
}