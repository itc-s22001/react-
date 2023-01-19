import Pop1 from 'components/pop1'
import style from 'styles/pop.module.css'

const Pop2 = () => {
  return (
    <>
      <ul className={style.pop_btn}>
        <Pop1 pe='Home' />
        <Pop1 pe='About' />
        <Pop1 pe='Topics' />
        <Pop1 pe='Link' />
      </ul>
    </>
  )
}
export default Pop2
