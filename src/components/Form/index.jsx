import Button from "components/Button";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';



const categorys = ['food', 'clothes', 'travel', 'car', 'cinema']

const Form = ({addPurchase}) =>{
    const [number, setNumber] = useState (' ')
    const [category, setCategory] = useState (categorys[1])
    const [value, onChange] = useState(new Date())
    //const [error, setError] = useState (' ') 


    

    const handelClick = (e)=>{
        //тут нужно делать проверку?
        e.preventDefault()
        const purchase = {
        id: uuidv4(),
        category,
        number,
        date: value,
        color: "bg-fuchsia-500 text-white text-sm font-semibold rounded-full px-3 py-1"     //а как мне сюда добавить разный цвет по категориям? если еда то зеленый и тд
        }
        addPurchase(purchase)
    }

    return (
        <div className="w-full md:w-1/2 ">
            <form>
                <h2 className=" text-xl md:text-2xl mb-5 text-center mt-2">Добавить новые расходы</h2>
                <div className=" gap-4 flex flex-col"> 
                    <div className="flex flex-col">
                        <label className="text-white">Сумма</label>
                        <input 
                            onChange={(purchase) =>{ 
                            setNumber(purchase.target.value.replace(/\D/, ""))  
                            }}
                            
                            value={number}
                            name="number" 
                            type="text" 
                            className="mb-2  text-black  w-full  rounded-sm bg-slate-100 p-1"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white">Kатегория</label>
                        <select 
                                onChange={(purchase) =>  setCategory(purchase.target.value)}
                                value={category}
                                className="mb-2  w-full  rounded-sm text-black bg-slate-100 p-1" >
                                {categorys.map(category => (
                                <option key={category}>{category}</option>
                                ))}
                        </select>
                        
            
                    </div>
                    <Button title="добавить" handelClick={handelClick} type="submit"/>
                </div> 
            
                
            </form>
        </div>    
    )
}
export default Form
