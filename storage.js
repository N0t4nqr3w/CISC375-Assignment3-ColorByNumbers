function getId(puzzleId){
    return `colorByNumbers_${puzzleId}`;
}

export function loadStorage(puzzleId){
    let data = localStorage.getItem(getId(puzzleId));
    if(data === null) {
        data = createStorage(puzzleId);
    }
    return data;
}

export function setStorage(puzzleId){
    localStorage.setItem(getId(puzzleId), data);
}

export function createStorage(puzzleId){
    const data = '0'.repeat(256);
    loadStorage.setItem(getId(puzzleId), data);
    return data;
}

export function modifyString(str, index, newChr) {
    return str.substring(0, index) + newChr + str.substring(index + 1); 
}