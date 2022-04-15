import Head from 'next/head'
import dynamic from 'next/dynamic'
import styled from '@emotion/styled'

const GenerativeBg = dynamic(() => import('../components/generativebg'), {
  ssr: false,
})

const Main = styled.main`
  color: var(--dark-color);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2rem;
`

const Section = styled.section`
  width: 100%;
  max-width: 63.4rem;
  padding-top: var(--space-oct);
  padding-left: var(--space-double);
  padding-right: var(--space-double);
  margin-bottom: var(--space-quad);
  background-color: var(--light-color-bg);
  backdrop-filter: blur(24px);
`

const Title = styled.h1`
  margin-bottom: var(--space-triple);
  color: var(--dark-color);
  font-size: 6.4rem;
  line-height: 5.3rem;
  font-family: var(--font-family-sans-condextrabold);
  text-transform: uppercase;
`

const Hero = styled.p`
  color: var(--dark-color);
  font-size: 3.2rem;
  font-family: var(--font-family-sans);
  line-height: 3.6rem;
  margin-bottom: var(--space-triple);
`

const Copyfirst = styled.p`
  margin-bottom: var(--space-double);
`

const Copysecond = styled.p`
  margin-bottom: var(--space-double);
`

const Footer = styled.footer`
  background-color: var(--dark-color-bg);
  color: white;
  width: 100%;
  max-width: 63.4rem;
  padding-top: var(--space-triple);
  padding-left: var(--space-double);
  padding-right: var(--space-double);
  padding-bottom: 8.8rem;
`

const FooterTitle = styled.h2`
  font-size: 6.4rem;
  font-family: var(--font-family-sans-cond);
  text-transform: uppercase;
  line-height: 8.2rem;
  margin-bottom: var(--space-double);
`

const FooterBorder = styled.div`
  height: 0.1rem;
  width: 5.6rem;
  background-color: white;
  margin-bottom: 2.4rem;
  margin-top: 2.4rem;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brian Hinton personal site</title>
      </Head>
      <GenerativeBg />
      <Main>
        <Section>
          <Title>Brian Hinton</Title>
          <Hero>
            Designer leading teams that are creating good experiences for
            e-commerce content management, and building accessible interfaces. I
            aim to make digital products usable for everyone.
          </Hero>

          <Copyfirst>
            I’m the design manager at{' '}
            <a
              className="link"
              href="https://www.webstaurantstore.com/careers/"
              target="_blank"
              rel="noreferrer"
            >
              WebstaurantStore
            </a>
            , where I spend my time coordinating the development of our
            platform’s design systems, leading the accessibility charge, and
            helping my team grow individually and as a group.
          </Copyfirst>

          <Copysecond>
            On the side, I’m a host on the show{' '}
            <a
              href="https://thundernerds.io"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              Thunder Nerds
            </a>
            , a livestream and podcast where we interview people from all
            aspects of technology to find out their stories, and to share their
            life lessons with others. I also run{' '}
            <a
              href="https://friends.figma.com/tampa-bay/"
              target="_blank"
              className="link"
              rel="noreferrer"
            >
              Friends of Figma, Tampa Bay
            </a>{' '}
            where I help connect Figma users in the area and around the world.
          </Copysecond>
        </Section>
        <Footer>
          <FooterTitle>Say Hello.</FooterTitle>
          <p>
            I’m a big believer in being kind to each other, and I want to pay it
            forward with what knowledge I have—share with others what others
            have shared with me, and help lift them higher. I think it’s not
            only important, but as a veteran in this industry I want to set an
            example for others, and help the next generation. If you have a
            question, or just want to talk send me a message using the method of
            your choice.
          </p>
          <FooterBorder></FooterBorder>
          <a
            href="mailto:briannhinton@gmail.com?subject=I want to say hi"
            target="_blank"
            className="msglinkfirst"
            rel="noreferrer"
          >
            briannhinton@gmail.com
          </a>{' '}
          <a
            href="https://twitter.com/realtinypenguin?lang=en"
            target="_blank"
            className="msglink"
            rel="noreferrer"
          >
            @RealTinyPenguin
          </a>
        </Footer>
      </Main>
    </div>
  )
}
