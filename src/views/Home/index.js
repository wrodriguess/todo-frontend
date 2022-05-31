import {useState} from 'react'

import * as S from './styles.js'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FilterCard from '../../components/FilterCard'

function Home() {
  const [filterActived, setFilterActived] = useState("today")

  return (
    <S.Container>
      <Header/>

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

      <Footer/>    
    </S.Container>
  );
}
  
export default Home;
  