import { helloWorld } from ".";

test("Simple test", () => {
  const res = helloWorld();
  expect(res).toBe("Hello World!");
});
