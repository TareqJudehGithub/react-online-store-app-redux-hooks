//required libraries
import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";

//redux-saga
import rootSaga from "./root-saga";
import createSagaMiddleware from "redux-saga";
//redux-persist
import {persistStore} from "redux-persist"
import thunk from "redux-thunk"
import rootReducer from "./root-reducer";

//To apply logger only in development:
const sagaMiddlewares = createSagaMiddleware()
const middlewares = [sagaMiddlewares, thunk];

 if(process.env.NODE_ENV === "development") {
      middlewares.push(logger);
 };

//creating the Store:
export const store = createStore(rootReducer, applyMiddleware(...middlewares)) 

sagaMiddlewares.run(rootSaga);

export const persistor = persistStore(store);


