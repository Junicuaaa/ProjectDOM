export default {
    cards: [
        {
            title: "Ultima emision de naruto Shipudden",
            description: "La ultima emision de naruto fue el 23 de marzo de 2017, finalizando con 500 capítulos",
            img: {
                title: "Naruto Shippuden",
                url: "./images/img1.png"
            }
        },
    ],
    mostrarCard() {
        let html = "";
        this.cards.forEach(element => {
            html += `
               
                    <div class="card p-3 "style="max-width: 48%; min-width:48%;">
                        <div class="row">
                            <div class="text col-8">
                                <h5 class="text-primary">${element.title}</h5>
                                <p class="">${element.description}</p>
                            </div>
                            <div class="img-container col-4">
                                <img src="${element.img.url}" alt="${element.img.title}" class="img-fluid h-100" style="object-fit: cover;">
                            </div>
                        </div>
                    </div>

            `
        });
        document.querySelector(".cards-container").insertAdjacentHTML("afterbegin", html)
    }

}

