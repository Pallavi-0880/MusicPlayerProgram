let clickBefore = document.querySelector("#clickBefore");
// console.log(click);
let clickAfter = document.querySelector("#clickAfter");
let audioClick = document.querySelector("#clickPlay")
let audio = document.querySelector(".myAudio");
let images = document.querySelector(".images1");
let volume = document.querySelector("#myRange");

let i = 0;
const imagesrcContainer = [
    "Images/download saiyyan.jpg",
    "Images/senerita.jpg",
    "Images/mann jogiya.jpg",
    "Images/download let me.jpg",

]
const audiosrcContainer = [
    "Audios/Saiyyan 7 (1).mp3",
    "Audios/Senorita-Shawn-Mendes(PaglaSongs).mp3",
    "Audios/_Mann Jogiya(PagalWorld.com.pe).mp3",
    "Audios/Let-Me-Down-Slowly(PaglaSongs).mp3",

]
clickAfter.addEventListener("click", () => {
    i++;
    if (i > 3) i = 0;
    console.log(i);
    audio.setAttribute("src", audiosrcContainer[i]);
    images.setAttribute("src", imagesrcContainer[i]);
    audio.play();

})


clickBefore.addEventListener("click", () => {
    i--;
    if (i < 0) i = 3;
    audio.setAttribute("src", audiosrcContainer[i]);
    images.setAttribute("src", imagesrcContainer[i]);
    audio.play();

})
let clicked = false;
audioClick.addEventListener("click", () => {
    if (!clicked) {

        audio.play();
        clicked = true;
    }
    else {
        audio.pause();
        clicked = false;
    }
})

const audioVolume = (e) => {
    audio.volume = e.target.value;
}
volume.addEventListener("input", audioVolume);

let slider = document.querySelector("#rangeVolume")
console.log(audio.duration);
console.log(audio.currentTime);

slider.addEventListener("change", () => {
    audio.currentTime = slider.value  / 100 * audio.duration;
})
setInterval(() => {
    slider.value = audio.currentTime * 100 / audio.duration;
}, 1000)


