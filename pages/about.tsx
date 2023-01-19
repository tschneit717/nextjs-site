import Head from 'next/head'

export default function About () {
  const years = new Date().getFullYear() - 2017
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
        <img src='/images/tom.jpg' />
        <p>I've been a professional software engineer for {years} years, but if you clicked here you're more interesting in learning about me as a person than my career.</p>

        <p>I currently live in Columbus, OH with my Fiance, Anna, three cats and a dog. I am originally from Cleveland, OH and went to school at Bowling Green State University. At University I started my academic career as an art major with hopes of getting into graphic design or animation. After a year in the program, I pivoted to Visual Communication Technology. There I specialized in video production and web design. I originally hoped to create documentaries and work in video production, but as fate would have it I turned out to be a better programmer. In school I created a short documentary on <a href="https://www.youtube.com/watch?v=ZWfyBgj7hXE" target="_blank" rel="noreferrer">Dungeons & Dragons</a> (before it was even cool). I still have a few hours of raw footage on a hard drive should I ever decide to revisit it.</p>

        <p>I love to take advantage of the outdoors in my spare time. In particular, I love to ski, camp/hike, and travel. A lifelong goal of mine is to visit every National Park in the United States (and a few from Canada too). I've done a road trip living out of the back of a van through the southwest United States with my Fiance and was able to see 6 in one trip. Other highlights of my travels have been a solo-trip to the UK, France, and Belgium, as well as a trip to Croatia where I got engage in Dubrovnik (King's Landing for those of you who love Game of Thrones like I do).</p>

      </main>

    </div>
  )
}
