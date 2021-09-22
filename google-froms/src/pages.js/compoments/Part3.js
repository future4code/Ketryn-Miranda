import React from "react";
// import PerguntaAberta from "./PerguntaAberta";
// import PerguntaOpcoes from "./PerguntaOpcoes";

class Part3 extends React.Component {
  render() {
    return (
      <div>
        <h3>Parte 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <p>5. Por que você não terminou um curso de graduação?</p>
        <input type="text" value={this.state.value} onChange={this.nameChange} />
        <p>6. Qual a unidade de ensino?</p>
        <input type="text" value={this.state.value} onChange={this.nameChange} />
        <select>
          <option selected value="Nenhum">Nenhum</option>
          <option value="Curso técnico">Curso técnico</option>
          <option value="Curso de inglês">Curso de inglês</option>
        </select>
      </div>
    );
  }
}

export default Part3;