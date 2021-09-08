import store from "./customStore";
import { bugAdded, bugResolved } from "./actions";
store.subscribe(() => {
  console.log("Store");
});
store.dispatch(bugAdded("bug1"));
store.dispatch(bugResolved(1));
console.log(store.getState());
//console.log(store.getState());
