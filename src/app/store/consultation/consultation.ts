import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const consultationApi = createApi({
  reducerPath: "consultationApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.VITE_API_BASE_URL + '/api/v1' }),
  endpoints: (builder) => ({
    getConsultation: builder.mutation({
      query: ({ date }) => ({
        url: `/consultation?date=${date}`,
        method: "GET",
      }),
    }),
    addDateToConsultations: builder.mutation({
      query: ({ id, time }) => ({
        url: `/consultation/${id}`,
        method: "POST",
        body: { time },
      }),
    }),
  }),
});

export const { useGetConsultationMutation, useAddDateToConsultationsMutation } = consultationApi;
