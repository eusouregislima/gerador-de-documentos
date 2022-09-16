import styled from "styled-components";

export const Image = styled.img`
  width: 100px;

  margin-top: 30px;

  @media screen and (max-width: 700px) {
    width: 50px;
  }
`;

export const CheckboxInput = styled.input`
  width: 18px;
  height: 18px;

  background: #2377f2;
  border-radius: 2px;
`;

export const ImageLine = styled.img`
  width: ${(props) => props.width || "25vw"};
  height: 10px;
`;

export const EvolutionBar = styled.img`
  width: 80%;
`;

export const EvolutionBarPageTwo = styled.img`
  width: 80%;
`;

export const EvolutionBarThree = styled.img`
  width: 80%;
`;

export const EvolutionBarFour = styled.img`
  width: 80%;
`;

export const EvolutionBarFive = styled.img`
  width: 80%;
`;

export const InputDate = styled.input`
  color: #606060;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
`;

export const ContainerInput = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
export const Input = styled.input`
  width: ${(props) => props.width || "25vw"};
  padding-left: 5px;

  min-height: 45px;
  border: none;
  outline: none;

  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: black;
  text-transform: uppercase;

  &::placeholder {
    color: black;
    opacity: 0.5;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const InputLabel = styled.p`
  color: red;
  font-weight: 400;
  font-size: 10px;
  line-height: 19px;
  display: ${(props) => props.display || "none"};
`;

export const Select = styled.select`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: black;
  opacity: 0.5;
  width: 5vw;
`;
