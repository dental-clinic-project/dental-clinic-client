import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teamApi = createApi({
  reducerPath: "teamApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
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
