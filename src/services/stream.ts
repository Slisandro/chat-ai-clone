import { OpenAIStream } from "ai";

function Stream(response: Response) {
    return OpenAIStream(response);
}

export default Stream;