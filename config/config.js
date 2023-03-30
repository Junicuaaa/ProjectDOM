export default {
    headData(){
        localStorage.setItem("headD", JSON.stringify({
            title: [{
                name: "Naruto Shippuden",
                src: "images/Naruto_logo.png",
            }],
            aldeas: [
                {
                    name: "Konohagakure",
                    href: "#Konohagakure",
                    info: `Konohagakure (木ノ葉隠れの里, Konohagakure no Sato, literalmente significa "Aldea Oculta Entre las Hojas", 
                    también conocida como "Aldea Oculta en las Hojas" o "Aldea Oculta de la Hoja") es la aldea oculta del País del Fuego. 
                    Como una de las Cinco Grandes Aldeas Ninja, Konoha tiene un Kage cómo líder conocido como el Hokage. En total, Konoha, 
                    ha tenido siete Hokages, siendo Naruto Uzumaki el actual. En una montaña que domina el pueblo desde el norte se eleva 
                    la Roca Hokage. A pesar de que Konoha, al igual que el país en el que reside, ha sido relativamente pacífica desde el 
                    final de la Cuarta Gran Guerra Mundial Shinobi, sigue siendo uno de los pueblos más poderosos que existen, teniendo un gran 
                    poder militar e influencia, aunque esto había disminuido hace unos años por los ataques de Orochimaru y Pain.`,
                    img: {
                        link: `images/img3.jpg`,
                        title: `Kohogakure img`
                    }
                },
                {
                    name: "Iwagakure",
                    href: "#Iwagakure",
                    info: `Iwagakure (岩隠れの里, Iwagakure no Sato, literalmente significa "Aldea Oculta entre las Rocas") es un aldea ninja 
                    que se encuentra en el País de la Tierra. Como es una de las Cinco Grandes Aldeas Shinobis tiene un Kage, que es el líder 
                    del pueblo conocido con el título de Tsuchikage, actualmente ha habido cuatro, siendo la más reciente Kurotsuchi. Los ninjas 
                    de esta aldea se especializan en el uso de técnicas que utilizan la naturaleza tipo Tierra. Además, se sabe que esta aldea ha 
                    tenido en su posesión dos bestias con colas: el Cuatro Colas y al Cinco Colas.`,
                    img: {
                        link: `images/img4.jpg`,
                        title: `Iwagakure img`
                    }
                },
                {
                    name: "Kumogakure",
                    href: "#Kumogakure",
                    info: `Kumogakure (雲隠れの里, Kumogakure no Sato; literalmente "Aldea Oculta de las Nubes") es la Aldea Oculta del País del 
                    Rayo. Como una de las Cinco Grandes Aldeas Shinobi, Kumogakure posee su propio Kage, un líder conocido como el Raikage. 
                    Cinco ninjas han estado en el puesto, el más reciente es Darui. El uso de técnicas de Elemento Rayo y del Kenjutsu parecen 
                    ser comunes en los ninjas de la aldea. Fue la única de las Cinco Grandes Aldeas que nunca tuvo un prófugo en Akatsuki, algo 
                    de lo que el Cuarto Raikage se enorgullecía.
                    `,
                    img: {
                        link: `images/img5.jpg`,
                        title: `Kumogakure img`
                    }
                },
                {
                    name: "Kirigakure",
                    href: "#Kirigakure",
                    info: `Kirigakure (霧隠れの里, Kirigakure no sato, que significa literalmente "Aldea Oculta de la Niebla"), también conocida 
                    como la Aldea de la Niebla Sangrienta (血霧の里, Chigiri no Sato) es una aldea ninja que se encuentra en el País del Agua. 
                    Al ser una de las grandes aldeas shinobi, tiene un Kage, que es el líder de la aldea conocido con el titulo de Mizukage, 
                    hasta ahora han sido seis, el más reciente es Chōjūrō. Los shinobis de esta aldea son muy hábiles en el uso de técnicas de Elemento Agua.`,
                    img: {
                        link: `./images/img6.jpg`,
                        title: `Kirigakure img`
                    }
                },
                {
                    name: "Sunagakure",
                    href: "#Sunagakure",
                    info: `Sunagakure (砂隠れの里, Sunagakure no Sato, significa literalmente "Aldea Oculta de la Arena") es una 
                    aldea ninja en el País del Viento. Al ser una de las Cinco Grandes Aldeas Ninjas, dicho pueblo tiene un Kage 
                    como su líder conocido como el Kazekage, el cual vive en una estructura esférica en el centro del pueblo. 
                    Hasta ahora ha habido cinco Kazekages, Gaara es de estos el más reciente.`,
                    img: {
                        link: `images/img7.jpg`,
                        title: `Sunagakure img`
                    }
                }
            ]
        }))
    },
    asideData(){
        localStorage.setItem("asideD", JSON.stringify({
            info:[
                {
                    title:"Info",
                    links:[
                        {
                            name: "Something",
                            href:"#"
                        },
                        {
                            name: "Something",
                            href:"#"
                        },
                        {
                            name: "Something",
                            href:"#"
                        },
                        {
                            name: "Something",
                            href:"#"
                        },
                        {
                            name: "Something",
                            href:"#"
                        },
                        {
                            name: "Something",
                            href:"#"
                        },
                        {
                            name: "Something",
                            href:"#"
                        },
                        {
                            name: "Something",
                            href:"#"
                        },
                        {
                            name: "Something",
                            href:"#"
                        },
                    ],
                },
            ]        
        }))
    },
    cardsData(){
        localStorage.setItem("cardD", JSON.stringify({
            cards: [
                {
                    title: "Last emition of Naruto",
                    description: "The last emition of Naruto was on March 23 of 2017",
                    img: {
                        title: "Naruto Shippuden",
                        url: "images/img1.png"
                    }
                },
                {
                    title: "First emition of Boruto",
                    description: "The first emition of Boruto was on April of 2017",
                    img: {
                        title: "Naruto Shippuden",
                        url: "images/img2.jpg"
                    } 
                },
                {
                    title: "Last emition of Naruto",
                    description: "The last emition of Naruto was on March 23 of 2017",
                    img: {
                        title: "Naruto Shippuden",
                        url: "images/img1.png"
                    }
                }
            ]
        }))
    },
}