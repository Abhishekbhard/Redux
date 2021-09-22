import store from "./store/store";
import * as actions from "./store/api";

store.dispatch(
  actions.apiCallBegan({
    url: "/bugs",
    data: {},
    onSuccess: "bugReceived",
  })
);
