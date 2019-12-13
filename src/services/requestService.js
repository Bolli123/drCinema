const axios = require('axios')

const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZGVlNGY1YWQ2MDJkMDc3OTYyOTVhN2UiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkJqw7ZybiBCcmVraSIsImVtYWlsIjoiYmpvcm50MThAcnUuaXMiLCJ1c2VybmFtZSI6ImJqb3JudDE4IiwicGFzc3dvcmQiOiIkMmEkMDgka0M5Q1ltdm9IeU5Sbk91Lm0ua05ldXQuZUFiemhwQ29oSUFUa29HWWJ1WndLYXF1bnplMGkiLCJkb21haW4iOiJoci5pcyIsIm1lc3NhZ2UiOiJFZHVjYXRpb25hbCBwdXJwb3NlcyAiLCJpYXQiOjE1NzYyMDE0NjcsImV4cCI6MTU3NjI4Nzg2N30.iRTuYfQJk2lSCvWkN6Sk7492pNcoyinNQCYKvB_MKXw';

const instance = axios.create({
  baseURL: 'http://api.kvikmyndir.is',
  timeout: 10000,
  headers: { 'x-access-token': accessToken }
});

const fixJson = async (obj) => {
  let retJson = obj
  retJson = JSON.stringify(retJson.data)
  retJson = retJson.replace(/\\t/g, '')
  retJson = retJson.replace(/<br>/g, ' ')
  retJson = retJson.replace(/<b>/g, '')
  retJson = JSON.parse(retJson)
  return retJson
}

const genresToString = async (response) => {
  let retMovies = response
  let genres = []
  for (let i = 0; i < retMovies.length; i++) {
    let retString = ''
    genres = retMovies[i].genres
    for (let j = 0; j < genres.length; j++) {
      if (j === genres.length - 1) {
        retString += genres[j].Name
      } else {
        retString += genres[j].Name + ", "
      }
    }
    retMovies[i].genres = retString
  }
  return retMovies
}

export const getCinemas = async () => {
  try {
    let response = await instance.get('/theaters');
    response = await fixJson(response)
    response = response.sort((a, b) => a.name.localeCompare(b.name, 'is', {sensitivity: 'base'}))
    return response
  } catch (error) {
    console.log(error)
    return []
  }
};

export const getMovies = async () => {
  try {
    let response = await instance.get('/movies');
    response = await genresToString(response.data)
    return response
  } catch (error) {
    console.error(error);
    return []
  }
};

export const getUpcomingMovies = async () => {
  try {
    let response = await instance.get('/upcoming');
    response = await genresToString(response.data)
    return response
  } catch (error) {
    console.error(error);
    return []
  }
}
