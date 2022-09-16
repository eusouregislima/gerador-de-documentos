import { Flex, Spacer, Typography } from "../../../../styles/styles";
import {
  CheckboxInput,
  ContainerInput,
  EvolutionBarFive,
  Image,
  InputLabel,
  Input,
  ImageLine,
  InputDate,
} from "../../styles";

import EvolutionBarImageFive from "../../../../assets/evolutionBarFive.png";
import Logo from "../../../../assets/logo.png";
import Line from "../../../../assets/line.png";
import Button from "../../../../components/Button";
import ContainerInfo from "../../../../components/container";

const ContainerInfoFive = ({ onClick, ...props }) => {
  return (
    <ContainerInfo primary>
      <Flex direction="column">
        <Image alt="logo-contrato-fácil" src={Logo} />
        <EvolutionBarFive
          alt="barra-de-evolução-cinco"
          src={EvolutionBarImageFive}
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
          Etapa 5/5
        </Typography>
        <Typography
          fontWeight="400"
          textAlign="left"
          size="30px"
          lineHeight="35px"
        >
          Valores e Datas
        </Typography>
      </Flex>

      <Spacer margin="30px" />
      <Flex>
        <Typography
          opacity="0.7"
          fontWeight="400"
          textAlign="left"
          size="15px"
          lineHeight="23px"
        >
          Valor mensal dos serviços prestados:
        </Typography>
      </Flex>
      <Spacer margin="10px" />
      <div>
        <InputLabel display>Valor dos Serviços</InputLabel>
        <Flex justify="left" direction="column" gap="0px">
          <Input
            onChange={(value) => props?.handlePriceService(value)}
            aria-label="Valor dos Serviços"
            placeholder="R$0,00"
          />
          <ImageLine alt="line" src={Line} />
        </Flex>
      </div>
      <Spacer margin="30px" />
      <Flex>
        <Typography
          opacity="0.7"
          fontWeight="400"
          textAlign="left"
          size="15px"
          lineHeight="23px"
        >
          Selecione as datas de início e término da validade do documento
        </Typography>
      </Flex>
      <Spacer />
      <Flex
        justify="space-between"
        paddingleft="10px"
        paddingright="10px"
        gap="0px"
      >
        <div>
          <InputLabel display>Início</InputLabel>
          <InputDate
            onChange={(value) => props?.handleInitialDate(value)}
            type="date"
          />
        </div>
        <div>
          <InputLabel display>Vencimento</InputLabel>
          <InputDate
            onChange={(value) => props?.handleFinalDate(value)}
            type="date"
          />
        </div>
      </Flex>
      <Spacer margin="50px" />
      <ContainerInput>
        <div>
          <Flex justify="left" paddingleft="20px">
            <CheckboxInput type="radio" name="this" checked />
            <Typography
              opacity="0.7"
              fontWeight="400"
              textAlign="left"
              size="15px"
              lineHeight="23px"
            >
              Este documento será assinado manualmente
            </Typography>
          </Flex>
        </div>
      </ContainerInput>
      <Spacer />

      <ContainerInput>
        <div>
          <Flex justify="left" paddingleft="20px">
            <CheckboxInput type="radio" name="this" disabled />
            <Typography
              opacity="0.7"
              fontWeight="400"
              textAlign="left"
              size="15px"
              lineHeight="18px"
            >
              Este documento será assinado digitalmente [Indisponível]
            </Typography>
          </Flex>
        </div>
      </ContainerInput>

      <Spacer margin="30px" />

      <Flex justify="right">
        <Button bgColor="#ACACAC" onClick={props.previousIndex}>
          VOLTAR
        </Button>
        <Button onClick={() => props?.navigateFinalPage()}>FINALIZAR</Button>
      </Flex>
    </ContainerInfo>
  );
};

export default ContainerInfoFive;
