import React from "react";

export default class App extends React.Component { 
    render() {
        return (
        <div className="pag-forms">
            <h3> ETAPA 1 - DADOS GERAIS</h3>
            <form>
              <label>
                <p>1. Qual o seu nome?</p>
                <input type="text" name="name" />
                <p>2. Qual o sua idade?</p>
                <input type="text" name="idade" />
                <p>3. Qual o seu email?</p>
                <input type="text" name="name" />
              </label>
               <input type="submit" value="Próxima etapa" />
            </form>
        </div>
        )
    }
     
}

