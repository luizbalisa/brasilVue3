export default httpClient => ({

  geMe: async () => {
    const response = await httpClient.get()

    let errors = null

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }
    
    return {
      data: response.data,
      errors,
    }
  }
})