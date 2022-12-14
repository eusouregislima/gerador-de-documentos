import { Flex, Spacer, Typography } from "../../../../styles/styles";
import {
  ContainerInput,
  EvolutionBar,
  Input,
  ImageLine,
  InputLabel,
  Select,
  Image,
} from "../../styles";
import EvolutionBarImage from "../../../../assets/evolutionBar.png";
import Logo from "../../../../assets/logo.png";
import Line from "../../../../assets/line.png";
import Button from "../../../../components/Button";
import ContainerInfo from "../../../../components/container";

const ContainerInfoOne = ({ ...props }) => {
  return (
    <ContainerInfo>
      <Flex direction="column">
        <Image alt="logo-contrato-fácil" src={Logo} />

        <EvolutionBar alt="barra-de-evolução" src={EvolutionBarImage} />
        <Spacer margin="5px" />
      </Flex>

      <Flex direction="column" align="left" gap="0px">
        <Typography
          primary="#D3D6DE"
          textAlign="left"
          size="16px"
          lineHeight="19px"
        >
          Etapa 1/5
        </Typography>
        <Typography
          fontWeight="400"
          textAlign="left"
          size="30px"
          lineHeight="35px"
        >
          Informações do cliente
        </Typography>
      </Flex>
      <Spacer />

      <ContainerInput>
        <div>
          <Flex align="left" direction="column" gap="0px">
            <Input
              autoFocus
              onChange={(value) => props?.handleCostumerName(value)}
              placeholder="Nome/Razão Social"
            />
            <ImageLine alt="line" src={Line} />
            <InputLabel>Digite um Nome ou Razão Social válido!</InputLabel>
          </Flex>
        </div>
      </ContainerInput>
      <Spacer margin="15px" />
      <ContainerInput>
        <div>
          <Flex align="left" direction="column" gap="0px">
            <Input
              placeholder="CPF/CNPJ"
              onChange={(value) => props?.handleCostumerCpf(value)}
            />
            <ImageLine alt="line" src={Line} />
            <InputLabel>Digite um CPF ou um CNPJ válido!</InputLabel>
          </Flex>
        </div>
      </ContainerInput>
      <Spacer margin="15px" />
      <ContainerInput>
        <div>
          <Flex align="left" direction="column" gap="5px">
            <Input
              onChange={(value) => props?.handleCostumerAddress(value)}
              placeholder="Endereço"
              width="18vw"
            />
            <ImageLine alt="line" src={Line} width="18vw" />
            <InputLabel>Digite um Endereço válido!</InputLabel>
          </Flex>
        </div>
        <div>
          <Flex align="left" direction="column" gap="0px">
            <Input
              onChange={(value) => props?.handleCostumerNumber(value)}
              type="number"
              placeholder="Número"
              width="5vw"
            />
            <ImageLine alt="line" src={Line} width="5vw" />
            <InputLabel>Digite Número válido!</InputLabel>
          </Flex>
        </div>
      </ContainerInput>
      <Spacer margin="15px" />
      <ContainerInput>
        <div>
          <Flex align="left" direction="column" gap="5px">
            <Input
              onChange={(value) => props?.handleCostumerCep(value)}
              placeholder="CEP"
              width="13vw"
            />
            <ImageLine alt="line" src={Line} width="13vw" />
            <InputLabel>Digite um CEP válido!</InputLabel>
          </Flex>
        </div>
        <div>
          <Flex align="left" direction="column" gap="0px">
            <Input
              onChange={(value) => props?.handleCostumerDistrict(value)}
              placeholder="Bairro"
              width="10vw"
            />
            <ImageLine alt="line" src={Line} width="10vw" />
            <InputLabel>Digite Bairro válido!</InputLabel>
          </Flex>
        </div>
      </ContainerInput>
      <Spacer margin="15px" />
      <ContainerInput>
        <div>
          <Flex align="left" direction="column" gap="5px">
            <Input
              onChange={(value) => props?.handleCostumerCity(value)}
              placeholder="Cidade"
              width="18vw"
            />
            <ImageLine alt="line" src={Line} width="18vw" />
            <InputLabel>Digite um nome de Cidade válido!</InputLabel>
          </Flex>
        </div>
        <div>
          <Flex align="left" direction="column" gap="0px">
            <Select
              onChange={(value) => props?.handleCostumerUf(value)}
              name="UF"
            >
              <option value="">UF</option>
              <option>AC</option>
              <option>AL</option>
              <option>AP</option>
              <option>AM</option>
              <option>BA</option>
              <option>CE</option>
              <option>DF</option>
              <option>ES</option>
              <option>GO</option>
              <option>MA</option>
              <option>MS</option>
              <option>MT</option>
              <option>MG</option>
              <option>PA</option>
              <option>PB</option>
              <option>PR</option>
              <option>PE</option>
              <option>PI</option>
              <option>RJ</option>
              <option>RN</option>
              <option>RS</option>
              <option>RO</option>
              <option>RR</option>
              <option>SC</option>
              <option>SP</option>
              <option>SE</option>
              <option>TO</option>
            </Select>
            <ImageLine alt="line" src={Line} width="5vw" />
            <InputLabel>Selecione uma UF!</InputLabel>
          </Flex>
        </div>
      </ContainerInput>
      <Spacer margin="15px" />

      <Flex justify="right">
        <Button onClick={props.nextIndex}>PRÓXIMO</Button>
      </Flex>
    </ContainerInfo>
  );
};

export default ContainerInfoOne;
