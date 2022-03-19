import logo from './logo.svg';
import './App.css';
import React from 'react';
import {ListaDeNotas} from './components/ListaDeNotas';
import {FormularioCadastro} from './components/FormularioCadastro';

function App() {
  return (
    //<h1>reachtest</h1>
    <section>
    <FormularioCadastro />
    <ListaDeNotas/>
    </section>
  );
}
export default App;
