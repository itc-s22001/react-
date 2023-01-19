import Main from 'components/naka'
import style from 'styles/blog.module.css'

const Blog = ({ title }) => {
  return (
    <>
      <style jsx global>{`
          body {
            background-color: #EEE;
          }
      `}
      </style>
      <article className={style.box}>
        <h1>
          <a href='#'>Keep coding everyday{title}</a>
          <span className={style.date}> (2013.01.01)</span>
        </h1>
        <p className={style.box_img}>
          <img src='http://exe.codeprep.jp/assets/files/blog_hello.png' alt='Thumbnail' />
        </p>
        <Main />
      </article>
    </>
  )
}

export default Blog
