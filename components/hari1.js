import Hari2 from 'components/hari2'
import style from 'styles/hari.module.css'

const Hari1 = () => {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: #DDD;
        }
      `}
      </style>

      <div className={style.box}>
        <h1>Notice</h1>
        <Hari2 />
        <Hari2 />
        <Hari2 />
      </div>
    </>
  )
}
export default Hari1
