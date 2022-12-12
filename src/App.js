import React, {userState, userEffect} from 'react';
import './App.css';

function App() {
  const[nro1, setNro1] = userState(0);
  const[nro2, setNro2] = userState(0);
  const[resultado, setResultado] = userState(0);
  const[operacao, setOperacao] = userState('Somar');

  const calcular = () => {
    if(operacao==="Somar")
      return parseFloat(nro1)+parseFloat(nro2);
    else if(operacao === "Subtrair")
      return parseFloat(nro1)-parseFloat(nro2);
    else if(operacao === "Multiplicar")
      return parseFloat(nro1)*parseFloat(nro2);
    else
      return parseFloat(nro1)/parseFloat(nro2);        
  }

  userEffect(()=>{
      setResultado(calcular());
  }, [nro1, nro2, operacao]);

  return (
    <div className="App">
        <h1>Calculadora </h1>
        <label>Primeiro Nro</label>
          <input 
            type = "number" 
            value ={nro1}
            onChange = {(e) => setNro1(e.target.value)}/>
        
        <label>Segundo Nro</label>
        <input 
            type = "number" 
            value ={nro2}
            onChange = {(e) => setNro2(e.target.value)}/>

        <select onChange={(e) => setOperacao(e.target.value)}>
            <option>Somar</option>
            <option>Subtrair</option>
            <option>Multiplicar</option>
            <option>Dividir</option>
        </select>

        <label>Resultado {resultado}</label>
    </div>
  );
}

export default App;
