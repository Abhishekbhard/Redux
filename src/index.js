import store from "./store/store";
import { projectAdded } from "./store/projects";
import {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  getBugsByUser,
  getUnresolvedBugs,
} from "./store/bugs";
import { userAdded } from "./store/users";
// store.subscribe(() => {
//   console.log("Store changed");
// });
store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));
// store.dispatch(projectAdded({ name: "project 1" }));
// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugResolved({ id: 2 }));
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// store.dispatch(bugAssignedToUser({ bugId: 2, userId: 1 }));

const getUnresolvedBug = getUnresolvedBugs(store.getState());
const bugs = getBugsByUser(2)(store.getState());
console.log(bugs);

//store.dispatch(bugResolved({ id: 1 }));
// console.log(store.getState());
// console.log(getUnresolvedBug);
