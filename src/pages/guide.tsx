import Link from 'next/link';

export default function Guide() {
  return (
    <div className="flex w-full flex-col justify-center items-center">
      <header className="w-[95%] md:w-3/5 mt-6 flex flex-row justify-between items-between">
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
      <main className="w-[95%] md:w-3/5 flex flex-col mt-12 pb-24">
        <h1 className="text-center text-3xl font-bold">
          How to Generate high quality AI articles
        </h1>
        <div className="mt-12 flex flex-col">
          <h2 className="text-xl font-medium text-gray-900">
            1. Go to SemRush to get keywords
          </h2>
          <p className="text-sm mt-4 font-regular text-gray-700">
            <a
              className="text-blue-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.semrush.com/"
            >
              SemRush
            </a>{' '}
            shows you keywords you can rank for.
          </p>
          <p className="text-sm mt-4 font-regular text-gray-700">
            You want to find keywords that are easy to rank for as in
            the beginning you don't have much SEO authority.
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-center items-center">
          <h2 className="text-xl text-start w-full font-medium text-gray-900">
            2. Go to the magic tool
          </h2>
          <img className="mt-5 w-3/4" src="/semrush.png" />
          <p className="mt-6 font-regular w-full text-gray-700">
            Find keywords with low SEO difficulty and high search
            volume. Make sure the KD is between 0% and 30%.
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-center w-full items-center">
          <h2 className="text-xl font-medium text-gray-900 w-full">
            3. Get your OpenAI key
          </h2>
          <p className="mt-4 font-regular text-gray-700 w-full">
            Get your key from OpenAI to begin generating articles.{' '}
            <a
              className="text-blue-700 hover:underline"
              target="_blank"
              rel="nopener noreferrer"
              href="https://platform.openai.com/account"
            >
              OpenAI Platform
            </a>
          </p>
          <img className="mt-5 w-3/4" src="/openai.png" />
        </div>
        <div className="mt-8 flex flex-col">
          <h2 className="text-xl font-medium text-gray-900">
            4. Use the article generator to create an article
          </h2>
          <p className="mt-4 font-regular text-gray-700">
            Now go back to this generator and generate an article with
            the keyword.
          </p>
        </div>
      </main>
    </div>
  );
}
