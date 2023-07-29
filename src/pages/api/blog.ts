import type { NextApiRequest, NextApiResponse } from 'next'
const { Configuration, OpenAIApi } = require("openai");

type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const openAIKey = JSON.parse(req.body)['openAIKey']
  const keywords = JSON.parse(req.body)['keywords']


  const configuration = new Configuration({
    apiKey: openAIKey
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: false,
    // a precise prompt is important for the AI to reply with the correct tokens
    messages: [
      {
        role: 'user',
        content: `Write an extremely SEO optimized blog post about the following keywords: ${keywords}. Make sure to include the keywords in the title, headings, and content. Make sure the article is no more than 400 words. The output has to be in MARKDOWN.`
      }
    ],
    max_tokens: 500,
    temperature: 0.9, // you want absolute certainty for spell check
  })

  if (response.status != 200) {
    res.status(500).json({ name: 'Error' })
  }

  res.status(200).json(response.data.choices[0].message.content)
}