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
        {
            title: "Primera emision de Boruto",
            description: "La primera emision de boruto fue en abril del 2017",
            img: {
                title: "Naruto Shippuden",
                url: "./images/img2.jpg"
            } 
        },
        {
            title: "Ultima emision de naruto Shipudden",
            description: "La ultima emision de naruto fue el 23 de marzo de 2017, finalizando con 500 capítulos",
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
                    <div class="card shadow-sm mb-3"style="max-width: 48%; min-width:48%;">
                        <div class="row">
                            <div class="text col-8 p-4">
                                <h5 class="text-primary">${element.title}</h5>
                                <p class="">${element.description}</p>
                            </div>
                            <div class="img-container col-4">
                                <img src="${element.img.url}" alt="${element.img.title}" class="w-100 h-100" style="object-fit: cover;">
                            </div>
                        </div>
                    </div>

            `
        });
        document.querySelector(".cards-container").insertAdjacentHTML("afterbegin", html)
    }

}

