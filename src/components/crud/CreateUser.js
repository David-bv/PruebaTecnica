import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { showUser, userRegister } from '../../actions/actionUser';
import { useForm } from '../../hook/useForm';
import { FormStyles } from '../../styles/FormStyled';
import { ButtonWeather } from '../../styles/WeatherStyled';

const CreateUser = () => {

  const [values, handleInputChange, reset] = useForm({
    address: '',
    cellphone: '',
    nickname: '',
    numberId: ''
  })

  const dispatch = useDispatch()
  let { address, cellphone, nickname, numberId } = values;

  const handleProductSubmit = (e) => {
    e.preventDefault()
    console.log('productRegister');
    dispatch(userRegister(values))
    reset()
  }

  useEffect(() => {
    dispatch(showUser())
  }, [dispatch])


  return (
    <div>
      <FormStyles onSubmit={handleProductSubmit}>
        <Form.Group className="mb-3 " controlId="formBasicNickName">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control
            type="text"
            name='nickname'
            value={nickname}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicAddress">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            name='address'
            value={address}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicTel">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            name='cellphone'
            value={cellphone}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDoc">
          <Form.Label>Documento</Form.Label>
          <Form.Control
            type="text"
            name='numberId'
            value={numberId}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <ButtonWeather variant="primary" type="submit">
          Registrar Usuario
        </ButtonWeather>
      </FormStyles>
    </div>

  )
}

export default CreateUser