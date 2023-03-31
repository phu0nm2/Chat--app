import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"; // ADDED

//slices
import appReducer from "./slices/app";
import user from "./slices/user";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",

  stateReconciler: autoMergeLevel2, // added it to fix the keys in initialState are removed
  //whitelist: [],
  // blacklist: [],
  //version:[],
};

const rootReducer = combineReducers({
  app: appReducer,
  user: user,
});

export { rootPersistConfig, rootReducer };
