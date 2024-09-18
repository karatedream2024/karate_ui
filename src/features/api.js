import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { all } from "./common";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${all.baseurl}`,
    // prepareHeaders: (headers) => {
    //   const token = JSON.parse(localStorage.getItem('isLoggedIn'))?.status
    //   if (token) {
    //     headers.set('Authorization', `Bearer ${token}`);
    //   }
    //   return headers;
    // },
    //  baseUrl: "http://192.168.136.243:8000/api",

  }),
  tagTypes: ['Dojo', 'Fee'],

  endpoints: (builder) => ({}),
});
