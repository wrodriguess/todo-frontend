import styled from 'styled-components'

export const Container = styled.div`
    width: 250px;
    height: 200px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;

    &:hover{
        opacity: 0.5;
        transition: all 0.3s ease;
        cursor: pointer;
    }
`

export const TopCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BottomCard = styled.div`
    width: 100%;    
    display: flex;
    justify-content: space-around;
    
    strong{
        color: #EE6B26;
    } 
    
    span{
        color: #707070;
    }
`