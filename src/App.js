import React from 'react';
import styled from 'styled-components';

import Start from './Start';

function App() {
  const [name, setName] = React.useState("애두리");

  return (
    <AppWrap className="App">
      <Start name={name}/>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  width: 95%;
  max-width: 500px;
  margin: auto;
`;

export default App;
