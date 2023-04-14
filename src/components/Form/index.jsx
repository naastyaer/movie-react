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
                <div className='flex flex-row gap-4 items-center'> 
                    <div className="flex mt-2">
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
