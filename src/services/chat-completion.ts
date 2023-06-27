import { OpenAIApi } from "openai-edge";
import { Message } from "ai";
import OpenAIConfig from "./open-ai";

const openai = new OpenAIApi(OpenAIConfig);

function chatCompletion(messages: Message[]) {
    return openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages,
    });
};

export default chatCompletion;