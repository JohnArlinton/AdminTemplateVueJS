import Api from './Api'

class RoleService {
  static getAll () {
    return Api().get('/user')
  }
}

export default RoleService;