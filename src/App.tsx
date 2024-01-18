import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyHeader from "./components/MyHeader";
import HomePage from "./components/HomePage";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:articleId" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
