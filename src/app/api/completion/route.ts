import chatCompletion from '@/services/chat-completion';
import createStream from '@/services/stream';
import { StreamingText } from '@/services/streaming-text';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();
  if (messages) {
    return StreamingText(createStream(await chatCompletion(await req.json())));
  }
}