import axios from "axios";
import { useQuery, useMutation } from "react-query";

const fetchProduct = (/*onSuccess, onError */) => {
  return axios.get("http://localhost:3000/products");
};

const addSuper = (hero) => {
  return axios.post(`http://localhost:3000/products`, hero);
};

export const useQuerydata = (onSuccess, onError) => {
  return useQuery("pro", fetchProduct, {
    onSuccess,
    onError,
    // refetchOnWindowFocus: false, // true is defaultt
    // refetchOnMount: false,
    // retry: 1, // If there is error refetch data
    // cacheTime: 5000,
    // staleTime: 30000,
    // refetchInterval: 15000,
    // refetchIntervalInBackground: true,
    // enabled: false,
    // onSuccess: (data) => {
    //   console.log(data);
    // },
    // onError: (err) => {
    //   console.log(err);
    // },
    // select: (data) => {
    //   const title = data?.data?.map((hero) => <h5>{hero.title}</h5>);
    //   return title;
    // },
  });
};

export const useAddSuperHeroData = () => {
  return useMutation(addSuper);
};
