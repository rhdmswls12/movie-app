import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState } from 'react';
import { useAsync } from 'react-async';
import { useEffect } from 'react';


function getMovies() {
  axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=4ac4901c&s=frozen')
  .then(res => {
    let result = res.data.Search
    console.log(result)
  })
} 


