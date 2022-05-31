import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    background: #20295F;
    border-bottom: 5px solid #EE6B26;
`

export const LeftSide = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    margin-left: 10px;

    img{
        width: 100px;
        height: 40px;
    }
    
`

export const RightSide = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    a{
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover{
            color: #EE6B26;
            transition: all 0.3s ease;
        }
    }

    #notification{
        img{
            width: 25px;
            height: 30px;
        }

        span{
            background: #fff;
            color: #EE6B26;
            padding: 3px 7px ;
            border-radius: 50%;
            position: relative;
            top: -20px;
            left: -10px;
        }

        &:hover{
            opacity: 0.5;
            transition: all 0.3s ease;
        }
    }

    .dividir::after{
        content: '|';
        margin: 0 10px;
        color: #fff;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`