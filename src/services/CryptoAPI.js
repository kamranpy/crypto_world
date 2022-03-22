import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "34c4cd1ed9mshe433b5d0a628b6ap1eb04cjsn067a8c99a30f",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
      getCrypto: builder.query({
          query: () => createRequest("/coins")
      })
  }),
});


export const {
    useGetCryptoQuery,
} = cryptoApi;