import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {format} from 'date-fns'

import * as S from './styles.js'
import api from '../../services/api'
import isConnected from '../../utils/isConnected'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import typeIcons from '../../utils/typeIcons'

function Task() {
  const navigate = useNavigate()
  const params = useParams()
  const currentDate = format(new Date(), 'yyyy-MM-dd')
  const currentHour = format(new Date(), 'HH:mm')

  useEffect(() => {
    if(!isConnected){
      navigate('/qrcode')
    }else{
      setMacaddress(isConnected)
    }
  }, [])

  const [id, setId] = useState()
  const [type, setType] = useState()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [date, setDate] = useState()
  const [hour, setHour] = useState()
  const [macaddress, setMacaddress] = useState()
  const [done, setDone] = useState(false)

  useEffect(() => {
    loadTaskDetails()
  }, [])

  // Carregando dados da tarefa caso um id seja passado na url
  async function loadTaskDetails(){
    await api.get(`/task/${macaddress}/${params.id}`)
      .then(response => {
        console.log(response)
        setId(response.data._id)
        setType(response.data.type)
        setTitle(response.data.title)
        setDescription(response.data.description)
        setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
        setHour(format(new Date(response.data.when), 'HH:mm' ))
        setDone(response.data.done)
      })
  }

  async function save(){
    // Validação dos campos obrigatórios
    if(!type){
      return alert('Tipo é obrigatório')
    }else if (!title){
      return alert('Titulo é obrigatório')
    }else if (!description){
      return alert('Descrição é obrigatório')
    }else if (!date){
      return alert('Data é obrigatório')
    }else if (!hour){
      return alert('Hora é obrigatório')
    }else if(!params.id){
      if(currentDate > date){
        return alert('Escolha uma data futura')
      }else if(date === currentDate){
        if(currentHour > hour){
          return alert('Escolha uma hora futura')
        }
      }
    }

    if(params.id){
      // Caso true - trata-se de um update
      await api.put(`/task/${params.id}`, {macaddress, type, title, description, when : `${date}T${hour}:00`, done})
      .then(() => {
          alert('Tarefa Atualizada')
      })
    }else{
      // Caso false - trata-se de um create
      await api.post('/task', {macaddress, type, title, description, when : `${date}T${hour}:00`})
      .then(() => {
          alert('Tarefa cadastrada')
      })
    }
    navigate('/')
  }

  async function remove(){
    const res = window.confirm('Deseja realmente remover a tarefa?')
    if(res){
      await api.delete(`/task/${params.id}`)
      .then(() => {
        alert('Tarefa Removida')
      })
      navigate('/')
    }
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
          
          {/* Exibe o botão excluir somente em UPDATE */}
          {params.id &&
            <button type="button" onClick={remove}>EXCLUIR</button>  
          }
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
  