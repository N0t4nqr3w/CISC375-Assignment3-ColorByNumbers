let selectedColor = '';
let progress = 0;

export function setSelectedColor(color) {
    selectedColor = color;
}

export function getSelectedColor() {
    return selectedColor;
}

export function resetProgress() {
    progress = 0;
}

export function convertCoordsToIndex(x, y) {
    return (y * 16) + x;
}

export function handleCellClick({cellColor, x, y, storageData}) {
    const index = convertCoordsToIndex(x, y);
    if(storageData[index] === '0' && cellColor === selectedColor) {
        const newData = storageData.substring(0, index) + '1' + storageData.substring(index + 1);
        progress++;
        return {updated: true, newData};
    } 
    return {updated: false, newData: storageData};
}

export function getProgressPercent(){
    let percent = Math.round((progress / 256) * 100);
    if(progress < 256 && percent === 100) {
        percent = 99;
    }
    return percent;
}

export function isCompleted() {
    return progress >= 256;
}