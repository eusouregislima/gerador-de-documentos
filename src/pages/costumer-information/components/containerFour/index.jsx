import { Flex, Spacer, Typography } from "../../../../styles/styles";
import {
  CheckboxInput,
  ContainerInput,
  EvolutionBarFour,
  Image,
} from "../../styles";
import EvolutionBarImageFour from "../../../../assets/evolutionBarFour.png";
import Logo from "../../../../assets/logo.png";
import Button from "../../../../components/Button";
import ContainerInfo from "../../../../components/container";

const ContainerInfoFour = ({ ...props }) => {
  return (
    <ContainerInfo>
      <Flex direction="column">
        <Image alt="logo-contrato-fácil" src={Logo} />
        <EvolutionBarFour
          alt="barra-de-evolução-quatro"
          src={EvolutionBarImageFour}
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
          Etapa 4/5
        </Typography>
        <Typography
          fontWeight="400"
          textAlign="left"
          size="30px"
          lineHeight="35px"
        >
          Obrigações
        </Typography>
      </Flex>

      <Spacer margin="70px" />
      <Flex>
        <Typography
          opacity="0.7"
          fontWeight="400"
          textAlign="left"
          size="15px"
          lineHeight="18px"
        >
          Selecione quais obrigações deseja emitir no contrato:
        </Typography>
      </Flex>
      <Spacer margin="30px" />

      <ContainerInput>
        <div>
          <Flex justify="left" paddingleft="20px">
            <CheckboxInput
              onClick={() => props?.handleObligationOne()}
              type="checkbox"
            />
            <Typography
              opacity="0.7"
              fontWeight="400"
              textAlign="left"
              size="15px"
              lineHeight="18px"
            >
              Sigilo quanto às informações
            </Typography>
          </Flex>
        </div>
      </ContainerInput>
      <Spacer />

      <ContainerInput>
        <div>
          <Flex justify="left" paddingleft="20px">
            <CheckboxInput
              onClick={() => props?.handleObligationTwo()}
              type="checkbox"
            />
            <Typography
              opacity="0.7"
              fontWeight="400"
              textAlign="left"
              size="15px"
              lineHeight="18px"
            >
              Enviar relatório ao cliente mensalmente
            </Typography>
          </Flex>
        </div>
      </ContainerInput>
      <Spacer margin="240px" />

      <Flex justify="right">
        <Button bgColor="#ACACAC" onClick={props.previousIndex}>
          VOLTAR
        </Button>
        <Button onClick={props.nextIndex}>PRÓXIMO</Button>
      </Flex>
    </ContainerInfo>
  );
};

export default ContainerInfoFour;
