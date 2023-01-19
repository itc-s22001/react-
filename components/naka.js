import style from 'styles/blog.module.css'

const Main = () => {
  return (
    <div className={style.box_sentence}>
      <p>
        コードを書く喜びとして、一つの問題を解決した時の達成感が挙げられます。
      </p>
      <p> ある問題が発生した時に、頭を悩ませながら色々なことを試して答えに近づいていく過程はプログラマーにとって至福の一時と言えます。</p>
      <p> そうして沢山の問題を解決しているうちにだんだん問題のパターンが見えてきて…
        <a href='#'> 続きを読む</a>
      </p>
    </div>
  )
}
export default Main
