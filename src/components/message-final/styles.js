import styled from "styled-components";

export const MessageFinal = styled.div`
  background-color: #ffffff;

  width: 522.02px;
  height: 618.07px;
  position: absolute;
  top: 12%;
  z-index: 2;
  padding: 20px;
  border: 0.5px solid black;
`;

export const WhatsImage = styled.img`
  width: 30px;
`;
export const Link = styled.button`
  color: ${(props) => props.color || "blue"};
  background-color: ${(props) => props.bgColor || "white"};
  font-weight: ${(props) => props.weight || "700"};

  font-size: 16px;
  line-height: 19px;
  border-radius: 5px;
`;
