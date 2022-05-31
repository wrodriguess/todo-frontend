import styled from 'styled-components'

export const Container = styled.div`
    width: 260px;
    height: 60px;
    background: ${props => props.actived ? '#EE6B26' : '#20295f'};
    padding: 10px;

    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img{
        width: 25px;
        height: 25px;
    }

    span{
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        align-self: flex-end;

    }

    &:hover{
        background: #EE6B26;
        cursor: pointer;
        transition: all 0.3s ease;
    }
`
