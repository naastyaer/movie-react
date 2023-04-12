import { useState, useEffect } from "react";
const Modal = ({show, onClose,infoFilm}) =>{
    if(!show){
        return null
    }
   
    return (  
    <div className="bg-neutral-700 w-screen h-screen flex content-center justify-center">
        <div className="bg-yellow-600 h-[100px] w-[200px]">
            <p>Это модальное окно</p>
           {console.log('лог в модальном окне '+infoFilm)}
            <p onClick={onClose}>закрыть</p>

        </div>
    </div>
    )
}
export default Modal