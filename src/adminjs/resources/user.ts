import { ResourceOptions } from "adminjs";

export const userResourceOptions: ResourceOptions = {
  navigation: 'Administração',
  properties: {
    birth: {
      type: 'date'
    },
    password: {
      type: 'password'
    },
    role: {
      availableValues: [
        { value: 'admin', label: 'Administrador'},
        { value: 'user', label: 'Usuario Padrão'}
      ]
    }
  },

  editProperties:[ 'firstName', 'lastName', 'phone', 'email', 'password', 'birth', 'role' ],
  filterProperties: ['firstNameme', 'lastName', 'phone', 'email', 'password', 'birth', 'role', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'firstName', 'lastName', 'role'],
  showProperties: [ 'id', 'firstNameme', 'lastName', 'phone', 'email', 'birth', 'role', 'createdAt', 'updatedAt']
}
