import { mongodb } from "./mongodb";

describe("mongodb", () => {
  it("should work", () => {
    expect(mongodb()).toEqual("mongodb");
  });
});
