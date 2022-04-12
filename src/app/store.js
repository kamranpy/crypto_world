import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/CryptoAPI";
import { newsAPI } from "../services/NewAPI";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [newsAPI.reducerPath]: newsAPI.reducer,
  },
});
