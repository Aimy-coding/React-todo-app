import React from 'react';
import { useState } from 'react'


export const InputForm = ({taskList, setTaskList}) => {
  const [inputText, setInputText] = useState("") 

  const handleSubmit =(e) =>{
    e.preventDefault();
  
    // inputに打ち込んだ文字をコンソールに出力したい
    console.log(inputText)
    // taskを追加する
    setTaskList([
      ...taskList,//スプレッド構文：カンマ区切り後のものをの配列に追加する
      {
        id : taskList.length,
        text: inputText,
        completed : false
      }
    ]);
    setInputText("")

    
  }

  const handleChange =(e)=>{
    setInputText(e.target.value)
     
  }
  return (
    <div className = "inputForm">

        <form onSubmit={handleSubmit}>
            <input type = "text" onChange ={handleChange} value ={inputText}/>
            <button>
            <i className="fa-solid fa-circle-plus"></i>
            </button>
        </form>

    </div>
  )
}
