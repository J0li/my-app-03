import './assets/negocio.svg'
import './assets/Cores.svg'
import './assets/Cell_PhoneApp.svg'


function IdentVisual() {
    const IdVisual = styled.div`
margin: 0;
`


    const NossoNegocio = styled.div`
    `

    const VisaoFuturo = styled.div`
    `

    const tittles = styled.div`
    `

    const texts = styled.p`
    `

    const imgs = styled.img`
margin: 0;
`


    return (
        <div>
            <IdVisual>

                <tittles>
                    <h3>nossas escolhas</h3>
                    <H2>Identidade visual</H2>
                </tittles>

                <imgs>
                    <img src="Cores.svg" alt="Identidade Visual" />
                </imgs>

                <texts>
                    <h3>Poppis</h3>
                    <p>Design acolhedor, sua visualização proporciona um acolhimento ao usuário</p>
                </texts>

                <texts>
                    <h3>Quantico</h3>
                    <p>Design moderno, sua forma demonstrar algo tecnológico e moderno</p>
                </texts>

            </IdVisual>

            <NossoNegocio>

                <tittles>
                    <h3>nossas escolhas</h3>
                    <H2>Nosso negócio</H2>
                </tittles>

                <imgs>
                    <img src="negocio.svg" alt="Nosso negocio" />
                </imgs>

            </NossoNegocio>

            <VisaoFuturo>

                <tittles>
                    <h3>E não para por aí</h3>
                    <h2>Futuros passos</h2>
                </tittles>

                <texts>
                    <p>Um aplicativo para dispositiveis moveis, tanto para o sistema android como IOS</p>
                </texts>

                <imgs>
                    <img src="Cell_PhoneApp.svg" alt="Aplicativos Mobile" />
                </imgs>

            </VisaoFuturo>

        </div>
    )
}