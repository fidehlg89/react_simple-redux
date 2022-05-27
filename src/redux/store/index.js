//define LegacysStorage as createStore becouse is deprecated and its recomended redux-toolkit
import { legacy_createStore as createStore } from "redux";
import reducer from "../reducers";

export default createStore(reducer);

//this config is defined on App component
