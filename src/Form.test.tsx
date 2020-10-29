import { required, IValues } from "./Form";
test("when required is called with empty title, 'this must be populated' should be returned", () => {
  const values: IValues = {
    title: "",
  };
  const result = required("title", values);
  expect(result).toBe("This must be populated");
});
