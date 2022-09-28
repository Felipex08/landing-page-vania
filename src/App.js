import './App.css';

import imageDuasComFundo from './imagem-com-fundo-das-duas.jpeg';
import logo from './icon-sem-fundo.png';
import imagemErika from './imagem-Erika.jpeg';
import imagemVania from './imagem-vania.jpeg';
import iconeCartao from './icone-cartao-sem-fundo.png';
import iconeBoleto from './icone-boleto-sem-fundo.png';
import iconePix from './icone-pix-sem-fundo.png';
import iconeGarantia from './icone-garantia-sem-fundo.png';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">

          <div className="cabecalho" id="topo-pagina">
            <div className="escrita-inicial">
              <h3>A NUTRIÇÃO E A PSICOLOGIA SE UNIRAM PARA TE AJUDAR NO SEU PROCESSO DE EMAGRECIMENTO.</h3>
              <p>Descubra como você pode emagrecer de forma consciente e eficaz em apenas 2 semanas!</p>
            </div>
          </div>

          <div className="corpo-pagina">
            <div className="imagem-vania-erika-com-fundo">
              <img src={imageDuasComFundo} alt='Foto das duas profissionais'/>
            </div>
            <div className="conteudo-corpo-pagina">
              <div className="texto">
                <h2>Venha fazer parte da nossa TERCEIRA TURMA!</h2>
              </div>

              <div>
                <button className="botao-compra">Eu quero começar agora!</button>
              </div>
              
            </div>
          </div>

          
          <div className="ondulacao">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#98a680" fill-opacity="1" d="M0,96L80,85.3C160,75,320,53,480,85.3C640,117,800,203,960,208C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
          </div>
            
          <div className="como-funciona">

            <div className="titulo-como-funciona">
              <h3>Como o DESAFIO DA CETOGÊNICA vai funcionar:</h3>
            </div>

            <br></br>
            <br></br>

            <div className="escrita-e-imagem">
              <div className="escrita-como-funciona">
                <ul>
                  <li>Serão 14 dias de desafio com informações nutricionais e de como lidar com a mente e as emoções durante o processo, que será conduzido pela Nutricionista Érica Moreira e a Psicóloga Vânia Gonzalez.</li>
                  <li>Todo o conteúdo será divulgado em um perfil fechado e exclusivo no Instagram. Além do acesso aos materiais, cardápios e ferramentas, os participantes poderão assistir a 8 LIVES com orientação Nutricional e Psicológica e 1 aula sobre Comportamento Alimentar.</li>
                </ul>
              </div>
              <div className="imagem-como-funciona">
                <img src={imageDuasComFundo} alt='Foto das duas profissionais'/>
              </div>
            </div>

            <div className="objetivo-como-funciona">
              <h2>Objetivo:</h2>
              <p>Ensinar a trabalhar o CORPO e a MENTE para atingir o OBJETIVO de EMAGRECER em apenas 2 semanas.</p>
            </div>
            
          </div>

          <div className="sobre-as-duas">
            <h2>Desafio desenvolvido por 2 especialistas em emagrecimento que lidam diariamente com pessoas com as mesmas dificuldades que você!</h2>

            <div className="bloco-erika">
              <img src={imagemErika} alt="Foto da Érika"/>
              <div className="bloco-erika-direita">
                <h2>ÉRICA MOREIRA</h2>
                <ul>
                  <li>Nutricionista clínica funcional.</li>
                  <li>Mentora de emagrecimento com mais de 4 turmas lançadas com sucesso.</li>
                  <li>Forte presença nas redes sociais, sendo referência em nutrição e emagrecimento.</li>
                </ul>
              </div>
            </div>

            <div className="bloco-vania">
              <img src={imagemVania} alt="Foto da Vânia"/>
              <div className="bloco-vania-direita">
                <h2>VÂNIA GONZALEZ</h2>
                <ul> 
                  <li>Psicóloga especialista em emagrecimento, transtornos alimentares e obesidade.</li>
                  <li>Realizou workshop sobre como trabalhar a mente e o corpo nos EUA e no Brasil.</li>
                  <li>Mentora de emagrecimento consciente focada em resultados. Já ajudou milhares de pessoas pelo mundo.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="depoimentos">
            <h1>DEPOIMENTOS</h1>

            <div className="comentarios">
              <span>dwdwdwdwdwdd</span>
            </div>

            <div className="comentarios">
              <span>dwdwdwdwdwd</span>
            </div>

            <div className="comentarios">
              <span>dwdwdwwdwd</span>
            </div>

            <div className="parte-final-depoimentos">
              <p>Basta seguir todas as orientações e ver os resultados.</p>
              <h2>AGORA É A SUA VEZ DE EMAGRECER!</h2>
              <button className="botao-compra">Quero emagrecer!</button>
            </div>
          </div>

          <div className="sexta-parte">
            <ul>
              <li>Facilidade e flexibilidade.</li>
              <li>Perfil secreto no Instagram.</li>
              <li>Acesso quando e onde quiser, utilizando seu celular, computador ou tablet.</li>
            </ul>
          </div>

          <div className="pagamento">
            <div className="metodos-pagamento">
              <h2>MÉTODOS DE PAGAMENTO</h2>
              
              <div className="opcoes-pagamento">
                <div className="span-opcoes-pagamento">
                  <span>12x de R$ 9,90</span>
                </div>
                
                <div className="icones-pagamento">
                  <img src={iconeCartao} alt="Ícone de cartão de crédito"/>
                  <span>Cartão</span>
                </div>
                
                <div className="icones-pagamento">
                  <img src={iconeBoleto} alt="Ícone de boleto bancário"/>
                  <span>Boleto</span>
                </div>

                <div className="icones-pagamento">
                  <img className="imagem-pix" src={iconePix} alt="Ícone de Pix"/>
                  <span>Pix</span>
                </div>

              </div>
              
              <button>Garanta sua vaga</button>
            </div>
          </div>

          <div className="garantia">
            <div className="garantia-texto-e-imagem">
              <div className="bloco-esquerdo-garantia">
                <span>Nós temos tanta certeza de que iremos te ajudar que se você não gostar em 7 <b>dias</b> poderá nos enviar um e-mail solicitando o reembolso e devolveremos 100% do valor pago!</span>
                <h2>Clique abaixo e faça o teste!</h2>
              </div>

              <div className="bloco-direito-garantia">
                <img src={iconeGarantia} alt="Ícone de garantia" />
              </div>
            </div>
            
            <button>Quero testar agora!</button>
          </div>

          <div className="duvidas-frequentes">
            <div className="duvidas">
              <div className="titulo-duvidas">
                <h2>DÚVIDAS FREQUENTES</h2>
              </div>

              <div className="topicos-duvidas">
                <h3>1 - Onde será o desafio?</h3>
                <span>Todo o conteúdo será colocado em um perfil secreto no Instagram. Você será adicionada após a confirmação do pagamento.</span>
                
                <h3>2 - Como vou receber o acesso ao desafio?</h3>
                <span>Assim que seu pagamento for aprovado, você receberá um e-mail avisando que já poderá entrar no perfil secreto. Lembre-se de verificar a sua caixa de spam.</span>
                
                <h3>3 - Paguei com boleto. Quando vou receber meu acesso?</h3>
                <span>Se você efetuou o pagamento por boleto, é preciso esperar até 48 horas para identificação bancária e você receberá o e-mail automaticamente.</span>
                
                <h3>4 - Fiz minha inscrição e não recebi o e-mail. O que devo fazer?</h3>
                <span>Ao fazer a sua inscrição, lembre-se de verificar se digitou o seu e-mail e o perfil do Instagram corretamente. Caso não tenha recebido, entre em contato com a equipe pelo e-mail contato@vaniagonzalez.com.br.</span>
                
                <h3>5 - Por quanto tempo terei acesso?</h3>
                <span>Você poderá acessar o perfil secreto e todo material por 1 ano a partir da data de início do desafio.</span>
                
                <h3>6 - E se eu tiver dúvidas sobre o conteúdo do desafio?</h3>
                <span>As especialistas Érica e Vânia farão LIVES e estarão presente nos stories e no feed do perfil do desafio.</span>

              </div>
            </div>
          </div>

          <div className="rodape">
            <div className="logo">
              <img src={logo} alt='Logo da aplicação'></img>
            </div>

            <div className="bloco-direito-rodape">

              <div className="botao-rodape">
                <button className="botao-voltar-ao-topo"><a href="#topo-pagina">Voltar ao topo</a></button>
              </div>
              
              <div className="texto-rodape">
                <p><b>AVISO</b>: O desafio não substitui acompanhamento médico, psicológico e/ou nutricional.</p>
                <p>O método aqui demonstrado não deve ser interpretado como uma promessa.</p>
                <br></br>
                <p>Os resultados variam de acordo com cada pessoa, levando em conta diversos fatores.</p>
                <p>São baseados em consequência do que algumas pessoas podem conquistar.</p>
                <br></br>
                <p>Caso não se adapte ao desafio e perceba que ele não é para você, basta solicitar o reembolso ao nosso suporte em até 7 dias contados a partir da data de compra, que devolveremos 100% do valor pago.</p>
              </div>

              <div className="divisoria-final">
                <hr></hr>
                <span>All Rights Reserved 2022</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
