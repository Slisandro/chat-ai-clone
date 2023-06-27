import { Message } from "ai";
import MessageUser from "./message-user";
import MessageSystem from "./message.system";

export default function List({ messages }: { messages: Message[] }) {
    return (
        <>
            {messages.map(item =>
                item.role === "user" ? (
                    <MessageUser {...item} />
                ) : (
                    <MessageSystem {...item} />
                ))}
        </>
    )
}