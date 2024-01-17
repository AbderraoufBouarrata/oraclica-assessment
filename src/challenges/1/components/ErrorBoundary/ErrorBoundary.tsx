import React from "react";

export default class ErrorBoundary extends React.Component<any, any> {
  state = { hasError: false };

  static getDerivedStateFromError(_error: unknown) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error(JSON.stringify({ error, errorInfo }));
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="ErrorBoundary text-center">
          <h3>Sorry there was a problem loading this page</h3>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
