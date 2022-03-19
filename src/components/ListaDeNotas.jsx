import React from "react";
class ListaDeNotas extends Component{

    render(){
        return(
            <div>
                <h1>Lista de Notas</h1>
                <ul>
                    {
                        this.props.notas.map((nota) => {
                            return(
                                <li key={nota.id}>
                                    {nota.titulo}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    
}