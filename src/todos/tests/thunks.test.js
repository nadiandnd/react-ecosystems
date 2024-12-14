import "node-fetch";
import { expect } from "chai";
import sinon from "sinon";
import { loadTodos } from "../thunks.js";

describe("The loadTodos thunks", () => {
  it("Dispatches the correct actions in the success scenario", async () => {
    const fakeDispatch = sinon.spy();

    const fakeTodos = [{ text: "1" }, { text: "2" }];

    const fetchStub = sinon.stub(global, "fetch").resolves({
      json: () => Promise.resolve(fakeTodos),
    });

    const expectedFirstAction = { type: "LOAD_TODOS_IN_PROGRESS" };
    const expectedSecondAction = {
      type: "LOAD_TODOS_SUCCESS",
      payload: {
        todos: fakeTodos,
      },
    };

    await loadTodos()(fakeDispatch);

    expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
    expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);

    fetchStub.reset();
  });
});
