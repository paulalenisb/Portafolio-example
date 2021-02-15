
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        })
    })


}

navSlide();

const Api = {
    base: 'https://api.unsplash.com/search/photos/',
    key: 'gFrhv3JykE3d9MbfXPrVNI5C2VeJ_nWiw3Ch2YqT7Tg'
}

const photoArr = (data) => {
    let photos = [];
    for ( let i = 0; i < data.results.length; i++ ){
        photos[i] = document.createElement('div');
        photos[i].className = 'img'
        photos[i].style.backgroundImage = "url("+data.results[i].urls.regular+")";
        document.getElementById('grid').insertAdjacentElement('beforeend', photos[i])
    }
}

const loadImg = () => {

    fetch(`${Api.base}?query='food'&perpage=10&client_id=${Api.key}`)
    .then(res => {
        if(res.ok) return res.json()
        else console.log(res.status);
    })
    .then(data => {
        console.log(data);
        photoArr(data)
    })
        

}

window.onload = loadImg()
console.log(loadImg());

    // console.log(photo)
    // // const photoData = data

    // const gridPhoto = (photo) => {

    //     let photoCard = [];
    //     for ( let i = 0; i > photo.length; i++) {
    //         photoCard += `
    //         <img class ="image_pokemon" src="${photo[i].urls.regular}" alt="pokemon-image">
    //         `
    //     }

    //     document.getElementById('unsplash').innerHTML = photoCard

    //     console.log(photo);
    // }

    // gridPhoto(photo)
    // console.log( gridPhoto(photo));