import * as S from './styles'
import iconDefault from '../../assets/default.png'

function TaskCard(){
    return(
        <S.Container>
            <S.TopCard>
                <img src={iconDefault} alt="Icone da tarefa"/>
                <h3>Titulo da tarefa</h3>
            </S.TopCard>
            <S.BottomCard>
                <strong>31/05/2022</strong>
                <span>13:17</span>
            </S.BottomCard>
        </S.Container>
    )
}

export default TaskCard