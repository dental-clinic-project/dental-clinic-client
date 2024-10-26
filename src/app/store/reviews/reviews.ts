import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { Review, NewReview } from "./reviews.types";

export const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1" }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => ({
        url: "/reviews",
        method: "GET",
      }),
      providesTags: ["Reviews"],
    }),
    addReviews: builder.mutation<Review, NewReview>({
      query: (body) => ({
        url: "/reviews",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Reviews"],
    }),
  }),
  refetchOnMountOrArgChange: 120,
});

export const {
  useGetReviewsQuery,
  useAddReviewsMutation,
  useLazyGetReviewsQuery,
} = reviewsApi;
