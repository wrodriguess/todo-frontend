import {useState, useEffect} from 'react'

import * as S from './styles.js'
import api from '../../services/api'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import typeIcons from '../../utils/typeIcons'

function Task() {
  const [id, setId] = useState()
  const [type, setType] = useState()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [date, setDate] = useState()
  const [hour, setHour] = useState()
  const [macaddress, setMacaddress] = useState("00:00:00:00:00:00")
  const [done, setDone] = useState(false)

  async function save(){
                            // Parametros - req.body
    await api.post('/task', {macaddress, type, title, description, when : `${date}T${hour}:00`})
      .then(() => alert('Tarefa Cadastrada'))
  }
  
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
          <input type="text" placeholder="Título da tarefa" defaultValue={title} onChange={(e) => setTitle(e.target.value)}/>
        </S.Input>

        <S.TextArea>
          <span>Descrição</span>
          <textarea rows={5} placeholder="Descrição da tarefa" defaultValue={description} onChange={(e) => setDescription(e.target.value)}/>
        </S.TextArea>

        <S.Input>
          <span>Data</span>
          <input type="date" defaultValue={date} onChange={(e) => setDate(e.target.value)}/>
        </S.Input>

        <S.Input>
          <span>Hora</span>
          <input type="time"  defaultValue={hour} onChange={(e) => setHour(e.target.value)}/>
        </S.Input>

        <S.Options>
          <div>
            <input type="checkbox" id="done" checked={done} onChange={() => setDone(!done)}/>
            <label htmlFor="done">CONCLUÍDO</label>
          </div>
          
          <button type="button">EXCLUIR</button>
        </S.Options>

        <S.Save>
          <button type="button" onClick={save}>SALVAR</button>
        </S.Save>

      </S.Form>

      <Footer/>    
    </S.Container>
  );
}
  
export default Task;
  