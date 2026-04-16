import { puzzles } from './main.js';
import { setSelectedColor } from './coloring';

export function userInterface(loadPuzzle) {
    createPuzzleList(loadPuzzle);
    initSetting();
}

export function createPuzzleList(loadPuzzle) {
    const container = document.querySelector("#puzzle-list");
    container.innerHTML = "";
    for(let i=0;i<puzzles.length;i++) {
        const p = puzzles[i];
        const btn = document.createElement("button");
        btn.textContent = p.name;
        btn.id = `puzzle-list-${i}`;
        btn.dataset.index = i;
        btn.addEventListener("click", () => {changePage(i);});
        container.appendChild(btn);
    }
}

export function settings() {
    const dialog = document.querySelector('dialog');
    document.querySelector('#settings-button').addEventListener('click', () => dialog.showModal());
    document.querySelector('#close').addEventListener('click', () => dialog.close());
    document.querySelector('#reset-button').addEventListener('click', () => location.reload());

}