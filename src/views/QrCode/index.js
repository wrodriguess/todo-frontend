import {useState, useEffect} from 'react'
import Qr from 'qrcode.react'

import * as S from './styles.js'
import isConnected from '../../utils/isConnected'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function QrCode() {
    const [mac, setMac] = useState()

    useEffect(() => {
        if(isConnected){
            window.location.href = "http://localhost:3000";
        }
    }, [])

    // Salvando o mac no local Storage (cookies)
    async function saveMac(){
                                    // @todo/macaddress será o nome da variavel em local storage e mac será o valor
        await localStorage.setItem('@todo/macaddress', mac)
        window.location.href = "http://localhost:3000";
    }

    return(
        <S.Container>
            <Header/>
            
            <S.Content>
                <h1>CAPTURE O QRCODE PELO APP</h1>
                <p>Suas atividades serão sincronizadas com a do seu celular.</p>
                
                <S.QrCodeArea>
                    <Qr value="getmacaddress" size={350}/>
                </S.QrCodeArea>

                <S.ValidationCode>
                    <span>Digite a numeração que apareceu no celular</span>
                    <input type="text" onChange={(e) => setMac(e.target.value)} defaultValue={mac}/>
                    <button type="button" onClick={saveMac}>SINCRONIZAR</button>
                </S.ValidationCode>
            </S.Content>

            <Footer/>
        </S.Container>
    )
}

export default QrCode