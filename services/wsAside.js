let wsAside = {
    showAside(p1) {
        const data = p1.map((val, id) => {
            return(
                (val.links) ? this.archive(val): this.cards(val)
            )
        });

        return data;
    },
    cards(p2) {
        return `
        <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">${p2.title}</h4>
            <p class="mb-0">${p2.text}</p>
        </div>
        `
    },

    archive(p2) {
        return `
        <div class="p-4">
        <ol class="list-unstyled mb-0">
            ${p2.links.map((val, id) => `<li><a target="_blank" href="${val.href}">${val.name}</a></li>`).join("")} 
        </ol>
    </div>
        `
    },
}

self.addEventListener("message", (e)=> {
    postMessage(wsAside.showAside(e.data.data))
})