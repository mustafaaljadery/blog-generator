import { NextRequest, NextResponse } from 'next/server';
const { Configuration, OpenAIApi } = require("openai");

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const json = await req.json()
  const openAIKey = json['openAIKey']
  const keywords = json['keywords']

  try {
    const configuration = new Configuration({
      apiKey: openAIKey
    });

    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      stream: false,
      messages: [
        {
          role: 'user',
          content: `Write an extremely SEO optimized blog post about the following keywords: ${keywords}. Make sure to include the keywords in the title, headings, and content. Make sure the article is no more than 1500 words. The output has to be in MARKDOWN.`
        }
      ],
      max_tokens: 3500,
      temperature: 0.9,
    })

    console.log(response.data.choices[0].message.content)

    return new NextResponse(response.data.choices[0].message.content
      , {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      }
    );
  } catch (e) {
    console.log(e)
    //@ts-ignore
    return Response.json()
  }
}