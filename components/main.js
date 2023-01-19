import style from 'styles/header.module.css'
import Header from 'components/header'
import Main1 from 'components/main1'
import Footer from 'components/footer'

const Main = () => {
  return (
    <>
      <Header />
      <div className={style.main}>
        <Main1 />
        <Main1 title='2' />
      </div>
      <Footer />
    </>
  )
}
export default Main
