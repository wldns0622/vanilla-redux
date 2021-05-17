import { createStore } from "redux";

const plus = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  }
  else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }

};

const countStore = createStore(countModifier)

countStore.dispatch({ type: "ADD" });
console.log(countStore.getState());
countStore.dispatch({ type: "ADD" });
console.log(countStore.getState());
countStore.dispatch({ type: "ADD" });
console.log(countStore.getState());
countStore.dispatch({ type: "MINUS" });
console.log(countStore.getState());