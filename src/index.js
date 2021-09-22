import store from "./store/store";

store.dispatch({
  type: "apiCallBegan",
  payload: {
    url: "/bugs",
    data: {},
    onSuccess: "bugReceived",
    onError: "apiRequestFailed",
  },
});
