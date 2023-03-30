let wsCard = {
    showcards(p1){
        let plantilla = "";
        p1.forEach(element => {
            plantilla +=`
            <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-3 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${element.title}</strong>
                <h3 class="mb-0">Featured post</h3>
                <p class="card-text">${element.description}</p>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img src="${element.img.url}" alt="${element.img.title}" width="200px" height="250px" style="object-fit: cover;"></img>
              </div>
            </div>
          </div>
            `
        });
        return plantilla
    }
}
self.addEventListener("message", (e)=>{
    postMessage(wsCard.showcards(e.data.data))
})