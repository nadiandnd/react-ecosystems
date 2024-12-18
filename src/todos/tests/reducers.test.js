import { expect } from "chai";
import { todos } from "../reducers.js";

describe("The todos reducer", () => {
  it("Add a new todo when CREATE_TODO action is recieved", () => {
    const fakeTodo = { text: "hello", isCompleted: false };
    const fakeAction = {
      type: "CREATE_TODO",
      payload: {
        todo: fakeTodo,
      },
    };
    const originalState = { isLoading: false, data: [] };

    const expected = {
      isLoading: false,
      data: [fakeTodo],
    };
    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });
});
