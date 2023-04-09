import { useState, useEffect } from "react";
import "components/App/App.css";
import Form from "components/Form";
import Film from "components/Film";
import Notification from "components/Notification";


const App=() =>{
const [name, setName] = useState ('')
const [listFilms, setlistFilms] = useState ([]) //список фильмов, который будем обновлять
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'Td24bfq18lmsh5KqGTIsh6amrNJRp1h4MngjsnIdn2a8CFcrl5',
    'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
  }
};
useEffect(()=>{
  {console.log(name)}
  fetch(`https://moviesdb5.p.rapidapi.com/om?s=${name}`, options)
  .then(data => data.json())
  .then(res => {
    console.log(res)
    {console.log(name)}
    
    if(res.Response === "False"){
      return (
         <Notification/> //как мне добавить уведомление на экран, что ничего не найдено
         //{console.log('Ничего не найденo')}   
      )
    } else{
      setlistFilms(res.Search)
    }
  })},[name])

  return (
    <div className=""> 
    {console.log(listFilms)}
    <Form setName={setName}/>    
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-[390px]:grid-cols-1 gap-4 justify-items: center">
      {listFilms.length > 0 &&
           listFilms.map((film) => {
              return <Film Film={film} key={film.imdbID}/>
      })}
    </div>
    
    
          
    </div>
  );
}
export default App;
