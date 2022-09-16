import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  width: 30%;
  height: 100vh;
  padding: 0px 25px;
  display: ${(props) => (props.primary ? "25vw" : "none")};
`;
