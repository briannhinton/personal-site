import Footer from './footer'

type Props = {
  children: any
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
