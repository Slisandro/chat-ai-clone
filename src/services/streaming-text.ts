import {StreamingTextResponse} from 'ai';

export const StreamingText = (res: ReadableStream<any>) => new StreamingTextResponse(res);