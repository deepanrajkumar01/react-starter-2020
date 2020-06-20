import React from "react";
import Styled from "styled-components";

const Title = Styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

const App = () => {
  return (
    <div>
      <Tile>Hello world</Tile>
    </div>
  );
};

export default App;
