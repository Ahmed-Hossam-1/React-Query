import axios from "axios";
import { useQuery } from "react-query";

const RQproduct = () => {
  const { isLoading, data, isError, error } = useQuery(
    "pro",
    () => {
      return axios.get("http://localhost:3000/products");
    },
    {
      cacheTime: 5000,
      // staleTime: 30000
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <h2>RQ Products Page</h2>
      {data?.data.map((hero) => (
        <div key={hero.id}>{hero.title}</div>
      ))}
    </div>
  );
};

export default RQproduct;
