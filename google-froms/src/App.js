import React from "react";

export default class Apps extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.nameChange = this.nameChange.bind(this);
    this.idadeChange = this.idadeChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  proximaPart = () => {
    this.setState({ Part: this.state.Part + 1 });
  };

    render() {
        return (
        <div className="App">
            <h3> Part 1 - DADOS GERAIS</h3>
            <form>
              <label>
                <p>1. Qual o seu nome?</p>
                <input type="text" value={this.state.value} onChange={this.nameChange} />
                <p>2. Qual o sua idade?</p>
                <input type="text" value={this.state.value} onChange={this.idadeChange} />
                <p>3. Qual o seu email?</p>
                <input type="text" value={this.state.value} onChange={this.emailChange} />
                <p>4. Qual a sua escolaridade?</p>
              </label>
              <select>
                <option selected value="Ensino médio incompleto">Ensino médio incompleto</option>
                <option value="Ensino médio completo">Ensino médio completo</option>
                <option value="Ensino supperior incompleto">Ensino superior incompleto</option>
                <option value="Ensino supperior completo">Ensino superior completo</option>
              </select>
              <br />
              {this.state.Part !== 3 && (
              <button onClick={this.proximaPart}>Próxima Part</button>
              )}
            </form>
        </div>
        )
    }
     
}

