import Bitcoin from '../assets/bitcoin.jpg'
import Footer from './Footer'

const History = () => {
    return(
        <div>
            <img src={Bitcoin} className="img-fluid" />

            <div className='container my-5'>
                <div className='row p-4 pb-0 pe-lg-0 pt-lg-5 align-itens-center
                rounded-3 border shadow-lg bg-light'>
                    <div className='col lg-7 p-3 p-lg-5 pt-lg-3'>
                        <h1 className='text-center'>Historia das criptomoedas</h1>
                        <p>Para entendermos a historia das criptomoedas temos que entender a historia do bitcoin,
                        ja que ele foi a primeira criptomoeda do mundo.</p>
                        <p>A história do Bitcoin é repleta de mistérios. A primeira criptomoeda do mundo 
                        foi lançada há 13 anos, mas até hoje ninguém sabe a verdadeira identidade da 
                        pessoa – ou pessoas – por trás do projeto. Há suspeitas, mas nenhuma capaz de 
                        desvendar o enigma. O Bitcoin surgiu em 31 de outubro de 2008. Naquele dia, o 
                        criador (ou criadores) da criptomoeda, que se esconde sob o pseudônimo de Satoshi 
                        Nakamoto, enviou um e-mail para uma lista de pessoas interessadas em criptografia. 
                        No corpo da mensagem, ele escreveu que vinha trabalhando “em um novo sistema de 
                        dinheiro eletrônico totalmente peer-to-peer, sem terceiros confiáveis”. Ele também 
                        inseriu um link com o white paper (manual) da criptomoeda, em inglês. No documento, 
                        com nove páginas, Nakamoto descreveu resumidamente os fundamentos do Bitcoin, 
                        baseados em quatro pontos principais:</p>

                        <ul>
                            <li>É uma rede peer-to-peer para evitar o gasto duplo (possibilidade de enviar 
                            as mesmas moedas mais de uma vez)</li>
                            <li>Sem intermediários, como bancos</li>
                            <li>Permite o anonimato dos participantes</li>
                            <li>usa Prova de Trabalho (um tipo de algoritmo) para gerar Bitcoin (processo 
                            que ganhou o nome de mineração) e prevenir o tal gasto duplo.</li>
                        </ul>

                        <p>No manual, Nakamoto também estipulou que o BTC tem oferta finita. No total, 
                        apenas 21 milhões de unidades podem ser mineradas (criadas) até 2140, o que o 
                        torna escasso. Até o final de outubro de 2021, segundo o agregador Coingecko, 
                        18,8 milhões de Bitcoin já haviam sido emitidas. Apesar de o Bitcoin ter sido 
                        lançado no final de 2008, o primeiro bloco (nome do arquivo com informações 
                        sobre transações) da blockchain da criptomoeda só foi minerado no dia 3 de 
                        janeiro de 2009. No bloco, chamado de Gênese, Nakamoto escreveu a mensagem 
                        criptografada “The Times 03/Jan/2009 Chancellor on brink of second bailout for banks”.</p>

                        <p> O texto, que em português significa “Chanceler à beira do segundo resgate aos 
                        bancos”, é uma alusão à manchete do jornal britânico The Times daquele dia. As 
                        palavras foram interpretadas como um indicativo das motivações que teriam 
                        levado Nakamoto a criar a criptomoeda.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default History