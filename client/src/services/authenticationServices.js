import Api from '@/services/Api'

export default {
  register (credential) {
    return Api().post('register', credentials)
  }
}

// authenticationServices.register({
// email: 'testing@gmail.com',
// password: '123456'
// })
