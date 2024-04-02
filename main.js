import chat from "./layouts/chat.js"
import chatPlece from "./layouts/chatplece.js";
const mainContainer = document.querySelector("#mainContainer");
const serverURL = "http://localhost:8080/backend/php/search.php"
window.addEventListener("DOMContentLoaded", () => {
    function startChat() {
        mainContainer.innerHTML = chat();
        const formData = mainContainer.querySelector("#formData");
        const InputBox = mainContainer.querySelector("#InputBox");
        const sendButton = mainContainer.querySelector("#sendButton");
        formData.addEventListener("submit", (e) => {
            e.preventDefault();
        })
        sendButton.addEventListener("click", async () => {
            let form = new FormData(formData);
            let chatArea = mainContainer.querySelector("#chatArea");
            if (InputBox.value == "" || InputBox.value != null) {
                try {
                    let senQuestion = await fetch(serverURL, {
                        method: "POST",
                        body: form
                    });
                    if (senQuestion.ok) {
                        InputBox.value = "";
                        let response = await senQuestion.json();
                        chatArea.innerHTML += chatPlece(response);
                        chatArea.scrollBy({
                            top: chatArea.scrollHeight,
                            behavior: "smooth"
                        })
                    }
                    else {
                        console.log("erro" + senQuestion.statusText);
                    }
                } catch (error) {
                    console.log("Erro" + error);
                }
            }
        })
    }
    startChat();
})