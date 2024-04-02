function chat(parm){

    return (`
      <section class="chatBox">
            <div class="topChat">
              <h2>ChatBot</h2>
              <i class="bi bi-robot"></i>
            </div>
            <section id="chatArea" class="chatPlace">
            </section>
            <form class="formData" id="formData" method="POST">
              <input name="pergunta" id="InputBox"
                  placeholder="Pergunte alguma coisa...">
            </input>
              <button type="submit" id="sendButton">
              <i class="bi bi-telegram"></i>
              </button>
            </form>
      </section>
    `);
}
export default chat;
