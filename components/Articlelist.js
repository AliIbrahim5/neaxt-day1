import ArticleItem from './ArticleItem'
import aricleStyle from '../styles/Article.module.css'



const Articlelist = ({articles}) => {
  
  return (
    <div className={aricleStyle.grid}>

     {articles.map((article)=>(
<ArticleItem  key={article} article={article}/>

))}

    </div>
  )
}

export default Articlelist