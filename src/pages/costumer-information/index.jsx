import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { PagePaperSheet } from "../../components/paper-sheet";
import { Flex, Spacer, Typography, Container } from "../../styles/styles";

import ContainerInfoOne from "./components/containerOne";
import ContainerInfoTwo from "./components/containerTwo";
import ContainerInfoThree from "./components/containerThree";
import ContainerInfoFour from "./components/containerFour";
import ContainerInfoFive from "./components/containerFive";

export const CostumerInformation = () => {
  const [costumerName, setCostumerName] = useState("");
  const [costumerCpf, setCostumerCpf] = useState("");
  const [costumerAddress, setCostumerAddress] = useState("");
  const [costumerNumber, setCostumerNumber] = useState("");
  const [costumerCep, setCostumerCep] = useState("");
  const [costumerDistrict, setCostumerDistrict] = useState("");
  const [costumerCity, setCostumerCity] = useState("");
  const [costumerUf, setCostumerUf] = useState("");

  const [yourName, setYourName] = useState("");
  const [yourCpf, setYourCpf] = useState("");
  const [yourAddress, setYourAddress] = useState("");
  const [yourNumber, setYourNumber] = useState("");
  const [yourCep, setYourCep] = useState("");
  const [yourDistrict, setYourDistrict] = useState("");
  const [yourCity, setYourCity] = useState("");
  const [yourUf, setYourUf] = useState("");

  const [serviceOne, setServiceOne] = useState("");
  const [serviceTwo, setServiceTwo] = useState("");
  const [serviceThree, setServiceThree] = useState("");
  const [serviceFour, setServiceFour] = useState("");
  const [serviceFive, setServiceFive] = useState("");
  const [serviceSix, setServiceSix] = useState("");
  const [serviceSeven, setServiceSeven] = useState("");

  const [obligationOne, setObligationOne] = useState("");
  const [obligationTwo, setObligationTwo] = useState("");

  const [priceService, setPriceService] = useState("");
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");

  const [showContainerOne, setShowContainerOne] = useState();
  const [showContainerTwo, setShowContainerTwo] = useState();
  const [showContainerThree, setShowContainerThree] = useState();
  const [showContainerFour, setShowContainerFour] = useState();
  const [showContainerFive, setShowContainerFive] = useState();

  const history = useHistory();

  function navigateFinalPage() {
    history.push("/final-page");
  }

  const handleCostumerCpf = (value) => {
    setCostumerCpf(value.target.value);
  };
  const handleCostumerName = (value) => {
    setCostumerName(value.target.value);
  };
  const handleCostumerAddress = (value) => {
    setCostumerAddress(value.target.value);
  };
  const handleCostumerNumber = (value) => {
    setCostumerNumber(value.target.value);
  };
  const handleCostumerCep = (value) => {
    setCostumerCep(value.target.value);
  };
  const handleCostumerDistrict = (value) => {
    setCostumerDistrict(value.target.value);
  };
  const handleCostumerCity = (value) => {
    setCostumerCity(value.target.value);
  };
  const handleCostumerUf = (value) => {
    setCostumerUf(value.target.value);
  };

  const handleYourCpf = (value) => {
    setYourCpf(value.target.value);
  };
  const handleYourName = (value) => {
    setYourName(value.target.value);
  };
  const handleYourAddress = (value) => {
    setYourAddress(value.target.value);
  };
  const handleYourNumber = (value) => {
    setYourNumber(value.target.value);
  };
  const handleYourCep = (value) => {
    setYourCep(value.target.value);
  };
  const handleYourDistrict = (value) => {
    setYourDistrict(value.target.value);
  };
  const handleYourCity = (value) => {
    setYourCity(value.target.value);
  };
  const handleYourUf = (value) => {
    setYourUf(value.target.value);
  };

  const handlePriceService = (value) => {
    setPriceService(value.target.value);
  };
  const handleInitialDate = (value) => {
    setInitialDate(value.target.value);
  };
  const handleFinalDate = (value) => {
    setFinalDate(value.target.value);
  };

  const handleServiceOne = () => {
    setServiceOne(
      "– Aqui vai a descrição número um dos serviços a serem prestados"
    );
  };
  const handleServiceTwo = () => {
    setServiceTwo(
      "– Aqui vai a descrição número dois dos serviços a serem prestados"
    );
  };
  const handleServiceThree = () => {
    setServiceThree(
      "– Aqui vai a descrição número três dos serviços a serem prestados"
    );
  };
  const handleServiceFour = () => {
    setServiceFour(
      "– Aqui vai a descrição número quatro dos serviços a serem prestados"
    );
  };
  const handleServiceFive = () => {
    setServiceFive(
      "– Aqui vai a descrição número cinco dos serviços a serem prestados"
    );
  };
  const handleServiceSix = () => {
    setServiceSix(
      "– Aqui vai a descrição número seis dos serviços a serem prestados"
    );
  };
  const handleServiceSeven = () => {
    setServiceSeven(
      "– Aqui vai a descrição número sete dos serviços a serem prestados"
    );
  };

  const handleObligationOne = () => {
    setObligationOne(
      "– Não divulgar em mídia ou internet, sem prévia autorização da CONTRATANTE, dados da CONTRATANTE, tais como dados de website e redes sociais."
    );
  };

  const handleObligationTwo = () => {
    setObligationTwo(
      "– Fornecer relatórios, constando resultados técnicos e estatísticos sobre a consecução do projeto, devendo ser entregue mensalmente para a CONTRATANTE até o 5º dia útil do mês, a começar do segundo mês de projeto."
    );
  };

  return (
    <Container>
      <Flex>
        <ContainerInfoOne
          handleCostumerCpf={(value) => handleCostumerCpf(value)}
          handleCostumerName={(value) => handleCostumerName(value)}
          handleCostumerAddress={(value) => handleCostumerAddress(value)}
          handleCostumerNumber={(value) => handleCostumerNumber(value)}
          handleCostumerCep={(value) => handleCostumerCep(value)}
          handleCostumerDistrict={(value) => handleCostumerDistrict(value)}
          handleCostumerCity={(value) => handleCostumerCity(value)}
          handleCostumerUf={(value) => handleCostumerUf(value)}
        />

        <ContainerInfoTwo
          handleYourCpf={(value) => handleYourCpf(value)}
          handleYourName={(value) => handleYourName(value)}
          handleYourAddress={(value) => handleYourAddress(value)}
          handleYourNumber={(value) => handleYourNumber(value)}
          handleYourCep={(value) => handleYourCep(value)}
          handleYourDistrict={(value) => handleYourDistrict(value)}
          handleYourCity={(value) => handleYourCity(value)}
          handleYourUf={(value) => handleYourUf(value)}
        />

        <ContainerInfoThree
          handleServiceOne={(value) => handleServiceOne(value)}
          handleServiceTwo={(value) => handleServiceTwo(value)}
          handleServiceThree={(value) => handleServiceThree(value)}
          handleServiceFour={(value) => handleServiceFour(value)}
          handleServiceFive={(value) => handleServiceFive(value)}
          handleServiceSix={(value) => handleServiceSix(value)}
          handleServiceSeven={(value) => handleServiceSeven(value)}
        />
        <ContainerInfoFour
          handleObligationOne={(value) => handleObligationOne(value)}
          handleObligationTwo={(value) => handleObligationTwo(value)}
        />

        <ContainerInfoFive
          handlePriceService={(value) => handlePriceService(value)}
          handleInitialDate={(value) => handleInitialDate(value)}
          handleFinalDate={(value) => handleFinalDate(value)}
          navigateFinalPage={() => navigateFinalPage()}
        />

        <PagePaperSheet>
          <Flex direction="column">
            <Spacer margin="30px" />
            <Typography fontWeight="700" size="30px" lineHeight="47px">
              Documento de Prestação de Serviços
            </Typography>
          </Flex>
          <br />
          <Typography
            fontWeight="300"
            margin="5px 50px"
            textAlign="left"
            uppercase
          >
            <b>CONTRATANTE:</b> {costumerName}
            <span>, CPF/CNPJ Nº</span> {costumerCpf}
            <span>, com sede em: </span>
            {costumerAddress}
            <span>, nº</span> {costumerNumber}
            <span>, </span> {costumerCep}
            <span>,</span> {costumerDistrict}
            <span>,</span>
            {costumerCity}
            <span> - </span>
            {costumerUf}
            <span>.</span>
          </Typography>
          <Typography
            fontWeight="300"
            margin="5px 50px"
            textAlign="left"
            uppercase
          >
            <b>CONTRATADA:</b> {yourName}
            <span>, CPF/CNPJ Nº</span> {yourCpf}
            <span>, com sede em: </span>
            {yourAddress}
            <span>, nº</span> {yourNumber}
            <span>, </span> {yourCep}
            <span>,</span> {yourDistrict}
            <span>,</span>
            {yourCity}
            <span> - </span>
            {yourUf}
            <span>.</span>
          </Typography>
          <Spacer margin="30px" />
          <Typography fontWeight="300" margin="5px 50px" textAlign="left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            soluta illum doloribus obcaecati ut assumenda id, eum voluptatibus.
            Rerum assumenda fugit consequuntur sequi reiciendis. Velit, sint
            assumenda. Culpa, explicabo vitae!
          </Typography>
          <Spacer margin="20px" />
          <Typography>
            <b>SERVIÇOS PRESTADOS</b>
          </Typography>
          <Typography fontWeight="300" margin="20px 50px" textAlign="left">
            <Spacer margin="20px" /> {serviceOne}
            <Spacer margin="20px" /> {serviceTwo}
            <Spacer margin="20px" /> {serviceThree}
            <Spacer margin="20px" /> {serviceFour}
            <Spacer margin="20px" /> {serviceFive}
            <Spacer margin="20px" /> {serviceSix}
            <Spacer margin="20px" /> {serviceSeven}
            <Spacer margin="50px" />
            O(a) {yourName} não se responsabiliza por eventuais problemas
            causados por terceiros durante o processo.
            <Spacer margin="20px" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            corporis officia blanditiis earum illo doloremque distinctio fugit
            dolor minus! Doloribus nisi officiis minus consequuntur ipsa fuga ea
            beatae placeat rem!
            <Spacer margin="30px" />
          </Typography>
          <Typography>
            <b>OBRIGAÇÕES</b>
          </Typography>
          <Spacer margin="30px" />
          <Typography fontWeight="300" margin="20px 50px" textAlign="left">
            <Spacer margin="20px" />
            {obligationOne}
            <Spacer margin="20px" />
            {obligationTwo}
          </Typography>
          <Typography>
            <b>VALORES E DATAS </b>
          </Typography>
          <Spacer margin="20px" />
          <Typography fontWeight="300" margin="20px 50px" textAlign="left">
            O valor cobrado pelos Serviços será de R${priceService}.
            <Spacer />
            Esse documento é válido de {initialDate} até o dia {finalDate}
          </Typography>
          <Typography uppercase fontWeight="300" margin="20px 50px">
            <Spacer margin="50px" />
            ____________________________________________________________ <br />
            {costumerName}
            <Spacer margin="50px" />
            ____________________________________________________________ <br />
            {yourName}
            <Spacer margin="50px" />
            {yourCity} - {yourUf}, {initialDate}
          </Typography>
        </PagePaperSheet>
      </Flex>
    </Container>
  );
};
