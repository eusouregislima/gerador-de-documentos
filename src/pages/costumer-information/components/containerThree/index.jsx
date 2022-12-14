import { Flex, Spacer, Typography } from "../../../../styles/styles";
import {
  CheckboxInput,
  ContainerInput,
  EvolutionBarThree,
  Image,
} from "../../styles";
import EvolutionBarImageThree from "../../../../assets/evolutionBarThree.png";
import Logo from "../../../../assets/logo.png";
import Button from "../../../../components/Button";
import ContainerInfo from "../../../../components/container";

const ContainerInfoThree = ({ ...props }) => {
  return (
    <ContainerInfo>
      <Flex direction="column">
        <Image alt="logo-contrato-fácil" src={Logo} />
        <EvolutionBarThree
          alt="barra-de-evolução-três"
          src={EvolutionBarImageThree}
        />
        <Spacer margin="5px" />
      </Flex>

      <Flex direction="column" align="left" gap="0px">
        <Typography
          primary="#D3D6DE"
          textAlign="left"
          size="16px"
          lineHeight="19px"
        >
          Etapa 3/5
        </Typography>
        <Typography
          fontWeight="400"
          textAlign="left"
          size="30px"
          lineHeight="35px"
        >
          Serviços
        </Typography>
      </Flex>

      <Spacer margin="30px" />
      <Flex>
        <Typography
          opacity="0.7"
          fontWeight="400"
          textAlign="left"
          size="15px"
          lineHeight="18px"
        >
          Selecione quais serviços serão prestados ao seu cliente
        </Typography>
      </Flex>
      <Spacer />

      <ContainerInput>
        <div>
          <Flex justify="left" paddingleft="20px">
            <CheckboxInput
              onClick={() => props?.handleServiceOne()}
              type="checkbox"
            />
            <Typography
              opacity="0.7"
              fontWeight="400"
              textAlign="left"
              size="15px"
              lineHeight="18px"
            >
              Serviço 1
            </Typography>
          </Flex>
        </div>
      </ContainerInput>
      <Spacer />
      <ContainerInput>
        <div>
          <Flex justify="left" paddingleft="20px">
            <CheckboxInput
              onClick={() => props?.handleServiceTwo()}
              type="checkbox"
            />
            <Typography
              opacity="0.7"
              fontWeight="400"
              textAlign="left"
              size="15px"
              lineHeight="18px"
            >
              Serviço 2
            </Typography>
          </Flex>
        </div>
      </ContainerInput>
      <Spacer />
      <ContainerInput>
        <div>
          <Flex justify="left" paddingleft="20px">
            <CheckboxInput
              onClick={() => props?.handleServiceThree()}
              type="checkbox"
            />
            <Typography
              opacity="0.7"
              fontWeight="400"
              textAlign="left"
              size="15px"
              lineHeight="18px"
            >
              Serviço 3
            </Typography>
          </Flex>
        </div>
      </ContainerInput>
      <Spacer />
      <ContainerInput>
        <div>
          <Flex justify="left" paddingleft="20px">
            <CheckboxInput
              onClick={() => props?.handleServiceFour()}
              type="checkbox"
            />
            <Typography
              opacity="0.7"
              fontWeight="400"
              textAlign="left"
              size="15px"
              lineHeight="18px"
            >
              Serviço 4
            </Typography>
          </Flex>
        </div>
      </ContainerInput>
      <Spacer />
      <ContainerInput>
        <div>
          <Flex justify="left" paddingleft="20px">
            <CheckboxInput
              onClick={() => props?.handleServiceFive()}
              type="checkbox"
            />
            <Typography
              opacity="0.7"
              fontWeight="400"
              textAlign="left"
              size="15px"
              lineHeight="18px"
            >
              Serviço 5
            </Typography>
          </Flex>
        </div>
      </ContainerInput>
      <Spacer />
      <ContainerInput>
        <div>
          <Flex justify="left" paddingleft="20px">
            <CheckboxInput
              onClick={() => props?.handleServiceSix()}
              type="checkbox"
            />
            <Typography
              opacity="0.7"
              fontWeight="400"
              textAlign="left"
              size="15px"
              lineHeight="18px"
            >
              Serviço 6
            </Typography>
          </Flex>
        </div>
      </ContainerInput>
      <Spacer />
      <ContainerInput>
        <div>
          <Flex justify="left" paddingleft="20px">
            <CheckboxInput
              onClick={() => props?.handleServiceSeven()}
              type="checkbox"
            />
            <Typography
              opacity="0.7"
              fontWeight="400"
              textAlign="left"
              size="15px"
              lineHeight="18px"
            >
              Serviço 7
            </Typography>
          </Flex>
        </div>
      </ContainerInput>
      <Spacer margin="70px" />
      <Flex justify="right">
        <Button bgColor="#ACACAC" onClick={props.previousIndex}>
          VOLTAR
        </Button>
        <Button onClick={props.nextIndex}>PRÓXIMO</Button>
      </Flex>
    </ContainerInfo>
  );
};

export default ContainerInfoThree;
