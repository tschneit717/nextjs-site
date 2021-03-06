import Head from 'next/head'

export default function Home () {
  return (
    <div className="container">
      <Head>
        <title>Tom Schneider</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Hello World!
        </h1>
      </main>

      <footer></footer>

    </div>
  )
}
