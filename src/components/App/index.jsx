import { useState, useEffect } from "react";
import "components/App/App.css";
import Form from "components/Form";
import Film from "components/Film";
import Notification from "components/Notification";
import Modal from "components/Modal";
import Header from "components/Header";



const App=() =>{
const [name, setName] = useState ('')
const [show, setShow] = useState (false)
const [listFilms, setlistFilms] = useState ([])
const [infoFilm, setinfoFilm] = useState ({})
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'Td24bfq18lmsh5KqGTIsh6amrNJRp1h4MngjsnIdn2a8CFcrl5',
    'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
  }
}
useEffect(()=>{ 
  fetch(`https://moviesdb5.p.rapidapi.com/om?s=${name}`, options)
  .then(data => data.json())
  .then(res => {
    if(res.Response === "False"){
      setlistFilms([])
    } else{
      setlistFilms(res.Search)
    }
  })},[name])

  return (
    <div className="w-full h-screen bg-black"> //какую правильно задать высоту, чтобы при добавлении фильмов не было белых пробелов по бокам?
      <div className="w-[90%] m-auto">
        <Header setName={setName} />
        <Modal show={show} onClose={()=>setShow(false)} infoFilm={infoFilm}/>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-[390px]:grid-cols-1 gap-4 last:gap-0 justify-items: center bg-black pt-10">
          {listFilms.length > 0 ? listFilms.map((film) => {return <Film Film={film} key={film.imdbID} setShow={setShow} setinfoFilm={setinfoFilm} infoFilm={infoFilm}/>}): <Notification/> }
        </div>
      </div>  
    </div>
  )
}
export default App;
