import { changePage, createGrid, createStorage, puzzles, loaded_puzzle} from "./puzzles.js";
import { changePalette, createPuzzleList } from "./ui.js";

window.addEventListener('storage',(e)=>{
    const changed_puzzle = e.key.split('_')[1];
    if(changed_puzzle==puzzles[loaded_puzzle].id) {
        createGrid();
    }
});

changePalette(Number(localStorage.getItem('colorByNumbers_Palette')));

const dialog = document.querySelector('dialog');
const dialogBtn = document.querySelector('#close');
dialogBtn.addEventListener('click',()=>{
    dialog.close();
});
const settings = document.querySelector('#settings-button');
document.querySelector('#settings-image').draggable = false;
document.querySelector('#close-image').draggable = false;
settings.addEventListener('click',()=>{
    dialog.showModal();
});
const reset = document.querySelector('#reset-button');
reset.addEventListener('click',()=>{
    createStorage();
    createGrid();
})
const default_palette = document.querySelector('#default-palette');
const light_palette = document.querySelector('#light-palette');
const dark_palette = document.querySelector('#dark-palette');
default_palette.addEventListener('click',()=>{
    changePalette(0);
});
light_palette.addEventListener('click',()=> {
    changePalette(1);
});
dark_palette.addEventListener('click',()=>{
    changePalette(2);
});

window.onload = () => {
    changePage(Number(localStorage.getItem('colorByNumbers_Puzzle')) || 0);
    createPuzzleList();
}

window.addEventListener('keydown',(e)=>{
    let focus = document.activeElement;
    if(e.key=="ArrowRight") {
        if(focus.classList.value=='grid-cell') {
            if(Number(focus.dataset.x)<15){
                document.querySelector(`#cell-${Number(focus.dataset.x)+1}-${Number(focus.dataset.y)}`).focus();
            } else {
                document.querySelector('#settings-button').focus();
            }
        } else if(focus.id=='settings-button') {
            document.querySelector('#puzzle-list-0').focus();
        } else if(focus.id.includes('puzzle-list')) {
            document.querySelector('#cell-0-0').focus();
        } else if(focus.id.includes('color-selector')) {
            const index = Number(focus.dataset.index);
            if(index==2 || index==5 || index==8) {
                document.querySelector('#cell-0-0').focus();
            } else {
                const next_selector = document.querySelector(`#color-selector-${index+1}`);
                if(next_selector==null) {
                    document.querySelector('#cell-0-0').focus();
                } else {
                    next_selector.focus();
                }
            }
        }
    } else if(e.key=="ArrowLeft") {
        if(focus.classList.value=='grid-cell') {
            if(Number(focus.dataset.x)>0){
                document.querySelector(`#cell-${Number(focus.dataset.x)-1}-${Number(focus.dataset.y)}`).focus();
            } else {
                document.querySelector('#puzzle-list-0').focus();
            }
        } else if(focus.id=='settings-button') {
            document.querySelector('#cell-15-0').focus();
        } else if(focus.id.includes('puzzle-list')) {
            document.querySelector('#settings-button').focus();
        } else if(focus.id.includes('color-selector')) {
            const index = Number(focus.dataset.index);
            if(index==0 || index==3 || index==6) {
                document.querySelector('#settings-button').focus();
            } else {
                document.querySelector(`#color-selector-${index-1}`).focus();
            }
        }
    } else if(e.key=="ArrowDown") {
        if(focus.classList.value=='grid-cell') {
            if(Number(focus.dataset.y)<15){
                document.querySelector(`#cell-${Number(focus.dataset.x)}-${Number(focus.dataset.y)+1}`).focus();
            } else {
                document.querySelector(`#cell-${Number(focus.dataset.x)}-0`).focus();
            }
        } else if(focus.id=='settings-button') {
            document.querySelector('#cell-15-0').focus();
        } else if(focus.id.includes('puzzle-list')) {
            const next_puzzle = document.querySelector(`#puzzle-list-${Number(focus.dataset.index)+1}`);
            if(next_puzzle==null) {
                document.querySelector('#color-selector-0').focus();
            } else {
                next_puzzle.focus();
            }
        } else if(focus.id.includes('color-selector')) {
            const index = Number(focus.dataset.index);
            if(index==6 || index==7 || index==8) {
                document.querySelector('#puzzle-list-0').focus();
            } else {
                const next_selector = document.querySelector(`#color-selector-${index+3}`);
                if(next_selector==null) {
                    document.querySelector('#puzzle-list-0').focus();
                } else {
                    next_selector.focus();
                }
            }
        }
    } else if(e.key=="ArrowUp") {
        if(focus.classList.value=='grid-cell') {
            if(Number(focus.dataset.y)>0){
                document.querySelector(`#cell-${Number(focus.dataset.x)}-${Number(focus.dataset.y)-1}`).focus();
            } else {
                document.querySelector(`#cell-${Number(focus.dataset.x)}-15`).focus();
            }
        } else if(focus.id=='settings-button') {
            document.querySelector('#cell-15-15').focus();
        } else if(focus.id.includes('puzzle-list')) {
            const next_puzzle = document.querySelector(`#puzzle-list-${Number(focus.dataset.index)-1}`);
            if(next_puzzle==null) {
                document.querySelector('#color-selector-6').focus();
            } else {
                next_puzzle.focus();
            }
        } else if(focus.id.includes('color-selector')) {
            const index = Number(focus.dataset.index);
            if(index==0 || index==1 || index==2) {
                document.querySelector('#puzzle-list-5').focus();
            } else {
                const next_selector = document.querySelector(`#color-selector-${index-3}`);
                if(next_selector==null) {
                    document.querySelector('#puzzle-list-5').focus();
                } else {
                    next_selector.focus();
                }
            }
        }
    }
});