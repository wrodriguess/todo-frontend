import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import * as S from './styles'
import api from '../../services/api'
import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

function Header({clickNotification}){
    const [lateCount, setLateCount] = useState()

    useEffect(() => {
        lateVerify()
    }, [])

    // Roda a função lateVerify a cada 1 minuto para verificar se novas tarefas se tornaram atrasadas
    setInterval(lateVerify, 60000);

    async function lateVerify(){
        await api.get(`/task/filter/late/00:00:00:00:00:00`)
          .then(response => {
            setLateCount(response.data.length)
        })
    }

    return(
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="Logotipo"/>
            </S.LeftSide>

            <S.RightSide>
                <Link to="/">INÍCIO</Link>
                <span className="dividir"/>
                <Link to="/task">NOVA TAREFA</Link>
                <span className="dividir"/>
                <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
                <span className="dividir"/>
                <button type="button" id="notification" onClick={clickNotification}>
                    <img src={bell} alt="Notificações"/>
                    <span >{lateCount}</span>
                </button>
            </S.RightSide>
        </S.Container>
    )
}

export default Header