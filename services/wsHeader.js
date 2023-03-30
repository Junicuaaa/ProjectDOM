let wsHeader = {
    titleList(p1){
        let plantilla = "";
        p1.forEach(element => {
            plantilla += `<img class="img-responsive" src="${element.src}" alt="${element.name}" />`
        });
        return plantilla;
    },
    aldeasList(p1){
        let plantilla = "";
        p1.forEach(aldea => {
            plantilla += `<li class=""><a class="nav-link text-white" href="${aldea.href}">${aldea.name}</a></li>`;
        });
        return plantilla
    },
    infoList(p1){
        let plantilla = "";
        p1.forEach(element => {
            plantilla += `
            <h3>${element.name}</h3>
            <p>${element.info}</p>
            <img src="${element.img.link}" class="img-fluid" alt="${element.img.titleList}"></img>
            `
        });
        return plantilla
    }
}
self.addEventListener("message", (e)=> {
    postMessage(wsHeader[`${e.data.module}`](e.data.data))
})