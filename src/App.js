import { useState } from 'react';

import Nome from './components/Nome';

function App() {
  const [aluno, setAluno] = useState('Sujeito Programador')

  function handleChangeName(){
    //alert('TESTE')
    setAluno('Matheus');
  }

  return(
    <div>
      <h1>Componente App</h1>
      <br />
      <h2>Olá: {aluno}</h2>
      <button onClick={ handleChangeName }>
        Mudar Nome
      </button>
    
    
    </div>
  );
}

export default App;

