import { baseApi } from "../baseApi";

export const servicesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query<any, void>({
      query: () => "/services",
    }),
    getBanners: builder.query<any, void>({
      query: () => "/banner",
    }),
  }),
});

export const { useGetServicesQuery, useGetBannersQuery } = servicesApi;
