import { createStore } from "redux";
import { fromMain } from "./main/reducers";

export const store = createStore(fromMain);
