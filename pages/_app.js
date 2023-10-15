/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">ChatGo</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-6 text-black-500">
              Home
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-black-500">
              Dashboard
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-black-500">
              MyLLM
            </a>
          </Link>
          <Link href="/create-llm">
            <a className="mr-6 text-black-500">
              CreatLLM
            </a>
          </Link>
          <Link href="/MyChat">
            <a className="mr-6 text-black-500">
              MyChat
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
