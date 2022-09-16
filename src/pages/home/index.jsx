import { useHistory } from "react-router-dom";

import Logo from "../../assets/logo.png";

import Button from "../../components/Button";
import { Image } from "./styles";
import { Spacer, Typography, Container, Flex } from "../../styles/styles";

export const Home = () => {
  const history = useHistory();

  function navigateNextPage() {
    history.push("/costumer-information");
  }

  return (
    <Container bg="#DCDCDC">
      <Flex direction="column" justify="center">
        <Image alt="logo-contrato-fácil" src={Logo} />
        <Spacer margin="10px" />
        <Typography fontWeight="400" size="40px" lineHeight="48px">
          🚀 Olá, Tudo bem contigo?
        </Typography>
        <Typography fontWeight="400" size="20px" lineHeight="48px">
          Aplicação adaptada somente para desktop
        </Typography>
        <Spacer margin="10px" />
        <Flex paddingleft="150px" paddingright="150px">
          <Typography fontWeight="200" size="20px" lineHeight="23px">
            Esse é um protótipo do Gerador de Documentos <br />
            Durante o preenchimento das informações seu documento é montado em
            tempo real. <br /> Tecnologias utilizadas: HTML, CSS, Javascript,
            React.js
          </Typography>
        </Flex>
      </Flex>
      <Spacer margin="30px" />
      <Flex>
        <Button bgColor="#000000" onClick={() => navigateNextPage()}>
          COMEÇAR!
        </Button>
      </Flex>
    </Container>
  );
};
