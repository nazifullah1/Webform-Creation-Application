import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BlogsDetails = () => {
  const { id } = useParams();
  return (
    <div className="blog-details">
      <h2>Blog Details - {id}</h2>
    </div>
  );
};

export default BlogsDetails;
