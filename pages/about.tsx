import Head from 'next/head'
import { Card } from '../components/Card/Card'

export default function About () {
  return (
    <div className="container">
      <Head>
        <title>About me - Tom Schneider</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
         Who am I
        </h1>

        <Card title="Hey, I'm Tom Schneider" subtitle='Senior Software Engineer' description='Description' image='/images/tom.jpg' imageAlt='Alt text' />
      </main>

      <footer></footer>

    </div>
  )
}
