import React from "react";
import { useHistory } from "react-router-dom";
import { MessageFinal, WhatsImage, Link } from "./styles";
import { Flex, Spacer, Typography } from "../../styles/styles";
import Button from "../../components/Button";
import Whats from "../../assets/whats.svg";

function MessageOfSucess({ onClick, ...props }) {
  const history = useHistory();

  function goToStart() {
    history.push("/");
  }

  return (
    <Flex direction="column" justify="center">
      <MessageFinal>
        <Spacer margin="35px" />
        <Typography
          fontWeight="600"
          textAlign="center"
          size="32px"
          lineHeight="38px"
        >
          Parabéns! 🚀 <br />
          Você chegou ao final.
        </Typography>
        <Spacer margin="35px" />
        <Typography
          opacity="0.7"
          fontWeight="400"
          textAlign="center"
          size="15px"
          lineHeight="23px"
        >
          Aplicação com finalidade demonstrativa.
        </Typography>
        <Spacer margin="40px" />
        <Flex>
          <Button>
            <Typography
              fontWeight="700"
              textAlign="center"
              size="15px"
              lineHeight="23px"
            >
              <a target="_blank" href="https://github.com/eusouregislima">
                CONHEÇA MEU GITHUB
              </a>
            </Typography>
          </Button>
        </Flex>
        <Spacer margin="40px" />
        <Typography
          opacity="0.7"
          fontWeight="400"
          textAlign="center"
          size="15px"
          lineHeight="23px"
        >
          O gerador de documentos foi útil para você? <br />
          Compartilhe com seus amigos!
        </Typography>
        <Spacer margin="40px" />
        <Flex>
          <Button>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?text=Acabei%20de%20gerar%20um%20contrato%20no%20site%20http%3A%2F%2F%2F"
            >
              <Link color="white" bgColor="transparent">
                <Flex gap="5px" align="center" justify="center">
                  <WhatsImage alt="whats" src={Whats} />
                  COMPARTILHAR
                </Flex>
              </Link>
            </a>
          </Button>
        </Flex>
        <Spacer margin="40px" />
        <Flex>
          <Link color="white">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/regis-lima/"
              weight="400"
            >
              CLIQUE AQUI PARA <br />
              VISITAR O MEU LINKEDIN
            </a>
          </Link>
        </Flex>
        <Spacer margin="30px" />
        <Flex>
          <Link onClick={goToStart} color="black">
            🔃Reiniciar
          </Link>
        </Flex>
      </MessageFinal>
    </Flex>
  );
}

export default MessageOfSucess;
