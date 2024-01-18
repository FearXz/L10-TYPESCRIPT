import React from "react";
import { ArticleType } from "../interfaces/ArticleType";
import { useNavigate } from "react-router-dom";

interface ArticleProps {
  article: ArticleType;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  const navigate = useNavigate();

  return (
    <div className="d-flex border border-1 border-dark clickable" onClick={() => navigate(`/details/${article.id}`)}>
      <div
        className="me-3"
        style={{
          minWidth: "80px",
          minHeight: "80px",
          backgroundImage: `url(${article.image_url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="d-flex flex-column">
        <h2 className="fs-4">{article.title}</h2>

        <p className="mb-0 mt-auto">{article.news_site}</p>
        {/* Render other article details... */}
      </div>
    </div>
  );
};

export default Article;
