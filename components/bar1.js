import Bar2 from 'components/bar2'
import style from 'styles/bar.module.css'
const Bar1 = () => {
  return (
    <>
      <ul className={style.nav}>
        <Bar2 ba='TOP' />
        <Bar2 ba='ABOUT' />
        <Bar2 ba='NEWS' />
        <Bar2 ba='LINK' />
      </ul>
    </>
  )
}
export default Bar1
