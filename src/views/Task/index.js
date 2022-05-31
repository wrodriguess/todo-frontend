import {useState, useEffect} from 'react'

import * as S from './styles.js'
import api from '../../services/api'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import typeIcons from '../../utils/typeIcons'

function Task() {
  const [type, setType] = useState()
  const [done, setDone] = useState(false)

  return (
    <S.Container>
      <Header/>
      
      <S.Form>
        <S.TypeIcons>
          {typeIcons.map((icon, index) => (
            // Impedindo de exibir a posição 0 do array
            index > 0 && 
              <button type="button" onClick={() => setType(index)}>
                <img src={icon} alt="Tipo da tarefa" className={type && type !== index && 'inative'}/>
              </button>
          ))}
        </S.TypeIcons>

        <S.Input>
          <span>Título</span>
          <input type="text" placeholder="Título da tarefa"/>
        </S.Input>

        <S.TextArea>
          <span>Descrição</span>
          <textarea rows={5} placeholder="Descrição da tarefa"/>
        </S.TextArea>

        <S.Input>
          <span>Data</span>
          <input type="date"/>
        </S.Input>

        <S.Input>
          <span>Hora</span>
          <input type="time"/>
        </S.Input>

        <S.Options>
          <div>
            <input type="checkbox" id="done" checked={done} onChange={() => setDone(!done)}/>
            <label htmlFor="done">CONCLUÍDO</label>
          </div>
          
          <button type="button">EXCLUIR</button>
        </S.Options>

        <S.Save>
          <button type="button">SALVAR</button>
        </S.Save>

      </S.Form>

      <Footer/>    
    </S.Container>
  );
}
  
export default Task;
  