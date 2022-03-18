import '@testing-library/jest-dom'
import { types, typesUsers, typesWeather } from '../types/types'


describe('Verificar instalacion de las dependencias de testing', () => {
    test('should', () => {

    })

})

test('Validación de types', () => {
    expect(types).toEqual({
        login: 'login',
        logout: 'logout',
        register: 'register'
    })
    expect(typesUsers).toEqual({
        create: 'create',
        edit: 'edit',
        delete: 'delete',
        list: 'list',
        search: 'search'
    })
    expect(typesWeather).toEqual({
        add: '[WEATHER] add',
    delete: '[WEATHER] delete'
    })
})




