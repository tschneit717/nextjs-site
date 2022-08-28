import Head from 'next/head'
import { Card } from '../components/Card/Card'

export default function About () {
  return (
    <div className="container">
      <Head>
        <title>Tom Schneider</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
         Who am I
        </h1>

        <Card title='Title' subtitle='Subtitle' description='Description' image='/images/tom.jpg' imageAlt='Alt text' />
      </main>

      <footer></footer>

    </div>
  )
}
