import React from 'react';
import Cabecalho from './componentes/cabecalho';
import Rodape from './componentes/rodape';
import Array from './componentes/array';
import { Button , Icon , ButtonToolbar , Panel , PanelGroup } from 'rsuite';
import './componentes/livros.css';

import 'rsuite/dist/styles/rsuite-default.css'
import Objeto from './componentes/objeto';
import Livros from './componentes/livros';

function App() {
  return (
    <div>
<Cabecalho titulo="Livros" />
    <Livros />
    {/*<Objeto />*/}
    {/*<p> Vamos estudar o React para entender melhor o React Native</p>
   
    <ButtonToolbar>
      <Button color = "cyan"><Icon icon="save" /> </Button>
      <Button color = "violet"><Icon icon="refresh" /> </Button>
      <Button color = "blue"><Icon icon="hand-o-left" /> </Button>
    </ButtonToolbar>

    <Rodape />*/}
</div>
  );
}

export default App;