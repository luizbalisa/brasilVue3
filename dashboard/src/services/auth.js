export default httpClienet => ({
  login: async ({ email, password }) => {
    const response = await httpClienet.post('/auth/login', {
      email,
      password
    })

    let erros = null

    if (!response.data) {
      erros = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }
    
    return {
      data: response.data,
      erros,
    }
  }
})