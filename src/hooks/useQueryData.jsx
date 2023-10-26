import axios from "axios";
import { useQuery } from "react-query";

const fetchProduct = (/*onSuccess, onError */) => {
  return axios.get("http://localhost:3000/products");
};

export const useQuerydata = () => {
  return useQuery("pro", fetchProduct, {
    // cacheTime: 5000,
    // staleTime: 30000,
    // refetchInterval: 15000,
    // refetchIntervalInBackground: true,
    // enabled: false,
    // onSuccess,
    // onError,
    // select: (data) => {
    //   const title = data?.data.map((hero) => hero.title);
    //   return title;
    // },
  });
};
