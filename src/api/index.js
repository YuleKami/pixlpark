const server = async (url, method = 'GET', data = null) => {
    const response = await fetch(`http://api.pixlpark.com/${url}`, {
        method: method,
        headers: {'Content-Type': 'application/json'},
        'mode': 'no-cors',
        'Access-Control-Allow-Origin': '*'
    })
    return response.json()
}

export const getReqToken = async () => {
    console.log('logging')
    console.log(await server('oauth/requesttoken'))
    return await server('oauth/requesttoken')
}

export const getAccessToken = () => {
    return server('oauth/accesstoken')
}