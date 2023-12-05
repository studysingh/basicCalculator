import { useState } from "react";
import "./App.css";
import ButtonContainer from "./component/buttonContainer";
import Container from "./component/container";
import Display from "./component/display";
import Header from "./component/header";

function App() {
  let [displayText, setDisplayText] = useState("");
  let calculateAns = (val ) => {
    let newDisplay;
    if (val === "=" ) {
      newDisplay = evaluateExpression(displayText);
    } else if (val === "C") {
      newDisplay = "";
    } else if(typeof val === "object" && val.type.name === "IoIosBackspace"){
        newDisplay = displayText.slice(0,-1);
    } else {
      newDisplay = displayText + val;
    }
    setDisplayText(newDisplay);
  };
  const evaluateExpression = (expression) => {
    try {
      const result = new Function(`return ${expression}`)();
      return String(result);
    } catch (error) {
      return "Error";
    }
  };
  return (
    <Container>
      <Header></Header>
      <Display displayText={displayText}></Display>
      <ButtonContainer calculateAns={calculateAns}></ButtonContainer>
    </Container>
  );
}

export default App;
