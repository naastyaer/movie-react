import { useState, useEffect } from "react";
import "components/App/App.css";
import Form from "components/Form";


const App=() =>{
const [name, setName] = useState ('superman')
const [listFilms, setlistFilms] = useState ([]) //список фильмов, который будем обновлять
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'Td24bfq18lmsh5KqGTIsh6amrNJRp1h4MngjsnIdn2a8CFcrl5',
    'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
  }
};
/*при загрузке старницы, хочу чтобы он сразу показывал фильмы*/
/*useEffect(()=>{
  //console.log('поиск фильма')
  fetch(`https://moviesdb5.p.rapidapi.com/om?s=${name}`, options)
  .then(data => data.json())
  .then(res => setlistFilms(res))
  console.log(listFilms.Search) //выводит результат поиска в консоль
},[])*/

useEffect(()=>{
  //console.log('поиск фильма')
  fetch(`https://moviesdb5.p.rapidapi.com/om?s=${name}`, options)
  .then(data => data.json())
  .then(res => setlistFilms(res))
  console.log(listFilms.Search) //выводит результат поиска в консоль
},[name])



/*{listFilms.map((film)=>(
            <pre key={film.Title}>{JSON.stringify(film)}</pre>
          ))}*/
  return (
    <div className=""> 
    
    <Form setName={setName} name={name}/>
          <div>
          
          </div>
        

       
    </div>
  );
}
export default App;
