import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArticleType } from "../interfaces/ArticleType";
import { Container } from "react-bootstrap";

const Details = () => {
  const params = useParams();

  const articleId: string | undefined = params.articleId;

  const [article, setArticle] = useState<null | ArticleType>(null);

  const fetchArticle = async () => {
    try {
      const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${articleId}`);
      if (response.ok) {
        const data: ArticleType = await response.json();
        setArticle(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <Container className="py-3">
      {article && (
        <>
          <div className="mb-3">
            <h1 className="mb-0">{article.title}</h1>
            <small>{article.published_at}</small>
          </div>
          <div className="text-center mb-5" style={{ maxHeight: "auto", maxWidth: "1600px" }}>
            <img src={article.image_url} alt="cover" className="w-100" />
          </div>
          <p>{article.summary}</p>
        </>
      )}
    </Container>
  );
};

export default Details;
