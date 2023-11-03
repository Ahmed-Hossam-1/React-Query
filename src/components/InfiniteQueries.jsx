import axios from "axios";
import { Fragment } from "react";
import { useInfiniteQuery } from "react-query";

const fetchProduct = ({ pageParam = 1 }) => {
  return axios.get(
    `http://localhost:3000/products?_limit=2&_page=${pageParam}`
  );
};
const InfiniteQueries = () => {
  const {
    isLoading,
    data,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery("pro", fetchProduct, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h2>RQ infinite page</h2>
      {data?.pages?.map((hero, i) => (
        <Fragment key={i}>
          {hero.data.map((pro) => (
            <h5 key={pro.id}>{pro.title}</h5>
          ))}
        </Fragment>
      ))}
      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        Load More
      </button>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      {/* 
      {data.map((heroTitle, i) => (
        <div key={i}>{heroTitle}</div>
      ))} */}
      {/* {data} */}
    </div>
  );
};

export default InfiniteQueries;
