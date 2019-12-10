const axios = require('axios')

const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZGVlNGY1YWQ2MDJkMDc3OTYyOTVhN2UiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkJqw7ZybiBCcmVraSIsImVtYWlsIjoiYmpvcm50MThAcnUuaXMiLCJ1c2VybmFtZSI6ImJqb3JudDE4IiwicGFzc3dvcmQiOiIkMmEkMDgka0M5Q1ltdm9IeU5Sbk91Lm0ua05ldXQuZUFiemhwQ29oSUFUa29HWWJ1WndLYXF1bnplMGkiLCJkb21haW4iOiJoci5pcyIsIm1lc3NhZ2UiOiJFZHVjYXRpb25hbCBwdXJwb3NlcyAiLCJpYXQiOjE1NzU5OTUwNTksImV4cCI6MTU3NjA4MTQ1OX0.bU-V7MMrxjbs9XmxAGbWu7I9E35kHtMK_kjFrpcbMFo';

const instance = axios.create({
  baseURL: 'http://api.kvikmyndir.is',
  timeout: 1000,
  headers: { 'x-access-token': accessToken }
});

const fixJson = async (obj) => {
  let retJson = obj
  retJson = JSON.stringify(retJson.data)
  retJson = retJson.replace(/\\t/g, '')
  retJson = JSON.parse(retJson)
  return retJson
}


export const getCinemas = async () => {
  try {
    let response = await instance.get('/theaters');
    response = await fixJson(response)
    return response
  } catch (error) {
    console.log(error)
    return []
  }
};

export const getMovies = async () => {
  try {
    const response = await instance.get('/movies');
    return response.data
  } catch (error) {
    console.error(error);
    return []
  }
};

export const getUpcomingMovies = async () => {
  try {
    const response = await instance.get('/upcoming');
    return response.data
  } catch (error) {
    console.error(error);
    return []
  }
}
