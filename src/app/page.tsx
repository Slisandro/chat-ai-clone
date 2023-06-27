'use client'
import AppBar from "@/components/app-bar";
import List from "@/components/list";
import PopUp from "@/components/pop-up";
import useChatScroll from "@/hooks/chat-scroll";
import { useChat } from 'ai/react';
import { useEffect, useState } from "react";
import FFFlux from "../../public/ffflux.svg";
import Form from "../components/form";
import initialMessages from "../constants/initial-messages";

export default function Chat() {
  const [error, setError] = useState<boolean>(false);
  const {
    messages,
    input,
    isLoading,
    handleInputChange,
    handleSubmit,
    setMessages,

  } = useChat({
    api: '/api/completion',
    onError: () => setError(true),
  });

  const refChat = useChatScroll(messages);

  useEffect(() => {
    return setMessages(initialMessages);
  }, []);

  return (
    <main
      className="flex bg-animation bg-no-repeat bg-cover flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10 overflow-hidden"
      style={{ backgroundImage: `url(${FFFlux.src})` }}
    >
      <PopUp message={"Ocurrió un error"} type={"error"} handleClose={() => setError(false)} open={error} />
      <div
        className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden"
        style={{
          WebkitBoxShadow: "5px 5px 25px 2px rgba(71,71,71,.7)",
          MozBoxShadow: "5px 5px 25px 2px rgba(71,71,71,.7)",
          boxShadow: "5px 5px 25px 2px rgba(71,71,71,.7)",
        }}
      >
        <div
          ref={refChat}
          id="chat"
          className="overflow-auto flex flex-col relative flex-grow h-0 overflow-auto bg-[rgba(18,38,67,.1)] pb-4"
        >
          <AppBar />
          <List messages={messages} />
          {isLoading && <span className="absolute bottom-[.5rem] ml-4 font-light text-sm">Writing...</span>}
        </div>
        <div className="p-4 sticky bottom-0">
          <Form
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            input={input}
          />
        </div>
      </div>
    </main>
  )
}