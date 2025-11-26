"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "@/redux/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { baseApi } from "./api/baseApi";
import { authReducer, collapseReducer } from "./features";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authReducer"], // which slice you want persistent put here as string
  version: 1,
};
const rootReducer = combineReducers({
  // here will put reducers
  authReducer,
  collapseReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

const persistor = persistStore(store);

export { store, persistor };
