import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
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
          return { data: filteredData, error: undefined };
        } catch (error) {
          return { data: [], error: error.message };
        }
      },
      providesTags: ["AddProduct"],
    }),
    getProduct: builder.query({
      queryFn: async (id: string) => {
        try {
          const productsCollectionRef = collection(db, "products");
          const docRef = doc(productsCollectionRef, id);
          const dataSnap = await getDoc(docRef);

          if (dataSnap.exists()) {
            return {
              data: { id: dataSnap.id, ...dataSnap.data() },
              meta: {},
            };
          } else {
            return { error: "Document not found" };
          }
        } catch (error) {
          return { error: error.message };
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
    deleteProduct: builder.mutation({
      queryFn: async (id: string) => {
        try {
          await deleteDoc(doc(db, "products", id));
          return { data: id };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["AddProduct"],
    }),
  }),
});
// createApi
export const {
  useGetProductsQuery,
  useAddProductsMutation,
  useGetProductQuery,
  useDeleteProductMutation,
} = firebaseApiSlice;
export default firebaseApiSlice;
