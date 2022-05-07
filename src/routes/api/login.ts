async function post({request}) {
  const body = await request.json()
  const { username, password } = body
  if (username === 'hello' && password === 'world') {
    return {
      status: 200,
      body: {
        message: 'you win!'
      }
    }
  }
  return {
    status: 403,
    body: {
      message: 'you lose!'
    }
  }
}

export { post }
