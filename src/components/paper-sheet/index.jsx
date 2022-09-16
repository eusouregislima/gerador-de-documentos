import React from "react";

import { ContainerRight, PaperSheetDoc } from "./styles";

export const PagePaperSheet = ({ children, ...props }) => {
  return (
    <ContainerRight>
      <PaperSheetDoc {...props}>{children}</PaperSheetDoc>
    </ContainerRight>
  );
};
