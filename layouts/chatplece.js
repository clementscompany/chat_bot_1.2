function chatPlece(props){
    console.log(props);
    let CardResponses = "";
    if (props.chatBot.error) {
        CardResponses += `
        <div class="caedMessage outgoing">
        <span>${ props.chatBot.pergunta }</span>
        </div>
        <div class="caedMessage incamming">
            <span class="error">${ props.chatBot.error }</span>
        </div>
        `;
    }
    else{
        CardResponses += `
        <div class="caedMessage outgoing">
        <span>${ props.chatBot.pergunta }</span>
        </div>

        <div class="caedMessage incamming">
            <span>${ props.chatBot.response }</span>
        </div>
        `;
    }
    return (`
        <div>
            ${ CardResponses }
        </div>
    `);
}
export default chatPlece;