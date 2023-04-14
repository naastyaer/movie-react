import Button from "components/Button"
const Film = ({Film, setShow,setinfoFilm}) =>{
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
      .then(res => {setinfoFilm(res)})
    }
    /*из-за того что запрос на клике, поэтом инфа так долго обновляется в окне?*/
  
    return (  
    <div className="mb-10 text-black py-2 px-3 shadow-nd border-b-2 bg-gradient-to-r from-zinc-400 to-zinc-700 backdrop-opacity-30  w-2/4 ">
        <div className="flex flex-col justify-between items-center"> 
          <div className="text-center md:h-[100px] h-[70px]">
            <p className="mt-1 text-lg font-bold h-[30px]">{Film.Title}</p>
            <p className="mt-1">{Film.Year}</p>
          </div>

          <div className="flex flex-col justify-between items-center h-[150px] mb-3 bg-yellow-500">
            <img src={Film.Poster} className="w-4/4 md:h-5/6 mb-5 h-[100px]" alt="description of image"/>
            <Button title={'подробнее'} handelClick={handelClick}/>
          </div>
          
        </div>
    </div>
    )
}
export default Film