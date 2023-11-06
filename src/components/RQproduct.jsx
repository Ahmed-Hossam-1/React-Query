import axios from "axios";
import { useQuery } from "react-query";
import { useQuerydata } from "../hooks/useQueryData";
import { Link } from "react-router-dom";

const RQproduct = () => {
  const onSuccess = (data) => {
    console.log({ data });
  };

  const onError = (error) => {
    console.log({ error });
  };
  const { isLoading, data, isError, error, refetch, isFetching } = useQuerydata(
    onSuccess,
    onError
  );

  if (isLoading /* || isFetching*/) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h2>RQ Products Page</h2>
      <button onClick={refetch}>fetch</button>
      {data?.data?.data?.map((hero, i) => (
        <div key={i}>
          <Link to={`/rq-product/${hero.id}`}>{hero.title}</Link>
        </div>
      ))}
      {/* 
      {data.map((heroTitle, i) => (
        <div key={i}>{heroTitle}</div>
      ))} */}
      {data}
    </div>
  );
};

export default RQproduct;
