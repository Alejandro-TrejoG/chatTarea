const numero = "7731853217"
// let messages = []

document.addEventListener("DOMContentLoaded", function () {
    setInterval(obtenerChat, 100)
    // renderizarChat(messages)
})

async function obtenerChat() {
    // const url = "http://192.168.43.36:80/servidor-chat/servicios.php"
    const url = "http://localhost/servidor-chat/servicios.php"
    fetch(url).then(async response => {
        try {
            const data = await response.json();
            // console.log(data);
            renderizarChat(data)

        } catch (error) {
            console.log(error)
        }
    })
}

const renderizarChat = (elements) => {
    // Evaluamos si existe content-chat, si existe lo eliminamos, esto se realiza ya que, de no hacerse
    // se crearia un loop infinito de chat
    const chat = document.querySelector(".chat")
    let contentChat = document.querySelector(".content-chat")
    if (contentChat) {
        chat.removeChild(contentChat)
    }

    contentChat = document.createElement("div")
    contentChat.classList.add("content-chat")
    chat.appendChild(contentChat)

    // Iteramos por cada elemento dentro del JSON de mensajes y creamos elemento del cada mensaje
    elements.forEach(element => {
        // let contentChat = document.querySelector(".content-chat")
        // if (contentChat) {
        //     chat.removeChild(contentChat)
        // }
        const { numero_emisor, numero_remitente, texto } = element
        // const contentChat = document.createElement("div")
        // contentChat.classList.add("content-chat")
        const contentMensaje = document.createElement("div")
        const mensaje = document.createElement('span')
        // const br = document.createElement("br")
        // numero_emisor === numero? mensaje.classList.add("message-span-em") : mensaje.classList.add("message-span-rem")
        if (numero_emisor === numero) {
            mensaje.classList.add("message-span-em")
            contentMensaje.classList.add("content-message-em")
        } else {
            mensaje.classList.add("message-span-rem")
            contentMensaje.classList.add("content-message-rem")
            mensaje.textContent += `${numero_remitente} - `
        }
        mensaje.textContent += texto
        contentMensaje.appendChild(mensaje)
        contentChat.appendChild(contentMensaje)
        // console.log(mensaje)
    })
}
