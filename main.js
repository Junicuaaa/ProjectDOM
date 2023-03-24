import header from "./source/components/header.js";
import banner from "./source/components/banner.js";
import card from "./source/components/cards.js"
import modal from "./source/components/modal.js"
import aside from "./source/components/aside.js";

header.titleList();
header.aldeasList();
banner.importBanner();
card.mostrarCard();
header.InfoPagina();
window.addEventListener("load", (e)=>{
    modal.ShowModal();
    modal.closeModal();
    setTimeout(function() {
        let node = document.querySelector(".modal-alert");
        let padre = node.parentNode;
        padre.removeChild(node);;
    }, 15000);
}, {once: true})
aside.showNews();

