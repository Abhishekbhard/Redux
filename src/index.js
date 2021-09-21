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
store.dispatch((dispatch, getState) => {
  dispatch({ type: "bugReceived", bugs: [1, 23, 45] });
  console.log(getState());
});
