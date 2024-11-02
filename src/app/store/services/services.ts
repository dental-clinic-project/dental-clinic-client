import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const servicesApi = createApi({
  reducerPath: "servicesApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.VITE_API_BASE_URL + '/api/v1' }),
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => ({
        url: "/services",
        method: "GET",
      }),
    }),
    getServiceById: builder.query({
      query: ({ id }) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetServicesQuery, useGetServiceByIdQuery } = servicesApi;
