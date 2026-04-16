import {puzzles, loaded_puzzle, current_colors, selected_color, setSelectedColor, convertCoordsToIndex, loadStorage, setStorage, modifyString, changePage} from './puzzles.js';

let held_down = false;
let progress = 0;
document.addEventListener('pointerdown', () => held_down = true);
document.addEventListener('pointerup', () => held_down = false);

export function isHeldDown() {
    return held_down;
}

export function setTitle(name) {
    document.querySelector("#title").textContent = name;
}

export function buttonClick(button) {
    let data = loadStorage();
    const index = convertCoordsToIndex(Number(button.dataset.x), Number(button.dataset.y));

    if(data[index] === '0' && button.dataset.c === selected_color) {
        button.style.backgroundColor = button.dataset.c;
        button.style.color = button.dataset.c;
        data = modifyString(data, index, "1");
        setStorage(data);
        updateProgress();
        button.style.cursor = "default";
    }
}

export function switchColor(button) {
    document.querySelectorAll("#color-selector button").forEach(b => b.classList.remove("selected"));
    button.classList.add("selected");
    setSelectedColor(button.dataset.c);
}

export function updateProgress() {
    progress++;
    let percent = Math.round((progress / 256) * 100);
    if(progress<256 && percent==100) {
        percent = 99;
    }
    setTitle(`${puzzles[loaded_puzzle].name} - ${percent}%`);
    if(progress >= 256) {
        const cell = document.querySelectorAll('.grid-cell');
        for(let i=0;i<cells.length;i++) {
            cells[i].style.borderColor = 'transparent';
        }
    }
}

export function getContrastColor(rgba) {
    let parts = rgba.substring(5, rgba.length - 1).split(",");
    let brightness = Math.sqrt((parts[0] ** 2 * 0.241) + (parts[1] ** 2 * 0.691) + (parts[2] ** 2 * 0.068));
    if(brightness > 130) {
        return 'rgba(0, 0, 0, 1)';
    } else {
        return 'rgba(255, 255, 255, 1)';
    }
}

export function createColorList(storage) {
    const colors = [...current_colors];

    for(let y = 0; y < 16; y++) {
        for(let x = 0; x < 16; x++) {
            const cell = document.querySelector(`#cell-${x}-${y}`);
            if(storage[convertCoordsToIndex(x, y)] === '0') {
                cell.textContent = colors.indexOf(cell.dataset.c) + 1;
            }
        }
    }
    const container = document.querySelector("#color-selector");
    container.innerHTML = "";
    colors.forEach((c, i) => {
        const btn = document.createElement("button");
        btn.textContent = i + 1;
        btn.dataset.c = c;
        btn.dataset.index = i;
        btn.style.backgroundColor = c;
        btn.style.color = getContrastColor(c);
        btn.addEventListener("click", () => switchColor(btn));
        container.appendChild(btn);
    })
}

export function changePalette(index) {
    localStorage.setItem('colorByNumbers_Palette', index);
    const s = document.documentElement.style;

    if(index == 0) {
        s.setProperty('--font-color', '#ffffff');
        s.setProperty('--main-bg-color', '#363d66');
        s.setProperty('--second-bg-color', '#040c40');
        s.setProperty('--border-color', '#1d2453');
    } else if (index == 1) {
        s.setProperty('--font-color', '#000000');
        s.setProperty('--main-bg-color', '#ffffff');
        s.setProperty('--second-bg-color', '#c8c8c8');
        s.setProperty('--border-color', '#969696');
    } else {
        s.setProperty('--font-color', '#ffffff');
        s.setProperty('--main-bg-color', '#2b2b2b');
        s.setProperty('--second-bg-color', '#181C14');
        s.setProperty('--border-color', '#000000');
    }
}

export function createPuzzleList() {
        const container = document.querySelector("#puzzle-list");
        container.innerHTML = "";

        for(let i = 0; i < puzzles.length; i++) {
            const p = puzzles[i];
            const btn = document.createElement("button");
            btn.textContent = p.name;
            btn.id = `puzzle-list-${i}`;
            btn.dataset.index = i;
            btn.addEventListener("click", () => {
                changePage(i)
            });
            container.appendChild(btn);
        }
}
