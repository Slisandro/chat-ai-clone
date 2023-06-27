import { formatDateMessage } from "@/utils/format-date";
import { Message } from "ai";

export default function MessageSystem({ role = "system", content, id, createdAt }: Message) {
    return (
        <div
            key={id}
            className={
                role === "user" ?
                    "flex w-full mt-4 mx-4 space-x-3 max-w-[90%] ml-auto flex-row-reverse gap-2" :
                    "flex w-full mt-4 mx-4 space-x-3 max-w-[90%] mr-auto"
            }
        >
            <img
                className="flex-shrink-0 h-[3rem] w-[3rem] rounded-full bg-gray-300 p-1"
                src={
                    role === "user" ?
                        "https://static.thenounproject.com/png/629576-200.png" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkTvGel82iTlAfapvM809PuaL7_SnWmXK0Xir7vUEDYA&s"
                }
            />
            <div className={`pt-4 w-[max-content] max-w-[90%] ${role === "user" ? "" : ""}`}>
                <div
                    className={
                        role === "user" ?
                            "bg-gray-300 p-3 w-[max-content] max-w-[100%] rounded-l-lg ml-auto py-4 rounded-br-lg"
                            : "bg-gray-400 p-3 w-[max-content] max-w-[100%] rounded-r-lg py-4 rounded-bl-lg"
                    }
                >
                    <p className="text-sm w-full justify">
                        {content}
                    </p>
                </div>
                <span className={`text-xs block mt-1 text-gray-500 leading-none w-full text-sm text-start`}>
                    {formatDateMessage(createdAt)}
                </span>
            </div>
        </div>
    )
}