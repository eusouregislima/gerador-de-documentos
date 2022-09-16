import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => props.width || "197.94px"};
  height: 45.97px;
  background-color: ${(props) => props.bgColor || "#18d24c"};
  color: white;
  opacity: ${(props) => props.opacity || "1"};
  font-weight: ${(props) => props.weight || "700"};
  font-size: 16px;
  line-height: 19px;
  border-radius: 5px;
`;
