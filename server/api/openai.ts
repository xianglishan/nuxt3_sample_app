import { OpenAI } from "openai";
import { Role, Message } from "../../types/chat";

// https://stackoverflow.com/questions/75782864/how-can-i-send-stream-data-via-api-to-nuxt3-application
// OpenAIAPIからstreamを受け取って、ジェネレータをsendStream

async function chat(messages:{"user":boolean, "message":string}[]) {
    const config = useRuntimeConfig()
    const openai = new OpenAI({
        apiKey: config.openaiApiKey
    })

    // eventのbodyからメッセとか整理する
    let messagesToSend: Message[] = []
    for (let messageFromReq of messages) {
        if (messageFromReq.user) {
            messagesToSend.push({role:"user", content: messageFromReq.message}) 
        } else {
            messagesToSend.push({role:"assistant", content: messageFromReq.message}) 
        };
    }
    
    // awaitで会話する
    const res = await openai.chat.completions.create({
        messages: messagesToSend,
        model: 'gpt-3.5-turbo',
        // stream: true
    })
    return res.choices[0].message.content
}


export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const messages = body.messages
    const res = chat(messages) 
    return res
})