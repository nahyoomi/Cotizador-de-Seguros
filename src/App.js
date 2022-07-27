import React, {useState} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import styled from '@emotion/styled';
import Resumen from './Components/Resumen';






const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [ resumen, guardarResumen ] = useState({});

  const {datos} = resumen;
  return (
  <Contenedor>
    <Header 
      titulo='Cotizador de Seguros'
    />

    <ContenedorFormulario>
      <Formulario 
        guardarResumen = {guardarResumen}
      />
      {datos}
    </ContenedorFormulario>
  </Contenedor>
  );
}

export default App;
