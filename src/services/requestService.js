const axios = require('axios')

const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZGVlNGY1YWQ2MDJkMDc3OTYyOTVhN2UiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkJqw7ZybiBCcmVraSIsImVtYWlsIjoiYmpvcm50MThAcnUuaXMiLCJ1c2VybmFtZSI6ImJqb3JudDE4IiwicGFzc3dvcmQiOiIkMmEkMDgka0M5Q1ltdm9IeU5Sbk91Lm0ua05ldXQuZUFiemhwQ29oSUFUa29HWWJ1WndLYXF1bnplMGkiLCJkb21haW4iOiJoci5pcyIsIm1lc3NhZ2UiOiJFZHVjYXRpb25hbCBwdXJwb3NlcyAiLCJpYXQiOjE1NzU5MDE0MzMsImV4cCI6MTU3NTk4NzgzM30.8VVpgdiNYz_ZcVw9p6Uk-QhlDERN4Ock6GRboFNBzFo';

const instance = axios.create({
  baseURL: 'http://api.kvikmyndir.is',
  timeout: 1000,
  headers: { 'x-access-token': accessToken }
});



export const getCinemas = async () => {
  try {
    let response = await instance.get('/theaters');
    response = JSON.stringify(response.data)
    response = response.replace(/\\t/g, '')
    response = JSON.parse(response)
    return response
  } catch (error) {
    console.error(error);
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
