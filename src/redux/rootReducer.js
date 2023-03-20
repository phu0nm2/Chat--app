import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

//slices
import appReducer from "./slices/app";
import user from "./slices/user";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  //whitelist: [],
  // blacklist: [],
  //version:[],
};

const rootReducer = combineReducers({
  app: appReducer,
  user: user,
});

export { rootPersistConfig, rootReducer };
