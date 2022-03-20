document.querySelectorAll('.carousel-item img').forEach(gambar=> {
    gambar.onclick = () => {

    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.popup .judul1').style.display = 'block';
    document.querySelector('.popup .capt1').style.display = 'block';
    }
});

document.querySelector('.popup span').onclick = () => {
    document.querySelector('.popup').style.display = 'none';
};