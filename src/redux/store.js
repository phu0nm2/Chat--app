import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { useSelector as useAppSelector, useDispatch as useAppDispatch } from 'react-redux';

import { rootPersistConfig, rootReducer } from './rootReducer';

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

// presist can be save data after closed web
const persistor = persistStore(store);
const { dispatch } = store;
const useSelector = useAppSelector;
const useDispatch = () => useAppDispatch();

export { store, persistor, dispatch, useSelector, useDispatch };
