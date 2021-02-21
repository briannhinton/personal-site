import Head from 'next/head'
import dynamic from 'next/dynamic';

const GenerativeBg = dynamic(() => import('../components/generativebg'), { ssr: false });

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brian Hinton's personal site</title>
      </Head>
    <GenerativeBg />
    <main className={styles.main}>
      <section className={styles.copy}>
      <h1 className={styles.title}>Brian Hinton</h1>

      <p className={styles.hero}>Designer leading teams that are creating good experiences for e-commerce content management, and building accessible interfaces. I aim to make digital products usable for everyone.</p>

      <p className={styles.copyfirst}>I’m the design manager at <a className="link" href="https://www.webstaurantstore.com/careers/" target="_blank">WebstaurantStore</a>, where I spend my time coordinating the development of our platform’s design systems, leading the accessibility charge, and helping my team grow individual and as a group.</p>

      <p className={styles.copysecond}>On the side, I’m a host on the show <a href="https://thundernerds.io" className="link" target="_blank">Thunder Nerds</a>, a livestream and podcast where we interview people from all aspects of technology to find out their stories, and to share their life lessons with others. I also run <a href="https://friends.figma.com/tampa-bay/" target="_blank" className="link">Friends of Figma, Tampa Bay</a> where I help connect Figma users in the area and around the world.</p>
      </section>
      <footer className={styles.msg}>
        <h2 className={styles.msgtitle}>Say Hello.</h2>
        <p>I’m a big believer in being kind to each other, and I want to pay it forward with what knowledge I have—share with others what others have shared with me, and help lift them higher. I think it’s not only important, but as a veteran in this industry I want to set an example for others, and help the next generation of leaders. If you have a question, or just want to talk send me a message using the method of your choice.</p>
        <div className={styles.msgborder}></div>
        <a href="mailto:ask@mrbrianhinton.com?subject=I want to say hi" target="_blank" className={styles.msglinkfirst}>ask@mrbrianhinton.com</a>  <a href="https://twitter.com/mrbrianhinton?lang=en" target="_blank" className={styles.msglink}>@mrbrianhinton</a>
      </footer>
      
    </main>
    </div>
  )
}
