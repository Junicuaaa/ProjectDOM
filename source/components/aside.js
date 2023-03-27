export default{
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
            ]
        },
    ],

    showAside(){
        const data = this.info.map((val,id)=>{
            return (
                (val.links)
                ? this.archive(val)
                : this.cards(val)
            )
        });
        document.querySelector("#links").insertAdjacentHTML("beforeend",data.join(""));

    },

    cards(element){
        return `
        <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">${element.title}</h4>
            <p class="mb-0">${element.text}</p>
        </div>
        `
    },

    archive (element){
        return `
        <div class="p-4">
        <h4 class="fst-italic">${element.title}</h4>
        <ol class="list-unstyled mb-0">
            ${element.links.map((val,id) => `<li><a target="_blank" href="${val.href}">${val.name}</a></li>`).join("")} 
        </ol>
    </div>
        `
    },
    
    
    news: [{
        title: "News!",
        info: "something"
    }],
    showNews(){
        let html = "";
        this.news.forEach(element => {
            html += `
                <h1>${element.title}</h1>
                <p>${element.info}</p>
            `;
        });
        document.querySelector(".about").insertAdjacentHTML("beforeend", html);
    }
};