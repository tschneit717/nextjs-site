import Head from 'next/head'

export default function Home () {
  return (
    <div className="container">
      <Head>
        <title>Tom Schneider</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>Hi, my name is</p>
        <h1 className="h1 primary">
          Tom Schneider
        </h1>
        <p className='h2 secondary'>I build things</p>
        <p>
          I am a software engineer specializing in implementing beautiful
          and accessible UI interfaces. I am teaching myself Java with the
          hopes of expanding my role into a full stack developer position.
          I currently work at WillowTree as a Senior Software Engineer
        </p>

      </main>

      <footer></footer>

    </div>
  )
}
