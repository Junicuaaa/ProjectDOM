import config from "../../config/config.js";
export default {
    FragShow() {
        config.headData();
        Object.assign(this, JSON.parse(localStorage.getItem("headD")));
        const ws = new Worker("services/wsHeader.js", { type: "module" });
        let id = [];
        let count = 0;
        ws.postMessage({ module: "titleList", data: this.title });
        ws.postMessage({ module: "aldeasList", data: this.aldeas });
        id = ['#header', '#navlist'];
        ws.addEventListener("message", (e) => {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length - 1 == count) ? ws.terminate() : count++;
        })
    }
}
