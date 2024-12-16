export default httpClient => ({
  getMe: async () => {
    const response = await httpClient.get('/users/me')
    console.log(response);
    

    return {
      data: response.data
    }
  },
  generateApikey: async () => {
    const response = await httpClient.post('/users/me/apikey')

    return {
      data: response.data
    }
  }
})