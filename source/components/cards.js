export default {
    cards: [
        {
            title: "Last emition of Naruto",
            description: "The last emition of Naruto was on March 23 of 2017",
            img: {
                title: "Naruto Shippuden",
                url: "./images/img1.png"
            }
        },
        {
            title: "First emition of Boruto",
            description: "The first emition of Boruto was on April of 2017",
            img: {
                title: "Naruto Shippuden",
                url: "./images/img2.jpg"
            } 
        },
        {
            title: "Last emition of Naruto",
            description: "The last emition of Naruto was on March 23 of 2017",
            img: {
                title: "Naruto Shippuden",
                url: "./images/img1.png"
            }
        }
    ],
    mostrarCard() {
        let html = "";
        this.cards.forEach(element => {
            html += `
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
        document.querySelector(".cards-container").insertAdjacentHTML("beforeend", html)
    }

}

