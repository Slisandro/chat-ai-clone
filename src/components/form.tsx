import React from "react";

export default function Form(
    { handleSubmit, handleInputChange, input }
        : { handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void; 
            handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void; 
            input: string 
        }
) {
    return (
        <form className="w-full h-full flex gap-4 py-2" onSubmit={handleSubmit}>
            <input
                className="flex items-center h-10 w-[80%] rounded px-3 text-sm focus-visible:outline-0"
                type="text"
                placeholder="Type your message…"
                value={input}
                onChange={handleInputChange}
            />
            <button className="w-[20%] font-bold border-2 border-[rgb(18,38,67)] bg-[rgb(18,38,67)] text-white rounded-xl">Send</button>
        </form>
    )
}