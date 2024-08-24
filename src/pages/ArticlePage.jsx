import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import Article from "../components/Article";
import Navbar from "../components/Navbar";
const ArticlePage = () => {
  return (
    <div className="mt-5 pt-5">
      <Article enableSwiper={true} />
    </div>
  );
};

export default ArticlePage;
