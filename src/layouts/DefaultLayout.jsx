import Header from '../components/Header'
import Footer from '../components/Footer'
import Btt from '../components/Btt'

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Btt />
      <Footer />
    </>
  )
}