import React from "react";

import { StyledButton } from "./style";

function Button({ onclick, children, ...props }) {
  return (
    <StyledButton onClick={onclick} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
