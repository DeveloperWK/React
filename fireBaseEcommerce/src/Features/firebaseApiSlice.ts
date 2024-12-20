import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase.config";

const firebaseApiSlice = createApi({
  reducerPath: "firebaseApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["AddProduct"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      queryFn: async () => {
        try {
          const productsCollectionRef = collection(db, "products");
          const data = await getDocs(productsCollectionRef);
          const filteredData = data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          return { data: filteredData };
        } catch (error) {
          console.error(error);
        }
      },
      providesTags: ["AddProduct"],
    }),
    addProducts: builder.mutation({
      queryFn: async (products) => {
        try {
          await addDoc(collection(db, "products"), products);
          return { data: products };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["AddProduct"],
    }),
  }),
});
// createApi
export const { useGetProductsQuery, useAddProductsMutation } = firebaseApiSlice;
export default firebaseApiSlice;
