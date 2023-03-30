import config from "../../config/config.js"
export default {
    news: [{
        title: "News!",
        info: "something"
    }],
    showNews() {
        let html = "";
        this.news.forEach(element => {
            html += `
                <h1>${element.title}</h1>
                <p>${element.info}</p>
            `;
        });
        document.querySelector(".about").insertAdjacentHTML("beforeend", html);
    },
    showAside(){
        config.asideData();
        Object.assign(this, JSON.parse(localStorage.getItem("asideD")));
        const ws = new Worker("services/wsAside.js", {type: "module"});
        ws.postMessage({data: this.info})
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#links").append(...doc.body.children);
        })
    }
};