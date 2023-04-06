import Button from "components/Button";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const Form = ({name, setName}) =>{
    
    /*const handelClick = (e)=>{
        e.preventDefault()
        //тут нужно обновлять значение name 
        //setName(name)
        console.log(name)
    }*/

    return (
        <div className="">
            <form>
                <h2 className=" text-xl md:text-2xl mb-5 text-center mt-2">Введите название фильма</h2>
                <div className='flex flex-col gap-4 items-center'> 
                    <div className="flex flex-col">
                        <label className="">Название</label>
                        <input 
                            onChange={(purchase) =>{ 
                                setName(purchase.target.value)
                                 
                            }}
                            value={name}
                            name="name" 
                            type="text" 
                            className="mb-2 text-black w-[150px] rounded-sm bg-slate-100 p-1"
                        />
                    </div>
                    <Button title="поиск" /*handelClick={handelClick}*/ type="submit"/>
                </div> 
            
                
            </form>
        </div>    
    )
}
export default Form
