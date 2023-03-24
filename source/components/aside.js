export default{
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