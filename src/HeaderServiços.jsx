import React from "react";
import fundoServico from './assets/headerservicos.png';

function Servicos() {

    const Servheader = styled.div`
    width:100%;
position: relative;
`

    const ImagemS = styled.div`
    width: 100%;
    position: absolute;

`

    const ConteinerOpcao = styled.div`
    position: absolute;
`



    return (
        <div>
        /* espaço navbar */

            <ConteinerOpcao>
                <p>Venha fazer parte da nossa plataforma, sendo cliente ou prestador de serviços. </p>
                <button style={{ color: '#FB8C00' }}>Cliente</button>
                <button style={{ color: '#2CB87B' }}>Profissional</button>
            </ConteinerOpcao>

            <Servheader>
                <ImagemS><img src={fundoServico} /></ImagemS>
            </Servheader>

        </div>
    )
}

export default Servicos;