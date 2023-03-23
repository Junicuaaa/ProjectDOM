export default {
    modal: [{
        title: "Welcome to our Page!",
        description: "Thank you for visiting our website! Have a good day.",
        btn: {
            title: "Close",
            property: "button-close",
        }
    }],
    ShowModal() {
        let html = "";
        this.modal.forEach(element => {
            html += `
            <div class="modal-header">
                <div class="modal-title">
                    <h2>${element.title}</h2>
                </div>
            </div>
            <div class="modal-body">
                <p>${element.description}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="button-close btn btn-light">${element.btn.title}</button>
            </div>
            `
        });
        document.querySelector(".modal-window").innerHTML = html;
    },
    closeModal(){
        let button = document.querySelector(".button-close")
        let modal = document.querySelector(".modal-window")
        let blur = document.querySelector(".modal-alert")
        button.addEventListener("click", (e)=>{
            modal.classList.toggle("modal-window-close")
            blur.classList.toggle("modal-alert-close")
            console.log(e.target);
        })
    }
}