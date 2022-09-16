import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  border: none;
  outline: none;
  font-family: 'Inter', sans-serif;
  }

  body{
  width: 100%;
  height: 100vh;
  justify-content: center;
  display: flex;
  background-color: white;
  }

button{
  cursor: pointer;
  &:hover{
    opacity: 0.8;
    
  }
  &:active{
    opacity: 0.6;
      }
}
`;
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.bg || ""};
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "16px"};
  padding-left: ${(props) => props.paddingleft || "0px"};
  padding-right: ${(props) => props.paddingright || "0px"};
`;

export const Spacer = styled.div`
  width: 100%;
  margin: ${(props) => props.margin || "20px"};
`;

export const Typography = styled.p`
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => props.size || "18px"};
  line-height: ${(props) => props.lineHeight || "27px"};
  text-align: ${(props) => props.textAlign || "center"};
  color: ${(props) => (props.primary ? "#ececec" : "#000000")};
  margin: ${(props) => props.margin || "0px"};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "")};
`;
