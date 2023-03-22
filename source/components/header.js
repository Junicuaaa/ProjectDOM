export default{
    title: [{
        name: "Naruto Shippuden",
        src: "./images/Naruto_logo.png",
    }],
    aldeas: [
        {
            name: "Konohakure",
            href: "#",
        },
        {
            name: "Iwagakure",
            href: "#",
        },
        {
            name: "Kumogakure",
            href: "#",
        },
        {
            name: "Kirigakure",
            href: "#",
        },
        {
            name: "Sunagakure",
            href: "#",
        },
        {
            name: "Amegakure",
            href: "#",
        },
    ],
    titleList(){
        let plantilla = "";
        this.title.forEach(element => {
            plantilla += `<img class="img-responsive" src="${element.src}" alt="${element.name}" />`});
        document.querySelector("header").insertAdjacentHTML("beforeend", plantilla);
    },
    aldeasList(){
        let plantilla = "";
        this.aldeas.forEach(aldea => {
            plantilla += `<li class=""><a class="nav-link text-white" href="${aldea.href}">${aldea.name}</a></li>`;});
        document.querySelector("#navbList").insertAdjacentHTML("beforeend", plantilla)
    }
    
}
