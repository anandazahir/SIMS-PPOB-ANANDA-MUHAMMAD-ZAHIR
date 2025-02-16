import { baseApi } from "../baseApi";
import { TransactionRequest } from "@/lib/utils/scheme";
import { TopUpRequest } from "@/lib/utils/scheme";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBalance: builder.query<{ data: any }, void>({
      query: () => "/balance",
    }),
    getTransactionHistory: builder.query<
      { data: any },
      { limit: number; offset: number }
    >({
      query: ({ limit, offset }) =>
        `/transaction/history?limit=${limit}&offset=${offset}`,
    }),
    createTransaction: builder.mutation<
      { message: string },
      TransactionRequest
    >({
      query: (transactionData) => ({
        url: "/transaction",
        method: "POST",
        body: transactionData,
      }),
    }),
    topUp: builder.mutation<{ message: string }, TopUpRequest>({
      query: (topUpData) => ({
        url: "/topup",
        method: "POST",
        body: topUpData,
      }),
    }),
  }),
});

export const {
  useGetBalanceQuery,
  useGetTransactionHistoryQuery,
  useCreateTransactionMutation,
  useTopUpMutation,
} = transactionApi;
