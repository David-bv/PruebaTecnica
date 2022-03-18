import { Button, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";

export const ButtonWeather = styled(Button)`
    background-color: #67ada6;
    color: #0d1615;
    border: none;
    width: 20%;
    font-size: 15px;
    display: block;
    margin: 10px Auto 0px;
    text-align: center;
    min-width: 197px;
    &:hover{
        background-color: #242F3E;
        color:#FFFFFF;
    }
    &:focus{
        outline: none;
        background-color: #242F3E;
        color:#FFFFFF;
    }
    @media only screen and (max-width: 600px) {
        width:65%;
    }
`

export const SearchWeather = styled(FormControl)`
    padding-right: 0;
    border-radius: 6px;
    height: 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    @media only screen and (max-width: 600px) {
        width:100%;
        min-width: 0px;
    }
`

export const TextTitle = styled.h4`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    color: #27413e;
    text-align: center;
    padding: 2.5rem 0px 1rem;
`

export const FormInput = styled(Form)`
    width: 20%;
    display: block;
    margin: 0 auto;
    max-width: 406px;
    padding: 20px 0px!important;
    @media only screen and (max-width: 600px) {
        width:90%;
    }
`