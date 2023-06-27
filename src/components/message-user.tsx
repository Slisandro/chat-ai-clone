import { formatDateMessage } from "@/utils/format-date";
import { Message } from "ai";

export default function MessageUser({ role = "user", content, id, createdAt }: Message) {
    // const { role, content, id, createdAt } = message;
    return (
        <div
            key={id}
            className={"flex w-full mt-4 mx-4 space-x-3 max-w-[90%] ml-auto flex-row-reverse gap-2"}
        >
            <img
                className="flex-shrink-0 h-[3rem] w-[3rem] rounded-full bg-gray-300 p-1"
                src={"https://static.thenounproject.com/png/629576-200.png"}
            />
            <div className={`pt-4 w-[max-content] max-w-[90%]`}>
                <div className={"bg-gray-300 p-3 w-[max-content] max-w-[100%] rounded-l-lg ml-auto py-4 rounded-br-lg"}>
                    <p className="text-sm w-full justify">{content}</p>
                </div>
                <span className={`text-xs block mt-1 text-gray-500 leading-none w-full text-sm text-end`}>
                    {formatDateMessage(createdAt)}
                </span>
            </div>
        </div>
    )
}