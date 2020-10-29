import * as React from "react";
import ContactUs from "./ContactUs";
import { IValues, ISubmitResult } from "./Form";
import { resolve } from "dns";
interface IState {
  name: string;
  email: string;
  reason: string;
  notes: string;
}
const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    return setTimeout(resolve, ms);
  });
};
class ContactUsPage extends React.Component<{}, {}> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      name: "",
      notes: "",
      reason: "",
    };
  }
  public render() {
    return (
      <div className="page-container">
        <h1>Contact Us</h1>
        <p>
          If you enter your details we'll get back to you as soon as we can.
        </p>
        <ContactUs onSubmit={this.handleSubmit} />
      </div>
    );
  }
  private handleSubmit = async (values: IValues): Promise<ISubmitResult> => {
    await wait(1000);
    return {
      errors: {
        email: ["some is wrong with this"],
      },
      success: false,
    };
  };
}
export default ContactUsPage;