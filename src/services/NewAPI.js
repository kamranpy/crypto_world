import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const newsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '34c4cd1ed9mshe433b5d0a628b6ap1eb04cjsn067a8c99a30f'
  }

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({url, headers: newsHeaders });

export const newsAPI = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    }),
  });


  export const { useGetNewsQuery } = newsAPI;