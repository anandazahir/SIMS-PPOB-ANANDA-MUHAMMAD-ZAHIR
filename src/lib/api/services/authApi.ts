import { baseApi } from "../baseApi";
import { LoginRequest, RegisterRequest } from "@/lib/utils/scheme";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials: LoginRequest) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (credentials: RegisterRequest) => ({
        url: "/registration",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});
export const { useLoginMutation, useRegisterMutation } = authApi;
