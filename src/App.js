import { useState, useEffect } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React JS'
  ]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefa');

    if(tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage))
    }
  }, []);


  useEffect(()=>{
    //alert('BEM VINDO AO SITE')
    //alert('TESTE')
      localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas]);
 
  function handleRegister(e) {
    e.preventDefault();
    //alert('TESTE');  

    setTarefas([...tarefas, input]);
    setInput('');
  }
  
  return(
    <div>
      <h1>Cadastrando usuário</h1>

      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label><br />
        <input 
          placeholder='Digite uma tarefa' 
          value={input}
          onChange={ (e) => setInput(e.target.value) }
        /><br /> 
        <button type="submit">Registrar</button>
      </form>

      <br/><br/>

      <ul>
        {tarefas.map( tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;





