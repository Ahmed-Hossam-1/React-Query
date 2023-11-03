import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetchProduct = (/*proId*/ { queryKey }) => {
  console.log(queryKey); // ["pro", proId]
  const proId = queryKey[1];
  return axios.get(`http://localhost:3000/products/${proId}`);
};

export default function useSuperProduct(proId) {
  const queyClient = useQueryClient();
  return useQuery(["pro", proId], fetchProduct, {
    initialData: () => {
      const hero = queyClient
        .getQueryData("pro")
        ?.data?.find((pro) => pro.id === parseInt(proId));
      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
}
