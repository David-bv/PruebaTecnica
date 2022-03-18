import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { userEdit } from '../../actions/actionUser'
import { useForm } from '../../hook/useForm'
import { FormUpdate, UpdateButton, UpdateCloseButton } from '../../styles/UpdateStyled'

const UpdateUser = ({ modal }) => {

  const dispatch = useDispatch()
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);


  const [values, handleInputChange, reset] = useForm({
    address: modal.address,
    cellphone: modal.cellphone,
    nickname: modal.nickname,
    numberId: modal.numberId
  })

  let { address, cellphone, nickname, numberId } = values;

  const handleProductSubmit = (e) => {
    e.preventDefault()
    console.log('productRegister');
    dispatch(userEdit(numberId, values))
    reset()
  }

  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormUpdate onSubmit={handleProductSubmit}>
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
                <Form.Label style={{ display: 'none' }}>Documento</Form.Label>
                <Form.Control
                  type="text"
                  name='numberId'
                  value={numberId}
                  onChange={handleInputChange}
                  style={{ display: 'none' }}
                  required
                />
              </Form.Group>

              <UpdateCloseButton variant="primary" onClick={handleClose}>
                Cerrar
              </UpdateCloseButton>
              <UpdateButton variant="primary" type="submit">
                Actualizar
              </UpdateButton>
            </FormUpdate>
          </Modal.Body>
        </Modal>
      </>
    </div>
  )
}

export default UpdateUser