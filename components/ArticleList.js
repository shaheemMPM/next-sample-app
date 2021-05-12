import ArticleItem from "./ArticleItem";
import articleStyles from "../styles/Article.module.css";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article, ind) => (
        <ArticleItem article={article} key={ind}/>
      ))}
    </div>
  );
};

export default ArticleList;