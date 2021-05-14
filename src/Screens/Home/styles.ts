import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position:relative;
    display:flex;
    align-items: center;
    flex-direction:column;
`

export const Form = styled.form`
    background-color: #fff;
    margin: 10px 0;
    width:90%;
    height: calc(100% - 20px);
    overflow-y: auto;
    max-width: 400px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    h2{
        margin-bottom: 20px;
        font-size: 22px;
    }

    button{
        min-width: 250px;
        border-radius: 5px;
        background-color: #789;
        padding: 10px;
        margin: 10px 0;
        font-size: 18px;
        color:#fff;
        cursor: pointer;
        &:hover{
            filter: opacity(0.9);
        }
    }
`