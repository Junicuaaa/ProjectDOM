export default{
    imgTittle: "Konoha",
    src: "./images/konoha.jpg",
    tittle: "Naruto Shippuden Fanpage",
    description: `This is a Naruto Shippuden Fanpage 
    that contains information about the universe of this incredible anime that i love so much. Have a good time reading this, shinobi`,
    importBanner(){
        let banner = document.querySelector(".img-container");
        banner.style.backgroundImage = `url(${this.src})`;
        banner.style.backgroundSize = "cover";
        banner.style.backgroundRepeat = "no-repeat";
        let title = `
        <h1 class="text-white fs-3">${this.tittle}</h1>
        <hr>
        `
        let html = `
        <p class="text-white fs-5">${this.description}</p>
        `
        document.querySelector(".text-container").insertAdjacentHTML("afterbegin", title)
        document.querySelector(".description").insertAdjacentHTML("beforeend", html)
    }
}