const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const memeImg = document.getElementById('MEME-IMAGE');

inputText.addEventListener('input', () => {
    memeText.innerText = inputText.value;
});

function loadImg() {
    memeImg.src = URL.createObjectURL(memeInsert.files[0]);
}
memeInsert.addEventListener('change', loadImg);
