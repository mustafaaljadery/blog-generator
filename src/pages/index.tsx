import { useState } from 'react';
import Link from 'next/link';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

async function handleSubmit(openAIKey: string, keywords: string) {
  const response = await fetch('/api/blog', {
    method: 'POST',
    body: JSON.stringify({
      openAIKey: openAIKey,
      keywords: keywords,
    }),
  });

  const data = await response.json();
  console.log('data', data);
  return data;
}

export default function Home() {
  const [keywords, setKeywords] = useState<string>('');
  const [openAIKey, setOpenAIKey] = useState<string>('');
  const [creatingArticle, setCreatingArticle] = useState(false);
  const [article, setArticle] = useState<any>(null);

  return (
    <div className="flex w-full flex-col justify-center items-center">
      <header className="w-[95%] md:w-3/4 xl:w-3/5 mt-6 flex flex-row justify-between items-between">
        <div className="flex flex-col space-y-2">
          <p className="text-2xl md:text-3xl font-bold text-[#363636]">
            SEO Optimized Articles
          </p>
          <span className="text-xs md:text-sm font-regular text-gray-500">
            Create SEO optimized articles using AI
          </span>
        </div>
        <div className="flex flex-row space-x-1.5 my-auto">
          <Link href="/">
            <button className="font-medium text-sm rounded bg-gray-50 hover:bg-gray-100 px-4 py-1">
              Generate
            </button>
          </Link>
          <Link href="/guide">
            <button className="font-medium text-sm rounded bg-gray-50 hover:bg-gray-100 px-4 py-1">
              Guide
            </button>
          </Link>
        </div>
      </header>
      <main className="w-[95%] md:w-3/4 xl:w-3/5 flex flex-col mt-12 pb-24">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCreatingArticle(true);
            handleSubmit(openAIKey, keywords).then((data) => {
              setArticle(data);
              setCreatingArticle(false);
            });
          }}
        >
          <div className="flex flex-col space-y-2">
            <span className="text-base my-auto font-medium text-gray-900">
              OpenAI Key
            </span>
            <input
              className="focus:ring-0 px-3 py-1.5 border rounded w-full md:w-1/2"
              required
              value={openAIKey}
              onChange={(e) => {
                setOpenAIKey(e.target.value);
              }}
              placeholder="Your OpenAI Key..."
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-2 mt-6">
            <span className="text-base font-medium text-gray-900">
              Keywords
            </span>
            <input
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="focus:ring-0 px-3 py-1.5 border rounded w-full md:w-1/2"
              placeholder="Blog keywords..."
              type="text"
              required
            />
          </div>
          <button
            type="submit"
            disabled={creatingArticle}
            className="mt-8 w-fit px-4 py-1.5 text-white rounded hover:opacity-90 bg-[#FF623D] text-sm font-medium"
          >
            Write Article
          </button>
        </form>
        <div className="mt-16 flex flex-col space-y-3">
          <p className="text-lg font-medium">Written Article</p>
          {creatingArticle ? (
            <div className="py-24 border rounded-lg border-dashed w-full flex flex-col justify-center items-center space-y-2.5">
              <div className="flex flex-row space-x-2.5">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-spin my-auto"
                >
                  <g clipPath="url(#clip0_1405_2)">
                    <path
                      d="M4.84457 21.6005C4.13345 21.0227 3.95568 20.0005 4.53345 19.2449C5.11123 18.5338 6.13345 18.3116 6.88901 18.8894C7.24457 19.1116 7.55568 19.3783 7.95568 19.556C11.289 21.3783 15.4223 20.756 18.089 18.0449C18.7557 17.3783 19.7779 17.3783 20.4446 18.0449C21.0668 18.7116 21.0668 19.7783 20.4446 20.4005C16.7112 24.1783 10.9335 25.1116 6.31123 22.5338C5.7779 22.2671 5.28901 21.9116 4.84457 21.6005Z"
                      fill="#363636"
                    />
                    <path
                      d="M23.8224 13.9555C23.6891 14.8888 22.8002 15.511 21.8669 15.3777C20.9335 15.2444 20.3558 14.3555 20.4891 13.4221C20.578 12.9332 20.578 12.4444 20.578 11.9555C20.578 8.0888 18.0446 4.75547 14.4891 3.73325C13.6002 3.51103 13.0669 2.53325 13.3335 1.64436C13.6002 0.755471 14.4891 0.222137 15.4224 0.488804C20.4446 1.95547 23.9558 6.62214 23.9558 11.9999C23.9558 12.6666 23.9113 13.3332 23.8224 13.9555Z"
                      fill="#363636"
                    />
                    <path
                      d="M7.42222 0.843445C8.26667 0.487889 9.24445 0.932334 9.55556 1.82122C9.86667 2.71011 9.46667 3.68789 8.62222 4.04344C5.42222 5.33233 3.28889 8.48789 3.28889 12.0879C3.28889 12.799 3.37778 13.5101 3.55556 14.1768C3.77778 15.0657 3.24444 15.999 2.35556 16.2212C1.46667 16.4434 0.577778 15.9101 0.355556 14.9768C0.133333 13.999 0 13.0212 0 12.0434C0 7.02122 2.97778 2.62122 7.42222 0.843445Z"
                      fill="#363636"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1405_2">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="font-bold my-auto text-2xl">
                  Generating article...
                </p>
              </div>
              <span className="text-sm font-regular text-gray-400">
                Your article will be ready in a couple of seconds.
              </span>
            </div>
          ) : (
            <>
              {article ? (
                <MDEditor
                  value={article}
                  onChange={setArticle}
                  height={800}
                />
              ) : (
                <div className="py-24 px-4 border rounded-lg border-dashed w-full flex flex-col justify-center items-center space-y-2.5">
                  <p className="font-bold text-center text-2xl">
                    Select keywords to write blog article!
                  </p>
                  <span className="text-sm font-regular text-center text-gray-400">
                    You can select multiple keywords by separating
                    them with commas...
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
