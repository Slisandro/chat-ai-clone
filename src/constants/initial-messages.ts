import { Message } from 'ai'
const messages
    : Message[]
    = [
        {
            id: "1",
            role: "system",
            content: "Bienvenido a Chat AI. Soy un modelo de lenguaje basado en inteligencia artificial.",
            createdAt: new Date()
        },
        {
            id: "2",
            role: "system",
            content: "Puedes hacerme cualquier pregunta, plantear tus inquietudes o simplemente entablar una conversación",
            createdAt: new Date()
        },
    ]

export default messages;