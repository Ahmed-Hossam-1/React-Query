import { useParams } from "react-router-dom";
import useSuperProduct from "../hooks/useSuperProduct";

const RQProductID = () => {
  const { ID } = useParams();
  const { isLoading, data, isError, error } = useSuperProduct(ID);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }
  console.log(data);
  return (
    <>
      <h2>RQ Product {ID} </h2>
      <div>{data?.data.title}</div>
    </>
  );
};

export default RQProductID;
