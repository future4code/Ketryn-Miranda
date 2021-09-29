import React from "react";
// import PerguntaAberta from "./PerguntaAberta";
// import PerguntaOpcoes from "./PerguntaOpcoes";

class Part2 extends React.Component {
  render() {
    return (
      <div>
        <h3>Parte 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <p>5. Qual curso?</p>
        <input type="text" value={this.state.value} onChange={this.nameChange} />
        <p>6. Qual a unidade de ensino?</p>
        <input type="text" value={this.state.value} onChange={this.nameChange} />
      </div>
    );
  }
}

export default Part2;