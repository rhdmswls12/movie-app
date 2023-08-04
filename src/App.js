import './App.css';
import ColorSchemesExample from './navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import LoginPage from './login';


function App() {

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  let [input, setInput] =useState('');

  axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=4ac4901c&s=family&type=episode')
    .then(res => {
      let result = res.data.Search
      console.log(result) 
  }) //series, episode 별로 영화 검색할 수 있게 만들기, 모달 넣을 거 생각해보기
  useEffect(() => {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=4ac4901c&s=galaxy&type=movie')
    .then(res => {
      let result = res.data.Search
      setMovies(result) 
    })
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=4ac4901c&s=galaxy&type=series')
    .then(res => {
      let result = res.data.Search
      setSeries(result)
    })
  },[])

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={
        <div>
          <ColorSchemesExample></ColorSchemesExample>
      <h3 style={{marginTop: '30px'}}>You can find movies here!<br></br>
      This is an example of when you searched for <b>'Galaxy'</b></h3>
      <br></br> 
      <div className='search'>
      <input onChange={(e) => {
        setInput(e.target.value)
      }} placeholder='Anytime!'></input>
      <Button variant="dark" onClick={() => {
        axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=4ac4901c&s='+input)
        .then((res) => {
          let result = res.data.Search
          setMovies(result)
        })
        axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=4ac4901c&s='+input+'&type=series')
        .then((res) => {
          let result =res.data.Search
          setSeries(result)
        })
      }} style={{marginLeft:'10px'}}>search</Button>
      </div> 
      <h2 className='title'>Movies</h2>
      <div className='box'>
      <button className='button' onClick={() => {
        let copiedMovie = [...movies]
        let copiedSeries = [...series]
        copiedMovie.sort((a, b) => {
          return b.Year - a.Year
        })
        copiedSeries.sort((a, b) => {
          return b.Year - a.Year
        })
        setMovies(copiedMovie)
        setSeries(copiedSeries)
      }}>최신순</button>
      <button className='button' onClick={() => {
        let copiedMovie = [...movies]
        let copiedSeries = [...series]
        copiedMovie.sort((a, b) => {
          if(a.Title.toLowerCase()>b.Title.toLowerCase())
            return 1;
          else if (a.Title.toLowerCase()<b.Title.toLowerCase())
            return -1;
          else
            return 0;
        })
        copiedSeries.sort((a, b) => {
          if(a.Title.toLowerCase()>b.Title.toLowerCase())
            return 1;
          else if (a.Title.toLowerCase()<b.Title.toLowerCase())
            return -1;
          else
            return 0;
        })
        setMovies(copiedMovie)
        setSeries(copiedSeries)
      }}>가나다</button>
      </div>
      <div className='container'>
      
      {
        movies.map((a, i) => {
          return (
            <Cards title={a.Title} i={i} poster = {a.Poster} year = {a.Year}></Cards> 
          )
        }) 
      }
      </div>
      <h2 className='title'>Series</h2>
      <div className='container'>
      {
        series.map((a, i) => {
          return (
            <Cards title={a.Title} i={i} poster = {a.Poster} year = {a.Year}></Cards> 
          )
        }) 
      }
      </div>
        </div>}></Route>
        <Route path='/login' element={
        <div>
          <ColorSchemesExample></ColorSchemesExample>
          <LoginPage></LoginPage>
        </div>}>

        </Route>
      </Routes>
      
    </div>
  );
}

function Cards(props) {
  let [like, setLike] = useState(0);


  return (
    <div className = "row">
      <div className ="col-md-4">
      <Card style={{ width: '18rem', margin: '50px auto'}}>
      <Card.Img variant="top" src={props.poster} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <h4 style={{textAlign:'center'}}>{props.year}</h4>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <div style={{ marginTop: '10px', cursor: 'pointer' }} onClick={() => {
          setLike(like + 1)}
        }>❤️ {like}</div> 
      </Card.Body>
    </Card>
    </div>
  </div>
    

  );
}


export default App;
