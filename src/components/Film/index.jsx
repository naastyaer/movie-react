import Button from "components/Button"
const Film = ({Film, setShow,setinfoFilm,infoFilm}) =>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'Td24bfq18lmsh5KqGTIsh6amrNJRp1h4MngjsnIdn2a8CFcrl5',
      'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
    }
}
    const handelClick = (e)=>{
      e.preventDefault()
      setShow(true)
      fetch(`https://moviesdb5.p.rapidapi.com/om?i=${Film.imdbID}`, options)
      .then(data => data.json())
      .then(res => {
      console.log(res)
      setinfoFilm(res)
      })
    }
  
    return (  
    <div className="mb-10 text-black py-2 px-3 shadow-nd border-b-2 bg-red-100 w-3/4 ">
        <div className="flex flex-col justify-between items-center"> 
          <div className="text-center">
            <p className="mt-1 text-lg font-bold">{Film.Title}</p>
            <p className="mt-1">{Film.Year}</p>
          </div>
          
          <img src={Film.Poster} className="w-3/4 h-{100px}"/>
        <Button title={'подробнее'} handelClick={handelClick}/>
        </div>
    </div>
    )
}
export default Film
/*надо выровнить внутри карточки контент*/