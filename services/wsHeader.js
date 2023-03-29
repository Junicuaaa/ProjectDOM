let wsMyheader = {
    titleList(p1) {
        let plantilla = "";
        p1.forEach(element => {
            plantilla += `<img class="img-responsive" src="${element.src}" alt="${element.name}" />`
        });
        return plantilla;
    },
    aldeasList(p1) {
        let plantilla = "";
        p1.forEach(aldea => {
            plantilla += `<li class=""><a class="nav-link text-white" href="${aldea.href}">${aldea.name}</a></li>`;
        });
        return plantilla
    }
}
self.addEventListener("message", (e) => {
    postMessage(wsMyheader[`${e.data.module}`])(e.data.data);
})