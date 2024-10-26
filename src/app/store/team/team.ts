import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teamApi = createApi({
  reducerPath: "teamApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1" }),
  endpoints: (builder) => ({
    getTeam: builder.query({
      query: () => ({
        url: "/team",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTeamQuery } = teamApi;
