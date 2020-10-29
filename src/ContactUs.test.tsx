import React from "react";
import ReactDOM from "react-dom";
import { Simulate } from "react-dom/test-utils";
import ContactUs from "./ContactUs";
import { ISubmitResult } from "./Form";
import { render, cleanup, fireEvent } from "@testing-library/react";

afterEach(cleanup);
describe("ContactUs", () => {
  test("when submit without filling in fields should display errors", () => {
    const handleSubmit = async (): Promise<ISubmitResult> => {
      return {
        success: true,
      };
    };
    test("when submit after filling in fields should submit okey", () => {
      const handleSubmit = async (): Promise<ISubmitResult> => {
        return {
          success: true,
        };
      };
    });

    const { container, getByText, getByLabelText } = render(
      <ContactUs onSubmit={handleSubmit} />
    );
    const nameField: HTMLInputElement = getByLabelText(
      "Your name"
    ) as HTMLInputElement;
    expect(nameField).not.toBeNull();
    fireEvent.change(nameField, {
      target: { value: "Carl" },
    });
    const emailField = getByLabelText("Your email address") as HTMLInputElement;
    expect(emailField).not.toBeNull();
    fireEvent.change(emailField, {
      target: { value: "carl.rippon@testmail.com" },
    });
    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);
    const errorsDiv = container.querySelector("[data-testid='formErrors']");
    expect(errorsDiv).toBeNull();
  });
});
