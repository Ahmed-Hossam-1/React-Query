import axios from "axios";
import { useQuery } from "react-query";

const fetchProduct = () => {
  return axios.get("http://localhost:3000/products");
};

const fetchCategories = () => {
  return axios.get("http://localhost:3000/categories");
};

const ParallelQuery = () => {
  const { data: productData } = useQuery("product", fetchProduct);
  const { data: categoryData } = useQuery("categories", fetchCategories);
  return <div>ParallelQuery</div>;
};

export default ParallelQuery;
