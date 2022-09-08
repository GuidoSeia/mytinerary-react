import { configureStore } from '@reduxjs/toolkit'
import citiesApi  from './features/citiesApi'
import activityAPI  from './features/activitiesAPI'
import itineraryAPI from './features/itineraryAPI'
import myTineraryAPI from './features/myTineraryAPI'

export default configureStore({
  reducer: {
    [citiesApi.reducerPath] : citiesApi.reducer,
    [activityAPI.reducerPath]: activityAPI.reducer,
    [itineraryAPI.reducerPath]: itineraryAPI.reducer,
    [myTineraryAPI.reducerPath]: myTineraryAPI.reducer,
  },
  middleware: (getAllCities) => getAllCities({
      immutableCheck: false,
      serializableCheck: false
  })
})