import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { todos } from "./todos/reducers";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  todos: todos,
});

const persistedTodosReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedTodosReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store, null, () => {
  console.log("Rehydration complete:", store.getState());
});

// const persistor = persistStore(store);

export { store, persistor };
