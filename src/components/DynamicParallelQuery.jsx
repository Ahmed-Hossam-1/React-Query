import { useQueries } from "react-query";
import axios from "axios";

const fetchCategories = (heroId) => {
  return axios.get(`http://localhost:3000/categories/${heroId}`);
};

const DynamicParallelQuery = ({ heroIds }) => {
  const queryResult = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-pro", id],
        queryFn: () => fetchCategories(id),
      };
    })
  );

  console.log({ queryResult });

  return <div>DynamicParallelQuery</div>;
};

export default DynamicParallelQuery;
