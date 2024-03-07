const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/search/person?query=ryan%20reynolds&include_adult=false&language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmY1OWYxMDIyN2JkNDFkYWM5MDQ5NjVhMjJlN2IyZCIsInN1YiI6IjY1ZThkZDUyMDQ0M2M5MDE4NjU3YmNmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fBMaaZig3FWHguQrWJZ8KUdxRpaAx8grlWWWzOqNKFk'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));