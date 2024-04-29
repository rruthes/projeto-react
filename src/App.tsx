import { useState } from "react";
import "./App.css";
import PrimaryInput from "./components/input/PrimaryInput";
import { Button, Spacer } from "@chakra-ui/react";

function App() {
  //usar varios states não é bom, mas nesse caso é mais prático
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  return (
    <div className="container">
      <form>
        <div className="name-form-container">
          <PrimaryInput
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            name="firstName"
            label="Primeiro nome"
            placeholder="Rafael"
          />
          <PrimaryInput
            value={secondName}
            onChange={(event) => setSecondName(event.target.value)}
            name="secondName"
            label="Sobrenome"
            placeholder="Ruthes"
          />
        </div>
        <Spacer height="4" />
        <PrimaryInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          label="Email "
          placeholder="exemplo@mail.com"
        />
        <Spacer height="4" />
        <Button colorScheme="green" width="100%" marginTop="4">
          Enviar
        </Button>
      </form>
      <Spacer width="6" maxWidth="6" />
      <div className="product-details">
        <h2>Assinatura mensal</h2>
        <Spacer height="4" />
        <p>Valor total: </p>
        <span>R$ 250,00</span>
        <Spacer height="4" />
        <p>
          Regras: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

export default App;
