import styled from "styled-components";

export const ContainerRight = styled.div`
  background-color: #d3d3d3;
  width: 70%;
  height: 100vh;

  display: flex;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

export const PaperSheetDoc = styled.div`
  background-color: #ffffff;
  max-width: 25cm;
  width: 90%;

  margin-top: 50px;
  background: #ffffff;
  outline: 0;
  box-shadow: 0 0 8px rgb(0 0 0 / 7%), 0 0 0 1px rgb(0 0 0 / 6%);
  border-radius: 5px;
  position: relative;
`;
