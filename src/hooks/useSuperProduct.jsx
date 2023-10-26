import axios from "axios";
import { useQuery } from "react-query";

const fetchProduct = (/*proId*/ { queryKey }) => {
  console.log(queryKey);
  const proId = queryKey[1];
  return axios.get(`http://localhost:3000/products/${proId}`);
};

export default function useSuperProduct(proId) {
  return useQuery(["pro", proId], fetchProduct);
}
