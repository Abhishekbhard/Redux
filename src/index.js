import store from "./store/store";
import * as actions from "./store/api";
import { addBug } from "./store/bugs";

store.dispatch(addBug({ description: "a" }));
