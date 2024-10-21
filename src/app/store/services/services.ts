import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const servicesApi = createApi({
  reducerPath: "servicesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1" }),
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
