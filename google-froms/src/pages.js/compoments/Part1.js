import React from "react";
import BoxOption from "./BoxOption";
// import PerguntaAberta from "./PerguntaAberta";
// import PerguntaOpcoes from "./PerguntaOpcoes";

class Part1 extends React.Component {
    render() {
        return (
        <div className="App">
            <h3> Parte 1 - DADOS GERAIS</h3>
            <form>
              <label>
                <p>1. Qual o seu nome?</p>
                <BoxOption/>
                <p>2. Qual o sua idade?</p>
                <BoxOption/>
                <p>3. Qual o seu email?</p>
                <BoxOption/>
                <p>4. Qual a sua escolaridade?</p>
              </label>
              <select>
                <option selected value="Ensino médio incompleto">Ensino médio incompleto</option>
                <option value="Ensino médio completo">Ensino médio completo</option>
                <option value="Ensino supperior incompleto">Ensino superior incompleto</option>
                <option value="Ensino supperior completo">Ensino superior completo</option>
              </select>
              <br/>
               <input type="submit" value="Próxima Parte" />
            </form>
        </div>
        )
    }
}

export default Part1;