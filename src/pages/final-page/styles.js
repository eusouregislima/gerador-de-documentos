import styled from "styled-components";

export const ContainerInfo = styled.div`
  background-color: white;
  width: 30%;
  height: 100vh;
  padding: 0px 25px;
`;

export const ContainerInput = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Input = styled.input`
  width: ${(props) => props.width || "25vw"};
  padding-left: 5px;

  min-height: 25px;
  border: none;
  outline: none;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  &::placeholder {
    color: #606060;
  }
`;
export const InputLabel = styled.p`
  color: #606060;
  font-weight: 400;
  font-size: 10px;
  line-height: 19px;
  display: ${(props) => props.display || "none"};
  margin-left: 15px;
`;

export const ImageLine = styled.img`
  width: ${(props) => props.width || "25vw"};
  height: 10px;
`;

export const Image = styled.img`
  width: 270px;
  margin-top: 50px;
`;

export const EvolutionBarFinal = styled.img`
  width: 80%;
`;
