import React from "react";
import { Button,Result } from "antd";

const ErrorPage = () => {
  
  return (
    <section className="section-error-page">
      <div className="error-block">
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button href="/" type="primary">Back Home</Button>}
        />
      </div>
    </section>
  );
};

export default ErrorPage;
