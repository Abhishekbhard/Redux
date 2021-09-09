import store from "./store/store";
import { projectAdded } from "./store/projects";
import { bugAdded, bugResolved, getUnresolvedBugs } from "./store/bugs";
store.subscribe(() => {
  console.log("Store");
});
store.dispatch(projectAdded({ name: "project 1" }));
store.dispatch(bugAdded({ description: "Bug 1" }));

const getUnresolvedBug = getUnresolvedBugs(store.getState());
//store.dispatch(bugResolved({ id: 1 }));
console.log(store.getState());
console.log(getUnresolvedBug);
