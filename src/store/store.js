import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import logger from "../middleware/logger";

const store = configureStore({ reducer, middleware: [logger] });

export default store;
