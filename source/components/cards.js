import config from "../../config/config.js";
export default {
    MostrarCard(){
        config.cardsData();
        Object.assign(this, JSON.parse(localStorage.getItem("cardD")));
        const ws = new Worker("services/wsCards.js", {type: "module"});
        ws.postMessage({data: this.cards});
        ws.addEventListener("message", (e) =>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(".cards-container").append(...doc.body.children);
            ws.terminate()
        })
    }

}
