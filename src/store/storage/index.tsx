import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '@store/reducers'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// add local storage
export const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: storage,
    version: 2,
    whitelist: ['dataWatchList'],
  },
  rootReducer
)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: defaultMiddleware =>
    defaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
