import Button from "components/Button";
import { useState } from "react";
const Form = ({ setName}) =>{
    const [inputText, setinputText] = useState ('')
        
    const handelClick = (e)=>{
        e.preventDefault()
        setName(inputText)
        //console.log(name)
        
    }
    


    return (
        <div className="mb-10">
            <form>
                <h2 className=" text-xl md:text-2xl mb-5 text-center mt-2">Введите название фильма</h2>
                <div className='flex flex-col gap-4 items-center'> 
                    <div className="flex flex-col">
                        <label className="">Название</label>
                        <input 
                            onChange={(purchase) =>{ 
                                setinputText(purchase.target.value)     
                            }}
                            value={inputText}
                            name="name" 
                            type="text" 
                            className="mb-2 text-black w-[150px] rounded-sm bg-slate-100 p-1"
                        />
                    </div>
                    <Button title="поиск" handelClick={handelClick} type="submit"/>
                </div> 
            
                
            </form>
        </div>    
    )
}
export default Form
