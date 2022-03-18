import { Card, Form } from "react-bootstrap";
import styled from "styled-components";

export const FormSelect = styled(Form)`
    width: 40%;
    max-width: 406px;
    display: block;
    margin: 0 auto;
    padding: 20px 0px;
    @media only screen and (max-width: 600px) {
        width:90%;
        min-width: 0px;
    }
`

export const CardRender = styled(Card)`
    display: block;
    margin: 0 auto;
    padding: 20px 0px;
    @media only screen and (max-width: 600px) {
        width:90%;
        min-width: 0px;
    }
`
export const SpanText = styled.span`
    display: block;
    margin: 0 auto;
`
export const CardTitle = styled.span`
    color: #416c68;
`
