export function getImageData(imageId) {
    const canvas = document.querySelector("#hidden-canvas");
    const ctx = canvas.getContext("2d", {willReadFrequently: true});
    const image = document.querySelector(`#${imageId}`);
    ctx.drawImage(image, 0, 0);
    return ctx.getImageData(0, 0, 16, 16).data;
}