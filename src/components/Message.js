import React from "react";
import { Alert } from "react-bootstrap";

function Message({ variant, children }) {
  return <Alert variant="primary">{children}</Alert>;
}

Message.defaultProps = {
  variant: "error",
};
export default Message;
