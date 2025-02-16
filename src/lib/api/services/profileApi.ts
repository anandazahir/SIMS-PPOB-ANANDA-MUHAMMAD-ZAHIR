import { baseApi } from "../baseApi";
import { UpdateProfileRequest } from "@/lib/utils/scheme";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<{ data: any }, void>({
      query: () => "/profile",
    }),
    updateProfile: builder.mutation<{ message: string }, UpdateProfileRequest>({
      query: (profileData) => ({
        url: "/profile/update",
        method: "PUT",
        body: profileData,
      }),
    }),
    updateImageProfile: builder.mutation<{ message: string }, FormData>({
      query: (formData) => ({
        url: "/profile/image",
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUpdateImageProfileMutation,
} = profileApi;
