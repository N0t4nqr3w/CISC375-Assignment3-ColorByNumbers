import { changePage } from "./puzzles.js";
import { changePalette, createPuzzleList } from "./ui.js";

changePalette(Number(localStorage.getItem('colorByNumbers_Palette')));

window.onload = () => {
    changePage(Number(localStorage.getItem('colorByNumbers_Puzzle')) || 0);
    createPuzzleList();
}