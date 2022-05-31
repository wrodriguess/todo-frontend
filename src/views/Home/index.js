import {useState, useEffect} from 'react'

import * as S from './styles.js'
import api from '../../services/api'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FilterCard from '../../components/FilterCard'
import TaskCard from '../../components/TaskCard'

function Home() {
  const [filterActived, setFilterActived] = useState("today")
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    LoadTasks()
  }, [filterActived])
  	
  async function LoadTasks(){
    await api.get(`/task/filter/${filterActived}/00:00:00:00:00:00`)
      .then(response => {
        setTasks(response.data)
      })
  }

  function notification(){
    setFilterActived("late")
}

  return (
    <S.Container>
      {/* IMPORTANTE: Passando função como props */}
      <Header clickNotification={notification}/>

      <S.FilterArea>
        <button type="button" onClick={() => setFilterActived("all")}>
          <FilterCard title="Todos" actived={filterActived === "all" ? true : false} />
        </button>
        <button type="button" onClick={() => setFilterActived("today")}>
          <FilterCard title="Hoje" actived={filterActived === "today" ? true : false} onClick={() => setFilterActived("today")}/>
        </button>
        <button type="button" onClick={() => setFilterActived("week")}>
          <FilterCard title="Semana" actived={filterActived === "week" ? true : false} onClick={() => setFilterActived("week")}/>
        </button>
        <button type="button" onClick={() => setFilterActived("month")}>
          <FilterCard title="Mês" actived={filterActived === "month" ? true : false} onClick={() => setFilterActived("month")}/>
        </button>
        <button type="button" onClick={() => setFilterActived("year")}>
          <FilterCard title="Ano" actived={filterActived === "year" ? true : false} onClick={() => setFilterActived("year")}/>
        </button>
      </S.FilterArea>

      <S.Title>
        <h3>{filterActived === "late" ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
      </S.Title>

      <S.Content>
        {tasks.map(task => (
          <TaskCard type={task.type} title={task.title} when={task.when}/>
        ))}
      </S.Content>

      <Footer/>    
    </S.Container>
  );
}
  
export default Home;
  