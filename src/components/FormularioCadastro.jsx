import Reactf, { Component } from "react";

export class FormularioCadastro extends Component {
    render() {
        return(
            <form>
      <input type="text" placehoder="Titulo"/>
      <textarea placehoder="Escreva sua nota..."
      />
      <button>Criar nota</button>
    </form>
        );
    }
} 