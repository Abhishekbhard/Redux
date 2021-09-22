import store from "./store/store";
import * as actions from "./store/api";
import { loadBugs, assignBugToUser } from "./store/bugs";

store.dispatch(loadBugs());

setTimeout(() => {
  store.dispatch(assignBugToUser(1, 4));
}, 2000);
