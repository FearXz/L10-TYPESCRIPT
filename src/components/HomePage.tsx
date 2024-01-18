import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArticles } from "../redux/reducers/fetchArticles";
import { ArticleType } from "../interfaces/ArticleType";
import { RootState } from "../redux/store";
import { Col, Container, Row } from "react-bootstrap";
import Article from "./Article";

const HomePage = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state: RootState) => state.fetchReducer.articles);

  interface DataType {
    count: number | null;
    next: string | null;
    previous: boolean | null;
    results: ArticleType[];
  }

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles?offset=0&limit=20");
      if (response.ok) {
        const data: DataType = await response.json();
        dispatch(setArticles(data.results));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Row className="gy-3">
        <h1 className="text-center">Articles</h1>

        {articles.length > 0 &&
          articles.map((article: ArticleType) => (
            <Col xs={10} className="mx-auto" key={article.id}>
              <Article article={article} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};
export default HomePage;
