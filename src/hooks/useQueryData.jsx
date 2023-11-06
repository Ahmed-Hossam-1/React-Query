import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "../utils/axios-utils";

const fetchProduct = (/*onSuccess, onError */) => {
  // return axios.get("http://localhost:3000/products");
  return request({ url: "/products" });
};

// const addSuper = (hero) => {
//   // return axios.post(`http://localhost:3000/products`, hero);
//   return request({ url: "/products", method: "post", data: hero });
// };

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

// export const useAddSuperHeroData = () => {
//   const queryClient = useQueryClient();
//   return useMutation(addSuper, {
//     // onSuccess: (data) => {
//     //   // queryClient.invalidateQueries("pro");
//     // queryClient.setQueryData("pro", (oldQueryData) => {
//     //   return {
//     //     ...oldQueryData,
//     //     data: [...oldQueryData.data, data.data],
//     //   };
//     // });
//     // },
//     onMutate: async (newData) => {
//       await queryClient.cancelQueries("pro");
//       const prevData = queryClient.getQueryData("pro");
//       queryClient.setQueryData("pro", (oldQueryData) => {
//         return {
//           ...oldQueryData,
//           data: [
//             ...oldQueryData.data,
//             { id: oldQueryData?.data?.length + 1, ...newData },
//           ],
//         };
//       });
//       return {
//         prevData,
//       };
//     },
//     onError: (_error, _hero, context) => {
//       queryClient.setQueryData("pro", context.prevData);
//     },
//     onSettled: () => {
//       queryClient.invalidateQueries("pro");
//     },
//   });
// };
