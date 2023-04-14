import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rishavJain from "./Reducer";

const rishav = legacy_createStore(rishavJain, applyMiddleware(logger));

export default rishav;