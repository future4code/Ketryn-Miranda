import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div  className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQEWJhoeMu9BaA/profile-displayphoto-shrink_800_800/0/1570131583829?e=1636588800&v=beta&t=kRl26-O5X8VBNtqWc1NlTrh67ST8bCiL8GBvUL8GS6c" 
          nome="Ketryn" 
          descricao="Sou estudante do curso de Analise e Desenvolvimento de Sistemas pela Unip-GO. Estudando Front-end na Labenu , habilidade em desenvolvimento como HTML, CSS, JavaScript, Node, Git e GitHub desenvolvimento de interface, desenvolvimento web sou apaixonada pela área de TI, foco meus estudos, mais sempre procurando aprender coisas novas."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
          <CardPequeno
            email="ketryn@labenu.com"
            endereco="Rua Labenu"
          />
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Analista Financeiro" 
          descricao="Análise de contato, abertura de contas, vendas de títulos, e atendimento ao cliente!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
