import store from "./store/store";
import * as actions from "./store/api";
import { loadBugs } from "./store/bugs";

store.dispatch(loadBugs());

setTimeout(() => {
  store.dispatch(loadBugs());
}, 2);
