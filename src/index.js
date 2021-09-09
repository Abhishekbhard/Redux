import store from "./store/store";
import { bugAdded, bugResolved, projectAdded } from "./store/projects";
store.subscribe(() => {
  console.log("Store");
});
store.dispatch(projectAdded({ name: "bug1" }));
//store.dispatch(bugResolved({ id: 1 }));
console.log(store.getState());
//console.log(store.getState());
