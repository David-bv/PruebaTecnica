import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { showUser, userDelete } from '../../actions/actionUser';
import { ButtonList } from '../../styles/ListStyled';
import UpdateUser from './UpdateUser';


const ListUser = () => {

  const dispatch = useDispatch();
  const [modal, setModal] = useState(false)
  const [dataModal, SetDataModal] = useState([])

  const { users } = useSelector(store => store.user)


  useEffect(() => {
    dispatch(showUser())
  }, [dispatch])

  const handleUpdate = (id) => {
    console.log('editar', id);
    setModal(true)
    const getData = users.find(u => u.numberId === id)
    SetDataModal(getData)
  }

  return (
    <div>
      <Table responsive striped bordered hover variant="dark" className='tableUser'>
        <thead>
          <tr>
            <th>Nombre Usuario</th>
            <th>Documento</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((u, i) => (
              <tr key={i}>
                <td>{u.nickname}</td>
                <td>{u.numberId}</td>
                <td>{u.cellphone}</td>
                <td>{u.address}</td>
                <td>
                  <ButtonList size="sm" bsPrefix='btn' onClick={() => handleUpdate(u.numberId)}>
                    Editar
                  </ButtonList>
                </td>
                <td>
                  <ButtonList size="sm" bsPrefix='btn' onClick={() => dispatch(userDelete(u.numberId))}>
                    Eliminar
                  </ButtonList>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>

      {
        modal === true ? <UpdateUser modal={dataModal} /> : ''
      }
    </div>
  )
}

export default ListUser