import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.div`
    width: 50%;
    margin-bottom: 70px;
`
    
export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    img{
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;

        &:hover{
            opacity: 0.5;
            transition: all 0.3s ease;
        }
    }

    button{
        background: none;
        border: none;
    }

    .inative{
        opacity: 0.5;
    }
`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span{
        color: #707070;
        margin: 5px 0;
    }

    input{
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #ee6b26;
    }
`

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span{
        color: #707070;
        margin: 5px 0;
    }

    textarea{
        resize: none;
        font-size: 16px;
        border: 1px solid #ee6b26;
        border-radius: 5px;
        padding: 10px;
    }
`

export const Options = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: bold;

    input, label{
        color: #ee6b26;
        cursor: pointer;
        font-size: 16px;

        &:hover{
            opacity: 0.5;
            transition: all 0.3s ease;
        }
    }

    button{
        background: none;
        border: none;
        font-size: 16px;
        cursor: pointer;
        color: #20295F;
        font-weight: bold;

        &:hover{
            opacity: 0.5;
            transition: all 0.3s ease;
        }
    }
`

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;

    button{
        width: 100%;
        background: #ee6b26;
        border: none;
        font-size: 20px;
        color: #fff;
        font-weight: bold;
        padding: 20px;
        border-radius: 30px;
        cursor: pointer;

        &:hover{
            opacity: 0.5;
            transition: all 0.3s ease;
        }
    }


`