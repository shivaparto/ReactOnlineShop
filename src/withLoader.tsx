import * as React from "react";
interface IProps {
  loading: boolean;
}
const withLoader = <P extends object>(Component: React.ComponentType<P>) =>
  class withLoader extends React.Component<P & IProps> {
    public render() {
      const { loading, ...props } = this.props as IProps;
      return loading ? (
        <div className="loader-overlay">
          <div className="loader-circle-wrap">
            <div className="loader-circle" />
          </div>
        </div>
      ) : (
        <Component {...(props as P)} />
      );
    }
  };

export default withLoader;
