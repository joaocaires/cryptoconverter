import Crypto from '../assets/crypto5.jpg'
import Footer from './Footer'

const About = () => {
    return(
        <div>
            <img src={Crypto} className='img-fluid' />

            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-itens-center
                rounded-3 border shadow-lg bg-light">
                    <div className="col lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="text-center">O que são criptomoedas ?</h1>
                        <p>Genericamente, uma criptomoeda é um tipo de dinheiro – como outras moedas 
                        com as quais convivemos cotidianamente – com a diferença de ser totalmente digital. 
                        Além disso, ela não emitida por nenhum governo (como é o caso do real ou do dólar, 
                        por exemplo).</p>
                        <p>Embora o Bitcoin seja a moeda digital mais conhecida, o conceito de 
                        criptomoeda é anterior a ele. Segundo o site Bitcoin.org, mantido pela comunidade 
                        ligada ao Bitcoin, as criptomoedas foram descritas pela primeira vez em 1998 por 
                        Wei Dai, que sugeriu usar a criptografia para controlar a emissão e as transações 
                        realizadas com um novo tipo de dinheiro. Isso dispensaria a necessidade da existência 
                        de uma autoridade central, como acontece com as moedas convencionais.</p>
                    </div>
                </div>
            </div>
            
            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-itens-center rounded-3 border shadow-lg 
                bg-light">
                    <div className="col lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="text-center">Mas pra que elas servem ?</h1>
                        <p>As criptomoedas podem ser usadas com as mesmas finalidades do dinheiro físico em si. 
                        As três principais funções são servir como meio de troca, facilitando as transações 
                        comerciais; reserva de valor, para a preservação do poder de compra no futuro; e ainda 
                        como unidade de conta, quando os produtos são precificados e o cálculo econômico é realizado 
                        em função dela.</p>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-itens-center rounded-3 border shadow-lg 
                bg-light">
                    <div className="col lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="text-center">E a variação de preço como funciona ??</h1>
                        <p>Basicamente, o preço das moedas digitais varia segundo a boa e velha lei da oferta e 
                        da demanda. Nas épocas em que as criptomoedas ganham mais atenção, é normal que elas sejam 
                        mais procuradas pelos investidores, o que amplia o volume de compras – e consequentemente, 
                        os preços tendem a subir.</p>
                        <p>“Há somente um número limitado de bitcoins em circulação e novos Bitcoins são criados 
                        em uma taxa previsível e decrescente, o que significa que a demanda deva seguir este nível 
                        para manter seu preço estável”, explica o site Bitcoin.org.</p>
                    </div>
                </div>     
            </div>

            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-itens-center rounded-3 border shadow-lg
                bg-light">
                    <div className="col lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="text-center">Mas quais são as vantagens ??</h1>
                        <p>Criptomoedas são ativos recentes e com uma lógica bastante sofisticada de 
                        funcionamento. Por isso, ainda há muita gente procurando entender melhor como 
                        operar com elas. As moedas digitais têm algumas vantagens sobre moedas físicas 
                        e outros meios de pagamentos. O site Bitcoin.org lista as seguintes para os Bitcoins:</p>
                        <ul>
                            <li>Liberdade de pagamento: Com um Bitcoin, é possível enviar ou receber qualquer 
                            valor instantaneamente em qualquer lugar (semelhante ao pix).</li>
                            <br/>

                            <li>Taxas baixas: Atualmente, pagamentos realizados com moedas digitais são 
                            processados com taxas baixas ou até isentas. Há cobranças caso os usuários 
                            desejem ter uma confirmação mais rápida das operações pelo sistema.</li>
                            <br/>

                            <li>Segurança: Segundo o site Bitcoin.org, os pagamentos com Bitcoin podem ser 
                            realizados sem vincular informações pessoais do usuário à transação. 
                            “Isto oferece forte proteção contra furto de identidade”, informa. Outra vantagem 
                            é que o usuário pode proteger o dinheiro com cópias de segurança e criptografia</li>
                            <br/>

                            <li>Transparente: Todas as informações sobre a oferta de unidades de Bitcoin 
                            ficam disponíveis na blockchain para qualquer pessoa. Ninguém, nem nenhuma 
                            organização, pode controlar ou manipular o protocolo da moeda digital porque ele 
                            é criptografado. Com isso, o núcleo do Bitcoin é reconhecido como confiável por 
                            ser neutro, transparente e previsível.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About