


export const puzzles = [
    {name: "Canvas", id: "Canvas"},
    {name: "Blossoms", id: "Blossoms"},
    {name: "Sunset", id: "Sunset"},
    {name: "Knight", id: "Knight"},
    {name: "Train", id: "Train"},
    {name: "Island", id: "Island"}
];

let currentPuzzleIndex = 0;

export function loadPuzzle(index){
    currentPuzzleIndex = index;
    localStorage.setItem('colorByNumber_Puzzle', index);

    resetProgress();

    const puzzle = puzzles[index];
    const storageData = loadStorage(puzzle.id);

    createGrid(puzzle, storageData);
}

export function getCurrentPuzzle() {
    return puzzles[currentPuzzleIndex];
}

window.onload = () => {
    const saved = Number(localStorage.getItem('colorByNumber_Puzzle')) || 0;

    initUI(loadPuzzle);
    loadPuzzle(saved);
}