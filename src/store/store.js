import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import logger from "../middleware/logger";
import api from "../middleware/api";
import func from "../middleware/func";

const store = configureStore({
  reducer,
  middleware: [logger("console"), func],
});

export default store;
